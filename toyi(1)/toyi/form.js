// Étape 1: Validation du champ "Code" avec une regex
var codeInput = document.getElementById('code');
var codeValidation = document.getElementById('code-validation');

codeInput.addEventListener('input', function() {
  var codeValue = codeInput.value;
  let masque=/^CODE-/
  if (masque.test(codeValue)) {
    codeValidation.textContent = 'Code valide';
  } else {
    codeValidation.textContent = 'Code invalide';
  }
});

// Étape 2: Activation/désactivation du bouton de soumission en fonction de la validité du code
var submitBtn = document.getElementById('submit-btn');

codeInput.addEventListener('input', function() {
  var codeValue = codeInput.value;
  let masque1=/^CODE-/
  if (masque1.test(codeValue)) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'true');
  }
});
