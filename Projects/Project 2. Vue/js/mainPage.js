export function loadAboutUsInfo() {
    const container = document.querySelector(".page-content");
    container.innerHTML = "";
    const texts = [
        "Сегодня ты фотограф, завтра — музыкант, а послезавтра — мастер на все руки. Арендуй профессиональную технику, инструменты и снаряжение.",
        "Организуй незабываемое мероприятие с помощью нашего проката декоров, посуды и оборудования.",
        "Специальное снаряжение для кемпинга, спорта или отдыха на природе — берите с собой только нужные вещи."
    ];
    const titles = ["Меняй хобби как перчатки", "Праздники без забот", "Путешествуй с комфортом"];
    const images = ["images/image1.png", "images/image2.png", "images/image3.png"];
    for(let i = 0; i < 3; i++){
        const element = document.createElement('div');
        const textContainer = document.createElement('div');
        element.className = "page-content__container";
        textContainer.class = `page-content__container-text`;

        const title = document.createElement('h2');
        const text = document.createElement('p');
        const image = document.createElement('img');
        
        title.textContent = titles[i];
        text.textContent = texts[i];
        image.src = images[i];
        image.id = "image" + i;

        textContainer.appendChild(title);
        textContainer.appendChild(text);
        if(i%2 == 0){
            element.appendChild(textContainer);
            element.appendChild(image);
        }
        else{
            element.appendChild(image);
            element.appendChild(textContainer);
        }

        container.appendChild(element);
    }
}