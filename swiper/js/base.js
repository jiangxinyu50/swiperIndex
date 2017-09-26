/*
 *主页JS函数
 *    ————by Mr.Jiang
 *      2017.05.19
 */   
 
// **************************
//   Initialize Swiper
//         ————Jiang Xinyu
//          2017.05.19
// **************************

// 注意事项：
// 其实要解决swiper嵌套的问题很简单,就是 swiper-container 的定义要不一样就好了
// 如果JS定义有 pagination ,这个也要不一样

// --------------content样式------------ //
    var mySwiper = new Swiper('.swiper-container_content', {
        pagination: '.swiper-pagination-main',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        loop : false,    //这个开的话，会出现导航切换出错
        uniqueNavElements :false
    });

    // content内嵌套一个swiper展示
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 50,
        autoplay : 6000,    
        loop : true  //内嵌套不开的话，容易滑出导航栏
    });

    // content内嵌套一个idea展示
    var swiperIdea = new Swiper('.swiper-container-idea', {
        scrollbar: '.swiper-scrollbar',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        scrollbarHide: true,
        slidesPerView: 5,
        spaceBetween: 50,
        loop : false,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // content 内嵌套一个商品图片展示
    var swiperGoods = new Swiper('.swiper-container-goods', {
        pagination: '.swiper-pagination-g',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });



// --------------menu样式------------- //
    var toggleMenu = function(){
        if (swiper.previousIndex == 0)
            swiper.slidePrev()
        }
        , menuButton = document.getElementsByClassName('menu-button')[0]
        , swiper = new Swiper('.swiper-container_menu', {
            slidesPerView: 'auto'
            , initialSlide: 1
            , resistanceRatio: .00000000000001
            , onSlideChangeStart: function(slider) {
                if (slider.activeIndex == 0) {
                    menuButton.classList.add('cross')
                    menuButton.removeEventListener('click', toggleMenu, false)
                } else
                    menuButton.classList.remove('cross')
            }
            , onSlideChangeEnd: function(slider) {
                if (slider.activeIndex == 0)
                    menuButton.removeEventListener('click', toggleMenu, false)
                else
                    menuButton.addEventListener('click', toggleMenu, false)
            }
            , slideToClickedSlide: true
        });


// ***************************
//   Definition JavaScript
//           ————Jiang Xinyu
//           2017.05.19
// ***************************

    $('li').click(function(){   
        $(this).addClass('on').siblings().removeClass('on');
        mySwiper.slideTo($(this).index(), 1000)
    });