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
  