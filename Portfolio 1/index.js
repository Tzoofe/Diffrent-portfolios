$(document).ready(function() {
    function logoPressed() {
    }
    $(".navLogo").click(logoPressed);
    $(".navLogoSmall").click(logoPressed);
    $(".navLogoSmall").fadeOut(0);
    var prevScroll = 0;
    function loop() {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var scroll = $(document).scrollTop();
        
        if (scroll > 100 && scroll > prevScroll) {
            $(".navLogo").fadeOut(100);
            $(".navLogoSmall").fadeIn(100);
            $(".navbar").fadeOut(100);
        } else if (scroll <= 100 && scroll < prevScroll) {
            $(".navLogo").fadeIn(100);
            $(".navLogoSmall").fadeOut(100);
            $(".navbar").fadeIn(100);
        }
        
        /*var navbar = scroll;
        navbar = Math.max(0, 100 - navbar);
        $(".navbar").css({
            width: navbar + "%",
        });*/
        /*$(".navLogo").css({
            margin: (navbar / 10) + "px"
        })*/
        
        var blur = scroll;
        blur = Math.max(0, blur - 100);
        blur /= 50.0;
        blur = Math.min(blur, 10);
        $("#bg1").css({
            filter: "blur(" + blur + "px)"
        });
        var blur2 = scroll;
        blur2 = Math.min(500, h / 1.125 - blur2);
        blur2 /= 50.0;
        blur2 = Math.min(10, blur2);
        blur2 = Math.max(0, blur2);
        $("#bg2").css({
            filter: "blur(" + blur2 + "px)"
        });
        prevScroll = scroll;
        window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
});