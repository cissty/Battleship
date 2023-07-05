let translations;

function translate(languageKey, translationKey) {
    const language = translations[languageKey];
    return language && language[translationKey] ? language[translationKey] : translationKey;
  }

const languageKey = 'en';//default
let selectedLanguage = languageKey; 

// Function to update the content based on the selected language
async function updateContent() {
  translations = await import(`/languages/${selectedLanguage}.json`);
  const elements = document.querySelectorAll('[data-translate]');

  // Update content using translation function
  elements.forEach(element => {
    const translationKey = element.dataset.translate;
    element.textContent = translate(selectedLanguage, translations[translationKey]);
  });
}

function changeLanguage(language) {
  selectedLanguage = language;
  updateContent();
}

const turkishBtn = document.getElementById('turkishBtn');
const englishBtn = document.getElementById('englishBtn');

turkishBtn.addEventListener('click', () => {
  changeLanguage('tr');
});

englishBtn.addEventListener('click', () => {
  location.reload(); //restarting page and removing the scroll-bar
  changeLanguage('en');
});


//Validate user input in main page//

document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name-input');
  const submitButton = document.getElementById('submit-btn');
  const errorText = document.getElementById('error-text');

  // Load name from localStorage if available
  const savedName = localStorage.getItem('username');
  if (savedName) {
    nameInput.value = savedName;
  }

  submitButton.addEventListener('click', validateAndSubmit);
  nameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      validateAndSubmit();
      event.preventDefault();
    }
  });

  function validateAndSubmit() {
    const name = nameInput.value.trim();
    if (name === '') {
      showError('Please enter a name.'); // Show error if name is empty
    } else if (!validateName(name)) {
      showError('Invalid name. Only letters, numbers, and spaces are allowed.'); // Show error for invalid name
    } else {
      hideError();
      // Save name to localStorage
      localStorage.setItem('username', name);
      console.log(name)
      window.location.href = '/game.html';
    }
  }

  function validateName(name) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(name);
  }

  function showError(errorMessage) {
    errorText.textContent = errorMessage;
    errorText.style.display = 'block';
  }

  function hideError() {
    errorText.style.display = 'none';
  }
});



