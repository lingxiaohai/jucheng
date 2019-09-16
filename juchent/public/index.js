(function (win, doc) {
    if (!win.addEventListener) return;
    var html = document.documentElement;

    function setFont() {
        var cliWidth = html.clientWidth;
        if(cliWidth >540){
            cliWidth  = 540;
        }
        html.style.fontSize = cliWidth / 10 +0.02+ 'px';
    }

    win.addEventListener('resize', setFont, false)
    doc.addEventListener('DOMContentLoaded', setFont, false);


})(window, document);

