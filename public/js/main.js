$(function () {
    'use strict';
    //Adjust slider height
    var winH    = $(window).height(),
        navH    = $('.navbar').innerHeight()
    $('.landing').height(winH - (navH));

});