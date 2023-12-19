const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const country = document.getElementById('country');
const city = document.getElementById('city');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const countryValue = country.value.trim();
    const cityValue = city.value.trim();
    const phoneValue = phone.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
    } else {

        const isWeakPassword = !/[^a-zA-Z]/.test(passwordValue);
        const isMidPassword = !isWeakPassword && !/[A-Z]/.test(passwordValue);
        const isStrongPassword = /[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue) && /\d/.test(passwordValue);

        if (isWeakPassword) {
            setError(password, 'Password is weak (only letters). Choose a stronger password.');
        } else if (isMidPassword) {
            setSuccess(password);
        } else if (isStrongPassword) {
            setSuccess(password);
        } else {
            setError(password, 'Invalid password format.');
        }
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }

    if(cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else {
        setSuccess(phone);
    }
};
const translations = {
      
    en: {
        shop: 'Shop',
        login: 'Log In',
        lost: 'Lost Password? Click Here!',
        account: "Don't have an account? Create One!",
        create: 'Create an account',
        back: 'Go Back',
        logins: 'Log In',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        number: 'Phon Number',
        city: 'City',
        country: 'Country',
        pass: 'Confirm Password',
        signup: 'Sign Up',
        already: 'Already have an account?',
        click: 'Click here!',
        required: 'is required'
    },
    ge: {
        shop: 'მაღაზია',
        login: 'შესვლა',
        lost: 'დაგავიწყდა პაროლი? დააკლიკე აქ',
        account: "არ გაქვს აქაუნთი? დააკლიკე აქ! აქაუნთის შექმნა",
        create: 'აქაუნთის შექმნა',
        back: 'უკან დაბრუნება',
        logins: 'შესვლა',
        username: 'მომხმარებლის სახელი',
        email: 'ელ. ფოსტა',
        password: 'პაროლი',
        number: 'მობილურის ნომერი',
        city: 'ქალაქი',
        country: 'ქვეყანა',
        pass: 'დაადასტურე პაროლი',
        signup: 'რეგისტრაცია',
        already: 'გაქვს უკვე აქაუნთი?',
        click: 'დააკლიკე აქ!'
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
