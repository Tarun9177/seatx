(function() {
    "use strict";


    /*
     * Mobile Nav and search bar
     */

    var nav = document.querySelector('#mainNav'),
        searchIcon = document.querySelector('#searchIcon'),
        navClosebtn = document.querySelector('#navClosebtn'),
        navOpenBtn = document.querySelector('#navOpenBtn');

    searchIcon.addEventListener("click", () => {
        nav.classList.toggle('openSearch');
        nav.classList.remove('openNav');
        if (nav.classList.contains("openSearch")) {
            return searchIcon.classList.replace("bi-search", "bi-x");
        }
        searchIcon.classList.replace("bi-x", "bi-search");
    });

    navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove('openSearch');
        searchIcon.classList.replace("bi-x", "bi-search");
    });
    navClosebtn.addEventListener("click", () => {
        nav.classList.remove('openNav');
    });


    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }


    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.add('topbar-scrolled')
                }
            } else {
                selectHeader.classList.remove('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.remove('topbar-scrolled')
                }
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Hero carousel indicators
     */
    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)

    heroCarouselItems.forEach((item, index) => {
        (index === 0) ?
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
            heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });


    /**
     * Hero carousel Final
     */
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        autoplay: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });


    /**
     * Top Event Slider
     **/
    new Swiper('.top-events-slider', {
        speed: 100,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        Keyboard: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        centeredSlides: false,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: "fraction",
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * Sports Category Slider
     **/
    new Swiper('.sports-category-slider', {
        speed: 100,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        Keyboard: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        centeredSlides: false,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: "fraction",
            // clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * theater Category Slider
     **/
    new Swiper('.theater-category-slider', {
        speed: 100,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        Keyboard: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        centeredSlides: false,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: "fraction",
            // clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * Concerts Category Slider
     **/
    new Swiper('.concerts-category-slider', {
        speed: 100,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        Keyboard: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        centeredSlides: false,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: "fraction",
            // clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * Festival Category Slider
     **/
    new Swiper('.festival-category-slider', {
        speed: 100,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        // Keyboard: true,
        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            2000: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        },
        centeredSlides: false,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: "fraction",
            // clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /**
     * Menu isotope and filter
     */
    window.addEventListener('load', () => {
        let menuContainer = select('.menu-container');
        if (menuContainer) {
            let menuIsotope = new Isotope(menuContainer, {
                itemSelector: '.menu-item',
                layoutMode: 'fitRows'
            });

            let menuFilters = select('#menu-flters li', true);

            on('click', '#menu-flters li', function(e) {
                e.preventDefault();
                menuFilters.forEach(function(el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                menuIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);
        }

    });

    /**
     * Initiate gallery lightbox 
     */
    const galleryLightbox = GLightbox({
        selector: '.gallery-lightbox'
    });


    // New Trending Carousel
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        animateOut: 'fadeOut',
        autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,

    }).on('changed.owl.carousel', syncPosition);

    sync2.on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })

    // const form = document.getElementsByClassName('.myforms');
    // const u_name = document.getElementById('username');
    // const u_pswrd = document.getElementById('lgn_pswrd');

    // form.addEventListener('submit', e => {
    //     alert('HI');
    //     e.preventDefault();
    //     validateInputs();

    // })
    // const setError = (element, message) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error');
    //     errorDisplay.innerText = message;
    //     inputControl.classList.add('error');
    //     inputControl.classList.remove('success');
    // }

    // const setSuccess = (element) => {
    //     const inputControl = element.parentElement;
    //     const errorDisplay = inputControl.querySelector('.error');
    //     errorDisplay.innerText = '';
    //     inputControl.classList.add('success');
    //     inputControl.classList.remove('error');
    // }

    // const validateInputs = () => {
    //     const uname_value = u_name.ariaValueMax.trim();
    //     const upwrd_value = u_pswrd.ariaValueMax.trim();

    //     if (uname_value === '') {
    //         setError(u_name, 'Username is required');
    //     } else {
    //         setSuccess(u_name);
    //     }

    //     if (upwrd_value === '') {
    //         setError(u_pswrd, 'Password is required');
    //     } else if (upwrd_value.length < 4) {
    //         setSuccess(u_pswrd, 'Password must be at least 4 character.');
    //     } else {
    //         setSuccess(u_pswrd)
    //     }
    // }


    


    // Bootstrap Tooltip Initialize
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})()