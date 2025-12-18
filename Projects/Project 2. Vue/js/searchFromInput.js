import { searchProductsByName, searchProductsByCategory } from "./api.js";
import { Calendar } from "./calendar.js";

export class SearchModule {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.pageContent = document.querySelector('.page-content');
        this.categoryButtons = document.querySelectorAll('.category-content');
        this.init();
    }

    init() {
        // Поиск по имени
        this.searchButton.addEventListener('click', () => this.performSearchByName());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearchByName();
        });

        // Поиск по категории
        this.categoryButtons.forEach(category => {
            category.addEventListener('click', () => {
                this.performSearchByCategory(category.querySelector('.search-system__category-section-button').textContent);
            });
        });
    }

    async performSearchByName() {
        const searchTerm = this.searchInput.value.trim();

        if (!searchTerm) {
            alert('Введите поисковый запрос');
            return;
        }

        try {
            const response = await searchProductsByName(searchTerm);

            if (!response.ok) throw new Error('Ошибка сервера');

            const products = await response.json();
            this.renderProducts(products);

        } catch (error) {
            console.error('Ошибка поиска по имени:', error);
            alert('Произошла ошибка при поиске товаров');
        }
    }

    async performSearchByCategory(categoryName) {
        if (!categoryName) {
            alert('Категория не выбрана');
            return;
        }

        try {
            const response = await searchProductsByCategory(categoryName);

            if (!response.ok) throw new Error('Ошибка сервера');

            const products = await response.json();
            this.renderProducts(products);

        } catch (error) {
            console.error('Ошибка поиска по категории:', error);
            alert('Произошла ошибка при поиске товаров');
        }
    }

    renderProducts(products) {
        this.pageContent.innerHTML = "";
        const productsContainer = document.createElement('div');
        productsContainer.classList.add('products-content');
        if (!products || products.length === 0) {
            this.pageContent.innerHTML = '<p>Товары не найдены</p>';
            return;
        }

        products.forEach(product => {
            const card = this.createProductCard(product);
            productsContainer.appendChild(card);
        });
        this.pageContent.appendChild(productsContainer);
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('id', product.id.toString());

        card.innerHTML = `
            <img src="${"../" + product.image + ".jpg" || '/placeholder.jpg'}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description || ''}</p>
            <div class="price">${product.price} ₽</div>
            <button class="buy-btn">Забронировать</button>
        `;
        card.querySelector('.buy-btn').addEventListener('click', (e) => {
            this.showProductInfo(product);
        });
        return card;
    }
    
    
    showProductInfo(product){
        const calendar = new Calendar(product.id);
        const productInfoContainer = document.querySelector('.product-info-container');
        document.querySelector('.product-info-container__title').textContent = product.name;
        document.querySelector('.product-info-container__description').textContent = product.description;
        document.querySelector('.product-info-container__price').textContent = product.price;
        //document.querySelector('.product-info-container__image').src = "../" + product.image + ".jpeg";
        
        productInfoContainer.className = 'product-info-container show';
    }
}

// Инициализация модуля
document.addEventListener('DOMContentLoaded', () => {
    new SearchModule();
});
