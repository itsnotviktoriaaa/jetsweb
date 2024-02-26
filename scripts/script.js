document.addEventListener('DOMContentLoaded', function () {

    new WOW().init();

    const burgerOpen = document.querySelector('.burger-open');
    const menu = document.querySelector('.header');
    const menuAdaptive = document.querySelector('.menu-adaptive-wrapper');
    const main = document.querySelector('.main');
    const burgerClose = document.querySelector('.burger-close');

    document.querySelectorAll('.li-examples').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menu.style.display = 'block';
                main.style.marginTop = '80px';
                menuAdaptive.style.display = 'none';
            }

            document.getElementById('trust').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-price').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menu.style.display = 'block';
                main.style.marginTop = '80px';
                menuAdaptive.style.display = 'none';
            }

            document.getElementById('price').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-stages').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menu.style.display = 'block';
                main.style.marginTop = '80px';
                menuAdaptive.style.display = 'none';
            }

            document.getElementById('work').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-tools').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('tools').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-goal').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('goal').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-experience').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('for-experience').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-why').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('why').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.li-education').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('meet').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.connect').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('footer').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.step-by-step').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('work').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.project').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('trust').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.etc-steps').forEach((item) => {
        item.addEventListener('click', function() {

            if (menuAdaptive.style.display === 'block') {
                menuAdaptive.style.display = 'none';
                menu.style.display = 'block';
                main.style.marginTop = '80px';
            }

            document.getElementById('etc').scrollIntoView({behavior: "smooth"});
        });
    });

    document.querySelectorAll('.logo-path').forEach((item) => {
        item.addEventListener('click', function() {
            window.scrollTo(0, 0);
        });
    });

    document.getElementById('cerf').addEventListener('click', function() {
        const hash = location.hash.slice(1);
        location.href = window.location.href.split('github.io/jetsweb')[0] + 'github.io/jetsweb/certificate.html' + '#' + hash;
    });

    let cerf = sessionStorage.getItem('cerf');

    if (cerf) {
        console.log(cerf);
        setTimeout(function() {
            document.getElementById('meet').scrollIntoView({behavior: "smooth"});
            sessionStorage.removeItem('cerf');
        }, 100);
    }

    $('.center').slick({
        slidesToShow: 2,
        dots: true,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

    const nameOfIdMarketing = 'marketing';
    const nameOfIdDesign = 'design';
    const nameOfIdLayout = 'layout';

    const marketing = document.getElementById('marketing');
    const design = document.getElementById('design');
    const layout = document.getElementById('layout');

    const arrayOfStep = [marketing, design, layout];

    const marketingInfo = document.getElementById('marketing-info');
    const designInfo = document.getElementById('design-info');
    const layoutInfo = document.getElementById('layout-info');

    const arrayOfInfo = [marketingInfo, designInfo, layoutInfo];

    arrayOfStep.forEach((item)=> {
        item.addEventListener('click', clickOnStepForOpeningInfo);
    });

    function clickOnStepForOpeningInfo(event) {
        const div = event.target;
        const isExistActive = div.classList.contains('active');
        if (isExistActive) return;

        findActiveClassOnOneStepForDeletion(arrayOfStep);
        doActiveStepWhichWasClickedByUser(div);
        defineInfoWhichBelongsToButtonWasClickedByUser(div)

    }

    function findActiveClassOnOneStepForDeletion(arrayOfStep) {
        arrayOfStep.forEach((step) => {
            const isActive = step.classList.contains('active');
            if (isActive) {
                step.classList.remove('active')
            }
        });
    }

    function doActiveStepWhichWasClickedByUser(div) {
        div.classList.add('active');
    }

    function defineInfoWhichBelongsToButtonWasClickedByUser(div) {
        const id = div.getAttribute('id');

        if (id) {
            switch(id) {
                case (nameOfIdMarketing):
                    openInfoWhichBelongsToButtonWasClickedByUser(marketingInfo);
                    break;
                case (nameOfIdDesign):
                    openInfoWhichBelongsToButtonWasClickedByUser(designInfo);
                    break;
                case (nameOfIdLayout):
                    openInfoWhichBelongsToButtonWasClickedByUser(layoutInfo);
                    break;
            }
        }
    }

    function openInfoWhichBelongsToButtonWasClickedByUser(infoWhichShouldBeOpened) {

        const arrayOfInfoWithoutInfoWhichWasClickedByUser = arrayOfInfo.filter(item => item !== infoWhichShouldBeOpened);
        arrayOfInfoWithoutInfoWhichWasClickedByUser.forEach((infoItem) => {
            infoItem.classList.remove('active');
        });
        infoWhichShouldBeOpened.classList.add('active');
    }

    burgerOpen.addEventListener('click', function() {
        menu.style.display = 'none';
        main.style.marginTop = '0';
        menuAdaptive.style.display = 'block';
    });



    burgerClose.addEventListener('click', function() {
        menu.style.display = 'block';
        main.style.marginTop = '80px';
        menuAdaptive.style.display = 'none';
    });

});



