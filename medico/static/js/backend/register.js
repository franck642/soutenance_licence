
console.log("bienvenue");
/*--
        INSCRIPTION
    -----------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
  // Sélection du formulaire
  var form = document.querySelector('form');

  // Ajout d'un écouteur d'événement pour le soumission du formulaire
  form.addEventListener('submit', function(event) {
      // Empêcher le comportement par défaut du formulaire qui est de recharger la page
      event.preventDefault();

      // Récupération des valeurs des champs
      var formData = {
          name: document.getElementById('name').value,
          address: document.getElementById('address').value,
          phone: document.getElementById('phone').value,
          email: document.getElementById('email').value,
          firstContactName: document.getElementById('first_contact_name').value,
          specialisation: document.getElementById('specialisation').value,
          autorisation: document.getElementById('autorisation').value,
          phoneFirstContactName: document.getElementById('phone_first_contact_name').value,
          identificationNumber: document.getElementById('identification_number').value,
          password: document.getElementById('password').value
      };

      // Affichage des valeurs dans la console
      console.log('Données du formulaire :', formData);


    // Effectuez une requête POST vers votre API
      // $.ajax({
      //     type: 'POST',
      //     url: 'http://30.30.30.205/hospital/create',
      //     data: JSON.stringify(formData),
      //     contentType: 'application/json',
      //     success: function(response) {
      //       console.log('Inscription réussie :', response);
      //       // Affiche un message de succès avec SweetAlert
      //       Swal.fire({
      //           icon: 'success',
      //           title: 'Inscription réussie',
      //           text: 'Votre inscription est maintenant terminée. Après 24 heures de vérification des dossiers, vous serez prêt(e) à explorer toutes les fonctionnalités passionnantes que notre site a à offrir.',
      //           showConfirmButton: true,
      //           confirmButtonText: 'OK',
      //           confirmButtonClass: 'btn btn-success'
      //       }).then((result) => {
      //           if (result.isConfirmed) {
      //               // Redirige l'utilisateur vers la page de connexion en cas de succès
      //               window.location.href = 'login.html';
      //           }
      //       });
      //     },
      //     error: function(error) {
      //         // Gérez les erreurs de l'API (par exemple, affichez un message d'erreur)
      //         console.error('Erreur lors de l\'inscription :', error);
      //         Swal.fire({
      //           icon: 'error',
      //           title: 'Erreur',
      //           text: 'Erreur lors de l\'inscription. Veuillez réessayer.',
      //       });
      //     }
      // });
  });
});



