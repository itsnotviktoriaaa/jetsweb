import { langArr } from './lang-script.js';
import { langArrForCertificates } from './lang-certificate.js';


document.addEventListener('DOMContentLoaded', function load() {

    let lang = location.href.split('#')[1];
    let firstOpeningThisPage = true;

    const languageRus = document.getElementById('language-rus');
    const languageEng = document.getElementById('language-eng');

    if (lang === 'ru') {
        languageEng.setAttribute('disabled', 'disabled');
        languageEng.style.cursor = 'not-allowed';
    } else if (lang === 'en') {
        languageRus.setAttribute('disabled', 'disabled');
        languageRus.style.cursor = 'not-allowed';
    }

    const isCertificatePage = location.href.includes('certificate');
    let time = 3500;
    if (isCertificatePage) {
        time = 0;
    }

    setTimeout(function() {
        if (lang === 'ru') {
            languageEng.removeAttribute('disabled');
            languageEng.style.cursor = 'pointer';
            languageEng.addEventListener('click', checkAndAddClassActive);
        } else if (lang === 'en') {
            languageRus.removeAttribute('disabled');
            languageRus.style.cursor = 'pointer';
            languageRus.addEventListener('click', checkAndAddClassActive);
        }

    }, time);


    const arrOfLanguages = [languageRus, languageEng];

    arrOfLanguages.forEach((item) => {
        item.addEventListener('click', checkAndAddClassActive);
    });

    function checkAndAddClassActive(event) {
        const div = event.target.closest('div');
        if (div.classList.contains('active')) {
            return false;
        } else {
            deleteClassActive();
            div.classList.add('active');
            changeHref(div);
        }
    }

    function deleteClassActive() {
        arrOfLanguages.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
    }

    if (lang !== 'ru' && lang !== 'en') {
        languageRus.click();
        location.href = window.location.href.split('#')[0] + "#ru";
    }

    checkWhatHrefExist();
    if (lang === 'ru') {
        languageEng.removeEventListener('click', checkAndAddClassActive);
    } else if (lang === 'en') {
        languageRus.removeEventListener('click', checkAndAddClassActive);
    }


    function checkWhatHrefExist() {
        if (lang === 'ru') {
            languageRus.click();
        } else if (lang === 'en') {
            languageEng.click();
        }
    }

    function changeHref(div) {
        const chosenLanguage = div.getAttribute('id');
        if (chosenLanguage === 'language-rus') {
            lang = "ru";
            location.href = window.location.href.split('#')[0] + "#" + lang;

        } else if (chosenLanguage === 'language-eng') {
            lang = "en";
            location.href = window.location.href.split('#')[0] + "#" + lang;
        }

        changeLanguage(lang);
    }

    // подстановка

    function changeLanguage(lang) {
        let arr = langArr;
        const isMainPage = location.href.includes('index');
        if (!isMainPage) {
            arr = langArrForCertificates;
        }
        for (let key in arr) {
            let elem = document.querySelectorAll('.lng-' + key);

             if (elem && elem.length > 0 && arr[key] && arr[key][lang]) {
                 elem.forEach(item => {
                     item.innerHTML = arr[key][lang];
                 });

                 if (key === 'position') {
                     elem = document.querySelector('.lng-' + key);

                     if (lang === "ru") {
                         if (!firstOpeningThisPage) {
                             elem.innerHTML = '<span>Веб-разработчик</span>';
                             document.querySelector("h1").removeAttribute('style');
                             document.getElementById('hide').style.display = 'none';
                         }
                     } else if (lang === 'en') {
                         if (!firstOpeningThisPage) {
                             elem.innerHTML = '<span>Web-developer</span>';
                             document.querySelector("h1").removeAttribute('style');
                             document.getElementById('hide').style.display = 'none';
                         }
                     }

                 }
             }
        }

        if (firstOpeningThisPage) {
            firstOpeningThisPage = false;
        }


    }

    const isMainPage = location.href.includes('index');

    if (isMainPage) {
        let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
            typeSpeed: 100, // Скорость печати
            startDelay: 0, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            loop: false // Указываем, повторять ли анимацию
        });
    }



    // new WOW().init();

});
