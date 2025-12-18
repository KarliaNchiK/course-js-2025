import { postSlots, getUnavailableSlots, sendInvitation} from "./api.js";
import { createForm } from './ui.js';

export class Calendar {
    constructor(productId) {
        this.productId = productId;

        // Элементы страницы
        this.calendarElement = document.getElementById("calendar");
        this.weekLabelElement = document.getElementById("currentWeek");
        this.prevBtn = document.getElementById("prevWeek");
        this.nextBtn = document.getElementById("nextWeek");
        this.bookBtn = document.getElementById("bookButton");
        this.infoElement = document.getElementById("selectedInfo");
        this.closeButton = document.getElementById('closeButton');
        this.productInfoContainer = document.getElementById('productInfoContainer');

        // Данные модуля
        this.currentDate = new Date();
        this.selectedSlots = new Set();
        this.unavailableSlots = new Set();  // инициализация пустого Set

        this.init();
        this.loadUnavailableSlots();  // асинхронная загрузка слотов
    }

    init() {
        this.prevBtn.addEventListener("click", () => this.navigateWeeks(-1));
        this.nextBtn.addEventListener("click", () => this.navigateWeeks(1));
        this.bookBtn.addEventListener("click", () => this.bookSelectedSlots());
        this.closeButton.addEventListener('click', () => {
            this.productInfoContainer.classList.add('hidden');
            this.productInfoContainer.classList.remove('show');
        });

        // Слушаем клики по слотам
        this.calendarElement.addEventListener("click", (e) => {
            const slot = e.target.closest(".time-slot");
            if (!slot || slot.classList.contains("unavailable")) return;
            this.toggleSlot(slot);
        });

        this.renderCalendar();
        this.updateSelectedInfo();
    }

    // Асинхронная загрузка слотов из базы
    async loadUnavailableSlots() {
        try {
            const slotsFromDatabase = await getUnavailableSlots(this.productId);
            const weekDates = this.getWeekDates(this.currentDate);
            const unavailable = new Set();
            const now = new Date();

            for (let day = 0; day < 7; day++) {
                for (let hour = 9; hour < 17; hour++) {
                    const slotDate = new Date(weekDates[day]);
                    slotDate.setHours(hour, 0, 0, 0);

                    // 1) Слот в прошлом
                    if (slotDate < now) {
                        unavailable.add(`${day}-${hour}`);
                        continue;
                    }

                    // 2) Проверяем занятость из базы
                    if (Array.isArray(slotsFromDatabase)) {
                        const isTaken = slotsFromDatabase.some(slot => {
                            const slotStart = new Date(slot.startDate);
                            return slotStart.getTime() === slotDate.getTime();
                        });
                        if (isTaken) unavailable.add(`${day}-${hour}`);
                    }
                }
            }

            this.unavailableSlots = unavailable;
            this.renderCalendar();
        } catch (error) {
            console.error("Ошибка загрузки слотов:", error);
        }
    }

    getWeekDates(date) {
        const startOfWeek = new Date(date);
        const day = startOfWeek.getDay();
        const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
        startOfWeek.setDate(diff);

        const week = [];
        for (let i = 0; i < 7; i++) {
            const next = new Date(startOfWeek);
            next.setDate(startOfWeek.getDate() + i);
            week.push(next);
        }
        return week;
    }

    formatDate(date) {
        const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
        const months = [
            'января','февраля','марта','апреля','мая','июня',
            'июля','августа','сентября','октября','ноября','декабря'
        ];

        return {
            dayName: days[date.getDay()],
            day: date.getDate(),
            month: months[date.getMonth()],
            year: date.getFullYear()
        };
    }

    formatWeekRange(dates) {
        const first = dates[0];
        const last = dates[6];
        return `Неделя ${first.getDate()} ${this.formatDate(first).month} - ${last.getDate()} ${this.formatDate(last).month} ${first.getFullYear()}`;
    }

    generateTimeSlots(dayIndex, isWeekend) {
        const startHour = isWeekend ? 10 : 9;
        const endHour = isWeekend ? 17 : 16;

        let html = "";

        for (let hour = startHour; hour < endHour; hour++) {
            const timeLabel = `${hour.toString().padStart(2,'0')}:00-${(hour+1).toString().padStart(2,'0')}:00`;
            const slotId = `${dayIndex}-${hour}`;

            const isUnavailable = this.unavailableSlots.has(slotId);
            const isSelected = this.selectedSlots.has(slotId);

            html += `
                <div class="time-slot ${isUnavailable ? 'unavailable' : ''} ${isSelected ? 'selected' : ''}"
                     data-slot="${slotId}">
                    <div class="time-label">${timeLabel}</div>
                </div>
            `;
        }

        return html;
    }

    toggleSlot(element) {
        const slotId = element.dataset.slot;

        if (this.selectedSlots.has(slotId)) {
            this.selectedSlots.delete(slotId);
            element.classList.remove("selected");
        } else {
            this.selectedSlots.add(slotId);
            element.classList.add("selected");
        }

        this.updateBookButton();
        this.updateSelectedInfo();
    }

    updateBookButton() {
        this.bookBtn.disabled = this.selectedSlots.size === 0;
    }

    updateSelectedInfo() {
        if (this.selectedSlots.size === 0) {
            this.infoElement.textContent = "Выберите слоты для бронирования";
        } else {
            this.infoElement.textContent = `Выбрано слотов: ${this.selectedSlots.size}`;
        }
    }

    slotToDateTime(slotId, weekDates) {
        const [dayIndex, hour] = slotId.split("-").map(Number);
        const baseDate = new Date(weekDates[dayIndex]);
        baseDate.setHours(hour, 0, 0, 0);
        return baseDate;  // <--- просто возвращаем Date!
    }


    async bookSelectedSlots() {
        if (this.selectedSlots.size === 0) return;

        const weekDates = this.getWeekDates(this.currentDate);

        const slotsToSend = [...this.selectedSlots].map(slotId => {
            const [d, h] = slotId.split("-").map(Number);
            const start = this.slotToDateTime(slotId, weekDates);
            console.log(start);
            const end = new Date(weekDates[d]);
            end.setHours(h + 1, 0, 0, 0);

            return {
                startDate: start.toISOString(),
                endDate: end.toISOString()  // единый формат
            };
        });

        try {
            const res = await postSlots({
                productId: this.productId,
                userLogin: "mashik",
                slots: slotsToSend
            });

            if (res.ok) {

                this.selectedSlots.forEach(s => this.unavailableSlots.add(s));

                alert(
                    `Забронировано ${this.selectedSlots.size} слотов:\n\n` +
                    [...this.selectedSlots].join("\n")
                );

                // ПОКАЗЫВАЕМ форму только если все ОК
                createForm(
                    "Введите email",
                    [{ type: "email", placeholder: "Email", name: "email" }],
                    async ({ email }) => {         // <-- Деструктурируем объект!
                        await sendInvitation({
                            productId: this.productId,
                            email: email,
                            productSlots: slotsToSend
                        });
                    }
                );
            } else {
                console.error("Ошибка API бронирования:", res);
            }

        } catch (err) {
            console.error("Ошибка бронирования слотов:", err);
            return; // избегаем вызова формы при ошибке
        }

        this.selectedSlots.clear();
        this.renderCalendar();
        this.updateBookButton();
        this.updateSelectedInfo();
    }


    renderCalendar() {
        const weekDates = this.getWeekDates(this.currentDate);
        this.weekLabelElement.textContent = this.formatWeekRange(weekDates);

        let html = "";

        weekDates.forEach((date, index) => {
            const f = this.formatDate(date);
            const isWeekend = date.getDay() === 0 || date.getDay() === 6;

            html += `
                <div class="day ${isWeekend ? 'weekend' : ''}">
                    <div class="day-header">
                        ${f.dayName}<br>
                        <span class="date">${f.day} ${f.month}</span>
                    </div>
                    ${this.generateTimeSlots(index, isWeekend)}
                </div>
            `;
        });

        this.calendarElement.innerHTML = html;
    }

    async navigateWeeks(direction) {
        this.currentDate.setDate(this.currentDate.getDate() + (direction * 7));
        await this.loadUnavailableSlots();
        this.selectedSlots.clear();
        this.updateBookButton();
        this.updateSelectedInfo();
    }
}
