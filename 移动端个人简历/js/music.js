~function () {
    var music = document.getElementById("music"), audioFir = document.getElementById("audioFir");

    //->给页面的加载缓冲500MS时间
    window.setTimeout(function () {
        audioFir.play();

        //->当音频文件可以播放(出声了)的时候:canplay/canplaythrough
        audioFir.addEventListener("canplay", function () {
            music.style.display = "block";
            music.className = "music musicMove";
        }, false);
    }, 500);

    //->移动端使用CLICK存在300MS的延迟
    music.addEventListener("click", function () {
        //->当前是暂停的
        if (audioFir.paused) {
            audioFir.play();
            music.className = "music musicMove";
            return;
        }
        //->当前是播放的
        audioFir.pause();
        music.className = "music";
    }, false);
}();