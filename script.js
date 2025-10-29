// Attend que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionne les éléments nécessaires
    const ageGate = document.getElementById('ageGate');
    const mainContent = document.getElementById('mainContent');
    const enterButton = document.getElementById('enterButton');
    const exitButton = document.getElementById('exitButton');

    // Vérifie si l'utilisateur a déjà validé son âge
    if (localStorage.getItem('ageVerified') === 'true') {
        ageGate.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Gère le clic sur "J'ai 18 ans et plus"
    enterButton.addEventListener('click', () => {
        // Cache le portail d'âge
        ageGate.style.display = 'none';
        
        // Affiche le contenu principal
        mainContent.style.display = 'block';
        
        // Sauvegarde le choix pour les prochaines visites
        localStorage.setItem('ageVerified', 'true');
    });

    // Gère le clic sur "Je suis mineur"
    exitButton.addEventListener('click', () => {
        // Redirige l'utilisateur vers un site neutre
        // (par exemple, Google)
        window.location.href = 'https://www.google.com';
    });

});
