import { createForm } from './ui.js';
import { login, signup, logout} from './api.js';

export function renderAuthLink() {
    const container = document.querySelector('.authorization-link');

    let isAuthenticated = localStorage.getItem('session');
    container.innerHTML = ''; 
    
    if (isAuthenticated == "authenticated") {

        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'auth-button logout';
        logoutBtn.textContent = 'Выход';
        logoutBtn.addEventListener('click', () => {
            logout();
            localStorage.setItem('session', 'unauthenticated');
            renderAuthLink(); 
        });
        container.append(logoutBtn);
    } else {
        const signinBtn = document.createElement('button');
        signinBtn.className = 'auth-button signin';
        signinBtn.textContent = 'Войти';
        signinBtn.addEventListener('click', () => {
            createForm('Вход', [
                { type: 'text', placeholder: 'Логин', name: 'login' },
                { type: 'password', placeholder: 'Пароль', name: 'password' }
            ], async (user) => {
                await login(user);
                localStorage.setItem('session', 'authenticated');
                renderAuthLink();
            });
        });

        const signupBtn = document.createElement('button');
        signupBtn.className = 'auth-button signup';
        signupBtn.textContent = 'Завершить';
        signupBtn.addEventListener('click', () => {
            createForm('Регистрация', [
                { type: 'text', placeholder: 'Логин', name: 'login' },
                { type: 'password', placeholder: 'Пароль', name: 'password' }
            ], async (user) => {
                await signup(user);
                renderAuthLink();
            });
        });

        container.append(signinBtn, signupBtn);
    }
}
