$(document).ready(function () {


    // TASK 2 - MAKE PYRAMID BASED ON INPUT (PYRAMID WIDTH = PREV_COUNTER + CURRENT_COUNTER; PYRAMID HEIGHT = CURRENT_COUNTER)
    var goPyramid = (function () {
        return {
            getInputNum : function () {
                $('#task2 button').on('click', function () {
                    var num = $(this).siblings('input').val();

                    if(num > 0) {
                        goPyramid.makePyramid(num);
                    }
                });
            },

            makePyramid : function (height) {
                var pyramidStructure = '';

                for(var i=1; i <= height; i++) {
                    for(var j=1; j <= (2*i - 1); j++) {
                        pyramidStructure += i;
                    }
                    pyramidStructure += '<br>';
                }

                $('#task2 .container-div div').html(pyramidStructure);
            }
        };
    })();

    goPyramid.getInputNum();

    // TASK 2 - Click anywhre on box to create its child which is it's 80% in length and breadth.
    var goClicky = (function () {
        var goInfinite = true;
        var interval;

        return {
            getClick: function () {
                $('#task3B').on('click', '.recursive-box', function (e) {
                    e.stopImmediatePropagation();
                    
                    if(goClicky.validateBoxCreation($(this))) {
                        $(this).html(`<div class="recursive-box"></div>`);
                    }
                    // else {
                    //     $('button').click();
                    // }
                });
            },

            validateBoxCreation : function (box) {
                var h = box.height();
                var w = box.width();

                console.log(h + ' * ' + w);
                console.log(h * w);

                // Mathematical Solution: BOX creation is not possible if area is less than or equal to 0
                if(h*w <= 0) {
                    alert('Sorry Can\'t Fit another box');
                    goInfinite = false;
                    return false;
                }

                // Feasible Solution: Box creation is not feasible if either height is 1px or width is 1px
                if (h < 1 || w < 1) {
                    alert('Sorry Can\'t Fit another box');
                    goInfinite = false;
                    return false;
                }

                // Another concept tha occured to me at 4.43pm on Feb 11th 2017, How can I divide a box if they are repeating the previous values of height, width and area.
                // Awesome Solution: if previous height === present height, previous width === present width, previous area === present area
                // show alert ands return false

                return true;
            },

            // For auto triggering the click on the BOX taking the left corner as point of click 
            // if boxes are stacked to the top left corner.
            
            // triggerClick : function () {
            //     $('button').on('click', function () {
            //         if(goInfinite){
            //             interval = setInterval(function () {
            //                 document.elementFromPoint(0, 0).click();
            //             }, 500);
            //         }
            //         else {
            //             clearInterval(interval);
            //         }
            //     });
            // }
        }
    })();

    goClicky.getClick();
    // goClicky.triggerClick();
});