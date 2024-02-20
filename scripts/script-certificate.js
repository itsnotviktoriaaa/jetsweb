document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.connect').forEach((item) => {
        item.addEventListener('click', function() {
            document.getElementById('footer').scrollIntoView({behavior: "smooth"});
        });
    });


});



