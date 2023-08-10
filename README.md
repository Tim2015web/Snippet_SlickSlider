# Snippet_SlickSlider

[Show the project](https://tim2015web.github.io/Snippet_SlickSlider/)

Exemple Slick Slider.

[Download library](https://kenwheeler.github.io/slick/)

---

Help.

Если есть флекс, то нужно ему добавить min-width: 0;

[Link](https://youtu.be/rXNfDfqtM3M?t=486)

Ленивая загрузка изображений в слайде

Добавить в тег img data-lazy="images/slide1.webp"

---

Параметры:

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

    События

    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log(currentSlide);
    }); // До смены слайда

    $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        console.log(currentSlide);
    }); // После смены слайда

    Методы

    $('.slider').slick('setPosition'); // Перерисовка
    $('.slider').slick('goTo', 3); // Перейти к конкретному слайду
    $('.slider').slick('slickPrev'); // Листать (slickNext)
    $('.slider').slick('slickPlay'); // Активировать autoplay (slickPause)

    // Добавить в слайдер
    $('.link_add').click(function (event) {
        $('.slider').slick('slickAdd', 'контент');
        return
    });

    // Удалить слайд
    $('.link_remove').click(function (event) {
        $('.slider').slick('slickRemove', 0);
        return
    });

---

CSS классы:

/* Слайдер */
.slick-slider{}

/* Слайдер запущен */
.slick-slider.slick-initialized{}

/* Слайдер с точками */
.slick-slider.slick-dotted{}

/* Ограничивающая оболочка */
.slick-list {}

/* Лента слайдов */
.slick-track{}

/* Слайд */
.slick-slide{}

/* Слайд активный (показывается) */
.slick-slide.slick-active{}

/* Слайд основной */
.slick-slide.slick-current{}

/* Слайд по центру */
.slick-slide.slick-center{}

/* Клонированный слайд */
.slick-slide.slick-cloned{}

/* Стрелка */
.slick-arrow{}

/* Стрелка влево */
.slick-arrow.slick-prev{}

/* Стрелка вправо */
.slick-arrow.slick-next{}

/* Стрелка не активная */
.slick-arrow.slick-disabled{}

/* Точки (булиты) */
.slick-dots{}
.slick-dots li{}

/* Активная точка */
.slick-dots li.slick-active{}

/* Элемент точки */
.slick-dots li button{}