$(document).ready(function () {
    "use strict";

    $(".header_block_burger").click(function() {
        $(this).toggleClass("active");
        $(".dropdown_menu").toggleClass("active");
        $("body").toggleClass("hide");
    });

    $(".main_block_btns_call").click(function() {
        $("#fullpage").fullpage.moveTo($(this).index() + 7);
    });

    $(".main_block_btns_detail").click(function() {
        $("#fullpage").fullpage.moveTo($(this).index() + 5);
    });

    $(".header_block_menu_servies").click(function() {
        $("#fullpage").fullpage.moveTo($(this).index() + 2);
    });

    $(".header_block_menu_geography").click(function() {
        $("#fullpage").fullpage.moveTo($(this).index() + 2);
    });

    $(".header_block_menu_about").click(function() {
        $("#fullpage").fullpage.moveTo($(this).index() + 4);
    });

    $(".header_block_menu_team").click(function() {
        $("#fullpage").fullpage.moveTo($(this).index() + 4);
    });

    $(".dropdown_menu_services").click(function() {
        $(".header_block_burger").removeClass("active");
        $(".dropdown_menu").removeClass("active");
        $("#fullpage").fullpage.moveTo($(this).index() + 2);
    });

    $(".dropdown_menu_geography").click(function() {
        $(".header_block_burger").removeClass("active");
        $(".dropdown_menu").removeClass("active");
        $("#fullpage").fullpage.moveTo($(this).index() + 2);
    });

    $(".dropdown_menu_about").click(function() {
        $(".header_block_burger").removeClass("active");
        $(".dropdown_menu").removeClass("active");
        $("#fullpage").fullpage.moveTo($(this).index() + 4);
    });

    $(".dropdown_menu_team").click(function() {
        $(".header_block_burger").removeClass("active");
        $(".dropdown_menu").removeClass("active");
        $("#fullpage").fullpage.moveTo($(this).index() + 4);
    });

    $(".sertificate_modal_close").click(function() {
        $(".sertificate_modal").removeClass("active");
        $(".modal_back").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    })

    if($(window).width() > 1199) {
        $(".offering_block_wrap_scroll").mCustomScrollbar({
            callbacks:{
                onScroll:function() {
                    var scroll = this.mcs.topPct;
                    if(scroll == 0) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 0);
                    } else if(scroll == 100) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 2);
                    }
                }
            }
        });
        $(".project_block_wrap").mCustomScrollbar({
            callbacks:{
                onScroll:function() {
                    var scroll = this.mcs.topPct;
                    if(scroll == 0) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 2);
                    } else if(scroll == 100) {
                        $("#fullpage").fullpage.moveTo($(this).index() + 4);
                    }
                }
            }
        });
    }

    $(".geography_block_map_dot").click(function() {
        if($(window).width() < 1200) {
            $(".geography_block_map_dot").removeClass("active");
            $(this).addClass("active");
            var attr = $(this).attr("data-target");
            $(".geography_block_info_item").removeClass('active');
            $(`#${attr}`).addClass("active");
        }
    });

    $(".geography_block_map_dot").hover(function() {
        if($(window).width() > 1200) {
            $(".geography_block_map_dot").removeClass("active");
            $(this).addClass("active");
            var attr = $(this).attr("data-target");
            $(".geography_block_info_item").removeClass('active');
            $(`#${attr}`).addClass("active");
        }
    });

    $(".modal_back").click(function() {
        $(this).removeClass("active");
        $(".sertificate_modal").removeClass("active");
        $(".modal_info").removeClass("active");
        $(".project_modal").removeClass("active");
        $(".modal_thank").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });

    $(".modal_info_close").click(function() {
        $(".modal_back").removeClass("active");
        $(".modal_info").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });

    $(".project_modal_close").click(function() {
        $(".modal_back").removeClass("active");
        $(".project_modal").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });

    $(".modal_thank_close").click(function() {
        $(".modal_back").removeClass("active");
        $(".modal_thank").removeClass("active");
        $("body").removeClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(true);
        $.fn.fullpage.setAllowScrolling(true);
    });

    $(".offering_block_wrap_list_item").click(function() {
        $(".modal_info").removeClass("active");
        $(".modal_back").addClass("active");
        var attr = $(this).attr("data-target");
        $(`#${attr}`).addClass("active");
        $("body").addClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
    });

    $(".about_block_sert_item").click(function() {
        $(".sertificate_modal").removeClass("active");
        $(".modal_back").addClass("active");
        var attr = $(this).attr("data-target");
        $(`#${attr}`).addClass("active");
        $("body").addClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
    });

    $(".project_block_wrap_list_item button").click(function() {
        $(".project_modal").removeClass("active");
        $(".modal_back").addClass("active");
        var attr = $(this).parent().attr("data-target");
        $(`#${attr}`).addClass("active");
        $("body").addClass("hide");
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false);
    });
    

    if($(window).width() > 1200) {
        $('#fullpage').fullpage({
            normalScrollElements: '.offering_block_wrap, .project_modal_wrap',
            onLeave: function(index, nextIndex, direction) {
                $(".navigation_item").removeClass("active");
                $(".navigation").removeClass("last");
                if(nextIndex.index == 0) {
                    $("#main").addClass("active");
                } else if(nextIndex.index == 1) {
                    $("#offering").addClass("active");
                } else if(nextIndex.index == 2) {
                    $("#geography").addClass("active");
                } else if(nextIndex.index == 3) {
                    $("#project").addClass("active");
                } else if(nextIndex.index == 4) {
                    $("#expert").addClass("active");
                } else if(nextIndex.index == 5) {
                    $("#about").addClass("active");
                } else if(nextIndex.index == 6) {
                    $(".navigation").addClass("last");
                    $("#team").addClass("active");
                }
            }
        });
    } else {
        $('#fullpage').fullpage();
    }

});