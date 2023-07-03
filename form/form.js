// Obtenir l'élément de saisie pour le code
var codeInput = document.getElementById('code');

// Obtenir l'élément de résultat de validation du code
var codeValidationResult = document.getElementById('code-validation');

// Obtenir le bouton de soumission
var submitButton = document.getElementById('submit-btn');

// Ajouter un écouteur d'événements à l'entrée du code pour les modifications
codeInput.addEventListener('input', function() {
  // Obtenir la valeur actuelle de l'entrée du code
  var codeValue = codeInput.value;

  // Définir le motif de regex pour la validation
  var regexPattern = /^CODE-/;

  // Vérifier si le code commence par "CODE-"
  if (regexPattern.test(codeValue)) {
    // Afficher "Code valide" s'il correspond au motif
    codeValidationResult.textContent = 'Code valide';
    // Activer le bouton de soumission
    submitButton.disabled = false;
  } else {
    // Afficher "Code invalide" s'il ne correspond pas au motif
    codeValidationResult.textContent = 'Code invalide';
    // Désactiver le bouton de soumission
    submitButton.disabled = true;
  }
});

function validateForm() {
  // Effectuer ici d'autres validations du formulaire si nécessaire
  // Retourner true si le formulaire est valide, false sinon
  return true;
}
