// Fichier: script.js

// Attend que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {

    const ageGate = document.getElementById('ageGate');
    const mainContent = document.getElementById('mainContent');
    const enterButton = document.getElementById('enterButton');
    const exitButton = document.getElementById('exitButton');
    const pageViews = document.querySelectorAll('.page-view');
    const navLinks = document.querySelectorAll('.main-nav span');

    // 1. GESTION DE LA VÉRIFICATION D'ÂGE
    
    // Vérifie si l'utilisateur a déjà validé son âge
    if (localStorage.getItem('ageVerified') === 'true') {
        ageGate.style.display = 'none';
        mainContent.style.display = 'block';
        // Initialiser la navigation sur le flux par défaut
        navigate('feed'); 
    }

    // Bouton "J'ai 18 ans et plus"
    enterButton.addEventListener('click', () => {
        ageGate.style.display = 'none';
        mainContent.style.display = 'block';
        localStorage.setItem('ageVerified', 'true');
        navigate('feed'); 
    });

    // Bouton "Je suis mineur - Quitter"
    exitButton.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });
    
    // 2. GESTION DE LA NAVIGATION (Changement de Page Style App)
    
    // Fonction globale pour changer la vue (appelée par les boutons de navigation)
    window.navigate = (pageId) => {
        // Cache toutes les pages
        pageViews.forEach(page => page.classList.remove('active'));
        
        // Affiche la page demandée
        const targetPage = document.getElementById(`page-${pageId}`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Met à jour la classe 'active' pour le lien de navigation
        navLinks.forEach(link => link.classList.remove('active'));
        const targetLink = document.getElementById(`nav-${pageId}`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
        
        // LOGIQUE ADDITIONNELLE :
        // Si l'utilisateur clique sur la barre de recherche dans le header, naviguer vers la page search.
        if (pageId === 'search') {
             // Ceci est géré par l'attribut onfocus dans le HTML, mais le JS s'assure de l'état.
        }
        
        // Si la page est 'messages' ou 'profile' et que l'utilisateur n'est pas logué, 
        // vous devriez ici afficher une boîte de dialogue "Connexion requise".
    };
});
