const translations = {
  en: {
    name: "vh1s",
    description: "problematic",
    license: "License",
    github: "github"
  },
  tr: {
    name: "vh1s",
    description: "problem",
    license: "Lisans",
    github: "github"
  }
};

let currentLang = 'en';

function updateContent() {
  document.getElementById('name').textContent = translations[currentLang].name;
  document.getElementById('description').textContent = translations[currentLang].description;
  document.getElementById('license-link').textContent = translations[currentLang].license;
  document.querySelector('.links a').textContent = translations[currentLang].github;
}

document.getElementById('language-switcher').addEventListener('click', () => {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  updateContent();
});


updateContent();
