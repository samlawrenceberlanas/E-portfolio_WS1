// MY WELCOME WINDOW ALERT
window.alert('Welcome to my portfolio!');

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
// TOGGLE BETWEEN LIGHT AND DARK MODE
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');

            const isLight = document.body.classList.contains('light-theme');
            themeToggle.textContent = isLight ? '☀️ Light Mode' : '🌙 Dark Mode';
        });
    }
});
