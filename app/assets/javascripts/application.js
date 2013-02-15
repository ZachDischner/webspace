// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//$(document).ready(function(){
//    $('aside').mouseenter(function(){
//        $('title').fadeOut('slow',0.5);
//    });

//    $('div.me-div').mouseenter(function(){
//       $('div.me-div').fadeIn('fast',1);
//    });
//    $('div.me-div').mouseleave(function(){
//        $('div.me-div').fadeOut('fast',.5);
//    });

//    $('#pageimage').mouseenter(function(){
////        $('#pageimage').fadeTo('fast',0.1);
//        $('#flickr-list').shuffle();
//    });
//
//
//})

//(function($){
//
//    $.fn.shuffle = function() {
//
//        var allElems = this.get(),
//            getRandom = function(max) {
//                return Math.floor(Math.random() * max);
//            },
//            shuffled = $.map(allElems, function(){
//                var random = getRandom(allElems.length),
//                    randEl = $(allElems[random]).clone(true)[0];
//                allElems.splice(random, 1);
//                return randEl;
//            });
//
//        this.each(function(i){
//            $(this).replaceWith($(shuffled[i]));
//        });
//
//        return $(shuffled);
//
//    };
//
//})(jQuery);
