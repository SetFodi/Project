document.addEventListener('DOMContentLoaded', function () {
    var emailField = document.getElementById('emailField');
    var passwordField = document.getElementById('passwordField');
    var loginBtn = document.getElementById('login');
    var titleElement = document.getElementById('title');
    var lostPasswordParagraph = document.querySelector('.container #lostPasswordLink').parentElement;

    function showLostPassword() {
        lostPasswordParagraph.style.display = 'block';
    }

    function hideLostPassword() {
        lostPasswordParagraph.style.display = 'none';
    }

    function updateUIForLogin() {
        titleElement.textContent = 'Log In';
        showLostPassword();
    }

    function validateLogin() {
        if (!emailField.value.includes('@')) {
            alert('Invalid email format. Please enter a valid email.');
            return false;
        }

        if (passwordField.value === '') {
            alert('Password is required.');
            return false;
        }

        alert('Login Successful!');
        return true;
    }

    loginBtn.onclick = function (event) {
        event.preventDefault();
        if (validateLogin()) {

            alert('Login Successful!');
        }
    };

    updateUIForLogin();
});

const translations = {
    "email_placeholder": {
        "en": "Enter Your Email...",
        "ge": "შეიყვანეთ თქვენი ელ-ფოსტა..."
      },
      
    en: {
        shop: 'Shop',
        login: 'Log In',
        lost: 'Lost Password? Click Here!',
        account: "Don't have an account? Create One!",
        create: 'Create an account',
        back: 'Go Back',
        logins: 'Log In',
    },
    ge: {
        shop: 'მაღაზია',
        login: 'შესვლა',
        lost: 'დაგავიწყდა პაროლი? დააკლიკე აქ',
        account: "არ გაქვს აქაუნთი? დააკლიკე აქ! აქაუნთის შექმნა",
        create: 'აქაუნთის შექმნა',
        back: 'უკან დაბრუნება',
        logins: 'შესვლა'
    }
    
      
 };


 
 
 function switchLanguage(language, event) {
    event.preventDefault(); 
 
  
    const translatableElements = document.querySelectorAll('.translatable');
 
   
    translatableElements.forEach(element => {
        const key = element.dataset.translationKey;
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
 }
 