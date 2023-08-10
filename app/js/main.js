// Slider Slick
$(document).ready(function () {
    $('.slider').slick({
        arrows: true, // Активация стрелок
        dots: true, // Активация точек
        slidesToShow: 1, // Количество слайдов на странице
        slidesToScroll: 1, // Количество перелистываний
        speed: 300, // Скорость (300)
        easing: 'linear', // Тип анимации ('linear', 'ease')
        infinite: true, // Цикличность
        initialSlide: 0, // Начальный слайд
        autoplay: false, // Автосмена
        autoplaySpeed: 500, // Скорость автосмены (3000)
        pauseOnFocus: true, // Остановка автосмены при наведении
        pauseOnHover: true, // Остановка автосмены при наведении
        pauseOnDotsHover: true, // Остановка автосмены при наведении
        draggable: true, // Активация свайпа
        swipe: true, // Активация тачскрина
        touchThreshold: 5, // Шаг усилия свайпа (5)
        touchMove: true, // Активация анимации свайпа
        waitForAnimate: true, // Защита от ложных кликов по стрелкам
        centerMode: false, // Активации предпоказа соседних слайдов
        variableWidth: false, // Убрать отступы между слайдами
        rows: 1, // Количество строк (1)
        slidesPerRow: 1, // Количество столбцов (1)
        vertical: false, // Вертикальная анимации (Need Flex kill)
        verticalSwiping: false, // Активация вертикального свайпа
        fade: false, // Анимация затухания слайдов (вместо свайпа)
        // asNavFor: ".slider" - скрещивание слайдеров (https://youtu.be/rXNfDfqtM3M?t=2551)
        responsive: [
            {
                breakpoint: 768, // Точка слома
                settings: {
                    // Параметры
                }
            }
        ], // Адаптивность слайдера
        mobileFirst: false, // приоритет мобильного адаптива
        appendArrows: $('.arrows'), // Внешний блок со стрелками
        appendDots: $('.arrows'), // Внешний блок с точками
    });
});