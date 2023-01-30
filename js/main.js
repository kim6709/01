$(document).ready(function(){


    $('.fullpg').fullpage({
        anchors:['#01', '#02', '#03', '#04', '#05', '#06', '#07'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['HOME', 'INTERVIEW', 'SHOP', 'ARTIST', 'ARTICLE', 'ABOUT US', 'INFO'],
        keyboardScrolling:true,
        responsiveWidth:769,
       

    });


    $('header h1').on('click', function(){
        $.fn.fullpage.moveTo(1);
    }); //로고클릭시 첫페이지에 가도록

    $('header .open i.xi-bars').on('click', function(){
        $('header .menu').addClass('on');
    });
    $('header .menu .xi-close').on('click', function(){
        $('header .menu').removeClass('on');
    });
    $('.video .more h2').on('click', function(){
        $('.video .more').toggleClass('on');
    });
    

    //메인 비디오

    $('.movie').YTPlayer({
        videoURL:'https://youtu.be/klH4eYEt1Y0',
        containment:'body',
        autoPlay:true, 
        mute:true, 
        loop:true,
        useOnMobile:false,
        startAt:0, 
        opacity:1,
        showControls:false,
        quality:'highres',
    });

    $('.video .more h2').on('click', function(){
        $('.video .more').toggleClass('on');
    });

    //네비게이션
    $(document).ready(function(){
        $('.close').hover(function(){
            $(this).css({'transform':'rotate(45deg)'})
        })
        $('.plus').click(function(){
            $('.menu').animate({width:"toggle"},'400');
            $('.menu').addClass('on');
        })
        $('header .menu .close').on('click', function(){
            $('.menu').animate({width:"toggle"},'400');
            $('header .menu').removeClass('on');
        });
        $('.video .more h2').on('click', function(){
            $('.video .more').toggleClass('on');
        });
    })

    $('.video_btn i.xi-play').on('click',function(){
        $('.movie').YTPPlay();
    });
    $('.video_btn i.xi-pause').on('click',function(){
        $('.movie').YTPPause();
    });
    $('.video_btn i.xi-volume-up').on('click',function(){
        $('.movie').YTPUnmute();
    });
    $('.video_btn i.xi-volume-off').on('click',function(){
        $('.movie').YTPMute();
    });

    $('.best_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:6000,
        pauseOnHover:false,
        pauseOnFocus:false,
        speed:3000,
        fade:true,
        dots:true,

        responsive: [ 
            { breakpoint: 768,
                settings: { dots:false, }
            },
        ]

    });

    $('.nav strong').on('click', function(){
        $('.nav').toggleClass('on');
    });

    //2page videos

    $('.best_video01').YTPlayer({
        videoURL:'https://youtube.com/watch?v=RPwCSxx0Plk&feature=shares',
        containment:'.mv01',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,

    });

    $('.best_video02').YTPlayer({
        videoURL:'https://youtube.com/watch?v=EQacOhB6AjE&feature=shares',
        containment:'.mv02',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.best_video03').YTPlayer({
        videoURL:'https://youtube.com/watch?v=sZxsraBdLr4&feature=shares',
        containment:'.mv03',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
    });

    $('.item_small img').on({
        mouseenter:function(){
        $(this).stop().fadeTo('fast',0.8);
        },      
        mouseout:function(){
        $(this).stop().fadeTo('fast',1);
        }
    });

    $('.item01').on({
        mouseenter:function(){
        $('.item01').attr('src','./img/po_items_01_파란노을(sub).jpg');
        },      
        mouseout:function(){
        $('.item01').attr('src','./img/po_items_01_파란노을.jpg');
        }
    });
    $('.item02').on({
        mouseenter:function(){
        $('.item02').attr('src','./img/po_items_02_trpp(sub).jpg');
        },      
        mouseout:function(){
        $('.item02').attr('src','./img/po_items_02_trpp.jpg');
        }    }); 

    $('.item03').on({
        mouseenter:function(){
        $('.item03').attr('src','./img/po_items_03_안다영(sub).jpg');
        },      
        mouseout:function(){
        $('.item03').attr('src','./img/po_items_03_안다영.jpg');
        }
    }); 

    $('.item04').on({
        mouseenter:function(){
        $('.item04').attr('src','./img/po_items_04_전진희(sub).jpg');
        },      
        mouseout:function(){
        $('.item04').attr('src','./img/po_items_04_전진희.jpg');
        }
    }); 

    $('.umb').on({
            mouseenter:function(){
            $('.umb').attr('src','./img/po_items_05_umb(sub).jpg');
            },      
            mouseout:function(){
            $('.umb').attr('src','./img/po_items_05_umb.jpg');
            }
        });

    $('.cd').on({
        mouseenter:function(){
        $('.cd').attr('src','./img/po_items_06_cd(sub).jpg');
        },      
        mouseout:function(){
        $('.cd').attr('src','./img/po_items_06_cd.jpg');
        }
    });    

    $('.tabmenu>li').on('click', function(){

        var idx= $(this).index();
        //console.log(idx);
        $(this).addClass('on').siblings().removeClass('on');
        $('.tabcontent_list').eq(idx).addClass('on').siblings().removeClass('on');
        
    });


    $('.tab_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow:4,

        responsive: [ 
            { breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
        ]
    });



    //section04 - product type

    $('.type_prd .xi-angle-left').on('click',function(){
        $('.tab_slider').slick('slickPrev');
    });
    $('.type_prd .xi-angle-right').on('click',function(){
        $('.tab_slider').slick('slickNext');
    });


    $('.type_prd .search i.xi-filter').on('click', function(){
        $('.type_prd .filter').addClass('on');
    });

    $('.type_prd .filter .filter_list .sub>li').on('click',function(){
        var idx= $(this).index();
        console.log(idx);
        $(this).toggleClass('on').siblings().removeClass('on');
       $(this).parent().siblings().removeClass('on');
    });

    $('.type_prd .filter .btn').on('click', function(){
        $('.type_prd .filter').removeClass('on');
    })


    $('.collection .content .col').on('click', function(){
        $(this).next('.col_des').addClass('on').siblings().removeClass('on');
    });

    
   //-----------------------------------------

   $(window).on('resize', function(){
    if($(window).width()>768)
        $('.menu').removeAttr("style");
    
   });



   $('header .menu01>li>a').on('click', function(){
        if ($(window).width() < 769 ) {
        $(this).next().slideToggle();
        $(this).parents().siblings().find('.menu02').slideUp();
        }
    });

    



    $(window).resize(function() {
        if($(window).width() < 768) {

        

    } });

})