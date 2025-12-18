export function logout() {
    localStorage.setItem('session', 'unauthorized');
    location.reload();
}