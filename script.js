// Fichier: script.js (logique simple)
document.addEventListener('DOMContentLoaded', () => {
    const ageGate = document.getElementById('ageGate');
    const mainContent = document.getElementById('mainContent');
    const enterButton = document.getElementById('enterButton');
    const exitButton = document.getElementById('exitButton');

    enterButton.addEventListener('click', () => {
        // Cacher le portail
        ageGate.style.display = 'none';
        // Afficher le contenu
        mainContent.style.display = 'block';
        // (Optionnel) Sauvegarder dans le localStorage pour ne pas redemander
        localStorage.setItem('ageVerified', 'true');
    });

    exitButton.addEventListener('click', () => {
        // Rediriger l'utilisateur (par ex. vers Google)
        window.location.href = 'https://www.google.com';
    });
});
