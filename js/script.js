const messageTextarea = document.getElementById('message');
const maxLength = 184;

messageTextarea.addEventListener('input', function() {
    // Limiter la saisie à maxLength caractères
    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength);
    }
    
    const remaining = maxLength - this.value.length;
    document.querySelector('.caracteres-restants').textContent = `${remaining} caractères restants`;
});

// Gestion du formulaire
const form = document.getElementById('myForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Afficher la popup de succès
            alert('Message envoyé avec succès !');
            // Réinitialiser le formulaire
            form.reset();
            document.querySelector('.caracteres-restants').textContent = '184 caractères restants';
        } else {
            throw new Error('Erreur lors de l\'envoi');
        }
    } catch (error) {
        alert('Erreur : ' + error.message);
    }
}); 