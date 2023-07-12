$(function () {

    $('.Main__content').fullpage({
        anchors: ['main', 'sub01', 'sub02'],
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        scrollOverflow: true,
        //easing: 'easeInOutCubic',
        //easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        //responsiveHeight: 1200,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'up') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

        }
    });

})