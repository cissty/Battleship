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
  changeLanguage('en');
});

