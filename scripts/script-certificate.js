document.addEventListener('DOMContentLoaded', function () {

    sessionStorage.setItem('cerf', 'yes');

    // document.querySelectorAll('.connect').forEach((item) => {
    //     item.addEventListener('click', function() {
    //         document.getElementById('footer').scrollIntoView({behavior: "smooth"});
    //     });
    // });

    document.querySelectorAll('.back-to-main').forEach((item) => {
        item.addEventListener('click', function() {
            console.log(location);
            const href = location.hash.slice(1);
            location.href = window.location.href.split('github.io/jetsweb')[0] + 'github.io/jetsweb/' + '#' + href;
        });
    });


});



