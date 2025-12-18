class BookSuggester {
    constructor() {
        this.apiUrl = 'https://openlibrary.org/subjects';
        this.books = [];
        this.currentGenre = '';
        this.storageKey = 'bookSuggesterState';
        this.originalButtonText = 'Поиск';
        this.init();
    }
    
    init() {
        // Восстановление состояния из localStorage
        this.restoreState();
        
        // События
        document.getElementById('loadBooks').addEventListener('click', () => this.handleSearch());
        document.getElementById('genreInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSearch();
        });
        
        document.getElementById('genreInput').addEventListener('input', (e) => {
            this.currentGenre = e.target.value;
            this.saveState();
        });
    }
    
    saveState() {
        const state = {
            genre: this.currentGenre,
            books: this.books,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }
    
    // Восстановление состояния
    restoreState() {
        const savedState = localStorage.getItem(this.storageKey);
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                
                this.currentGenre = state.genre || '';
                document.getElementById('genreInput').value = this.currentGenre;
                
                const oneHour = 60 * 60 * 1000;
                if (state.books && state.timestamp && 
                    (new Date().getTime() - state.timestamp) < oneHour) {
                    this.books = state.books;
                    this.displayBooks();
                }
            } catch (e) {
                console.error('Ошибка восстановления состояния:', e);
            }
        }
    }
    
    async handleSearch() {
        const genre = document.getElementById('genreInput').value.trim();
        if (!genre) return;
        
        this.currentGenre = genre;
        this.showLoading();
        await this.searchBooks(genre);
        this.saveState(); 
    }
    
    async searchBooks(genre) {
        const url = `${this.apiUrl}/${encodeURIComponent(genre.toLowerCase())}.json?limit=4`;
        
        try {
            const data = await fetch(url).then((response) => response.json());
            this.books = data.works || [];
            this.displayBooks();
        } catch (error) {
            this.showError('Ошибка загрузки. Проверьте подключение к интернету.');
        }
        this.hideLoading();
    }
        
    showLoading() {
        const button = document.getElementById('loadBooks');
        button.innerHTML = `
            <span class="button-loading">
                <span class="button-spinner"></span>
                Ищем книги...
            </span>
        `;
        button.disabled = true;
    }
    
    hideLoading() {
        const button = document.getElementById('loadBooks');
        button.textContent = this.originalButtonText;
        button.disabled = false;
    }
    
    displayBooks() {
        const container = document.querySelector('.result__container');
        container.innerHTML = '';
        
        if (this.books.length === 0) {
            container.innerHTML = '<div class="no-books">Книги по данной теме не найдены</div>';
            return;
        }
        
        this.books.forEach(book => {
            const authors = book.authors ? book.authors.map(a => a.name).join(', ') : 'Автор неизвестен';
            const published = book.first_publish_year || 'Год издания неизвестен';
            
            const bookCard = document.createElement('div');
            const coverId = book.cover_id;
            const coverUrl = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : null;
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src=${coverUrl?coverUrl:"Rectangle 4.png"} alt="${book.title}">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${authors}</p>
                    <p class="book-year">${published}</p>
                </div>
            `;
            container.appendChild(bookCard);
        });
    }
    
    showError(message) {
        const container = document.querySelector('.result__container');
        container.innerHTML = `
            <div class="error">
                <p>${message}</p>
            </div>
        `;
    }
    
    clearSavedState() {
        localStorage.removeItem(this.storageKey);
        this.currentGenre = '';
        this.books = [];
        document.getElementById('genreInput').value = '';
        this.displayBooks();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const suggester = new BookSuggester();
});