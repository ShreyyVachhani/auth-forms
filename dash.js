var s = Snap("#svg");

s.attr({
    stroke: "#000080"
});

var s1 = s.line(0, 0, 0, 0).attr({
    strokeWidth: 6
}),
    s2 = s.line(60, 60, 60, 60).attr({
        strokeWidth: 6
    }),
    s3 = s.line(60, 0, 60, 0).attr({
        strokeWidth: 6
    }),
    s4 = s.line(0, 60, 0, 60).attr({
        strokeWidth: 6
    }),
    s5 = s.line(30, 30, 30, 30).attr({
        strokeWidth: 3
    }),
    s6 = s.line(30, 30, 30, 30).attr({
        strokeWidth: 3
    }),
    s7 = s.line(30, 30, 30, 30).attr({
        strokeWidth: 3
    }),
    s8 = s.line(30, 30, 30, 30).attr({
        strokeWidth: 3
    }),
    s9 = s.line(0, 20, 0, 20).attr({
        strokeWidth: 3
    }),
    s10 = s.line(60, 40, 60, 40).attr({
        strokeWidth: 3
    }),
    s11 = s.line(20, 0, 20, 0).attr({
        strokeWidth: 3
    }),
    s12 = s.line(40, 60, 40, 60).attr({
        strokeWidth: 3
    });

s1.animate({ x1: 0, y1: 0, x2: 60, y2: 0 }, 500);
s2.animate({ x1: 60, y1: 60, x2: 0, y2: 60 }, 500);

setTimeout(function () {
    s3.animate({ x1: 60, y1: 0, x2: 60, y2: 60 }, 500);
    s4.animate({ x1: 0, y1: 60, x2: 0, y2: 0 }, 500);
}, 500);

setTimeout(function () {
    s5.animate({ x1: 30, y1: 30, x2: 60, y2: 60 }, 500);
    s6.animate({ x1: 30, y1: 30, x2: 0, y2: 0 }, 500);
}, 1000);

setTimeout(function () {
    s7.animate({ x1: 30, y1: 30, x2: 60, y2: 0 }, 500);
    s8.animate({ x1: 30, y1: 30, x2: 0, y2: 60 }, 500);
}, 1500);

setTimeout(function () {
    s9.animate({ x1: 0, y1: 20, x2: 60, y2: 20 }, 500);
    s10.animate({ x1: 60, y1: 40, x2: 0, y2: 40 }, 500);
}, 2000);

setTimeout(function () {
    s11.animate({ x1: 20, y1: 0, x2: 20, y2: 60 }, 500);
    s12.animate({ x1: 40, y1: 60, x2: 40, y2: 0 }, 500);
}, 2500);

setTimeout(function () {
    $(".intro h2").addClass('show-intro-header');
}, 3200);

setTimeout(function () {
    s1.animate({ x1: 0, y1: 0, x2: 400, y2: 0 }, 500);
    s2.animate({ x1: 400, y1: 60, x2: 0, y2: 60 }, 500);
    s3.animate({ x1: 400, y1: 0, x2: 400, y2: 60 }, 400);
    s4.animate({ x1: 0, y1: 400, x2: 0, y2: 0 }, 400);
    s5.animate({ opacity: 0 }, 100);
    s6.animate({ opacity: 0 }, 100);
    s7.animate({ opacity: 0 }, 100);
    s8.animate({ opacity: 0 }, 100);
    s9.animate({ opacity: 0 }, 100);
    s10.animate({ opacity: 0 }, 100);
    s11.animate({ opacity: 0 }, 100);
    s12.animate({ opacity: 0 }, 100);
    $("svg").animate({
        width: "400px"
    }, 500);
}, 4500);

setTimeout(function () {
    $(".intro form").fadeIn("slow", function () {
        $(".intro").find("input[type=text]").focus();
    });
    $(".intro h2").animate({
        opacity: 0
    }, {
        duration: 400,
        complete: function () {
            $(this).text("Click Enter!");
            $(this).animate({
                opacity: 1
            }, 400);
        }
    });
}, 5100);