$(function () {
    if ($(window).scrollTop() >= 150) $("#up-arrow").fadeIn(800);
    $(window).scroll(function(){
        if ($(window).scrollTop() <= 150) $("#up-arrow").fadeOut(800);
        else $("#up-arrow").fadeIn(800);
    });
    $("#up-arrow").click(function(){$("html,body").animate({scrollTop:0}, 800)});

    // Открыть модальное окно
    document.getElementById("open-modal-btn").addEventListener("click", function() {
        document.getElementById("my-modal").classList.add("open")
    })

    // Закрыть модальное окно
    document.getElementById("close-my-modal-btn").addEventListener("click", function() {
        document.getElementById("my-modal").classList.remove("open")
    })

    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById("my-modal").classList.remove("open")
        }
    });

    // Закрыть модальное окно при клике вне его
    document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    document.getElementById("my-modal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });
});