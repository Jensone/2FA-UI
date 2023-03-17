// Récupération des éléments de formulaire
const codeInputs = document.querySelectorAll('.number')
const confirmButton = document.querySelector('.foward')

// Ajout d'un événement de saisie à chaque élément d'entrée de code
codeInputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    // Vérification si la saisie est un chiffre
    if (!/^[0-9]$/.test(event.target.value)) {
      alert("Merci de saisir un chiffre") // Afficher une alerte si la saisie n'est pas un chiffre
      event.target.value = '' // Effacer la saisie si elle n'est pas un chiffre
    }

    // Si l'entrée actuelle a une valeur, passer à l'entrée suivante
    if (event.target.value) {
      const nextInput = codeInputs[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }
  })
})

// Ajout d'un événement de clic au bouton de confirmation
confirmButton.addEventListener('click', () => {
  // Validation du code saisi
  const code = Array.from(codeInputs).map(input => input.value).join('')
  const correctCode = '123456'

  if (code === correctCode) {
    console.log('Code correct !') // Afficher un message de succès dans la console
  } else {
    console.error('Code incorrect !') // Afficher une erreur si le code est incorrect
  }
})
