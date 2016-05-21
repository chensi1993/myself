~function () {
    var music = document.getElementById("music"), audioFir = document.getElementById("audioFir");

    //->��ҳ��ļ��ػ���500MSʱ��
    window.setTimeout(function () {
        audioFir.play();

        //->����Ƶ�ļ����Բ���(������)��ʱ��:canplay/canplaythrough
        audioFir.addEventListener("canplay", function () {
            music.style.display = "block";
            music.className = "music musicMove";
        }, false);
    }, 500);

    //->�ƶ���ʹ��CLICK����300MS���ӳ�
    music.addEventListener("click", function () {
        //->��ǰ����ͣ��
        if (audioFir.paused) {
            audioFir.play();
            music.className = "music musicMove";
            return;
        }
        //->��ǰ�ǲ��ŵ�
        audioFir.pause();
        music.className = "music";
    }, false);
}();