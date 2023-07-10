        window.onload = function() {
            setTimeout(moviediv,2000);  //播放2s后开始改变样式
        }



        function moviediv(){
        // 先创建var后续再调用的话，性能会好一点不会那么卡顿

        var box = document.getElementById("left-box");
        var video = document.getElementById("backgroundVideo");

        clearInterval(intervalID);
            //每5ms执行一次直到clearinterval
            var intervalID = null, begin = 0, step = 0, target = 365;  
            intervalID = setInterval(function () {

                begin += (step+5);

                if (begin >= target){
                    begin = target;
                    box.style.zIndex = 2;
                    video.style.zIndex = 1;
                    clearInterval(intervalID);
                }
                box.style.right = begin + 'px';
                video.style.right = begin + 'px';
            }, 10);
    };