




// 모션에 굴곡이 없게 일정하게 유지되는 코드
gsap.defaults({
    ease:"none"
})






// #header 언어선택
$('#header .gnb .nav-item .lang-title').on('click', function() {
    $('#header .gnb .nav-item .sub-list').toggleClass('show');
});





// sc-intro 스크롤 모션
// tl : 타임라인
introTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-intro",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 화살표 모션
        // onLeave : 떠났을때
        onLeave:function(){
            $('.sc-intro .scroll-down').addClass('hide');
        },
        // onEnterBack : 떠났다가 다시 돌아올때
        onEnterBack:function(){
            $('.sc-intro .scroll-down').removeClass('hide');
        }
      },
})
introTl.to('.sc-intro .dimmed',{opacity:1}) 
// opacity: 0, visibility: hidden 을 동시에 처리하는 autoAlpha: 0
// "<" : 동시에 실행
introTl.to($('.sc-intro .text-area .desc')[0],{autoAlpha:1},"<") 
introTl.to($('.sc-intro .text-area .desc')[0],{autoAlpha:0,
    // 첫번째 글자가 사라지는 이 타이밍에 헤더 내려오는 모션
    // onStart : 시작할때
    onStart:function(){
        $('#header').addClass('show');
    },
    // onReverseComplete : 모션이 다시 빠꾸될때
    onReverseComplete:function(){
        $('#header').removeClass('show');
    }

}) 
introTl.to($('.sc-intro .text-area .desc')[1],{autoAlpha:1},) 
introTl.to($('.sc-intro .text-area .desc')[1],{autoAlpha:0},) 
introTl.to($('.sc-intro .text-area .desc')[2],{autoAlpha:1},) 
introTl.to($('.sc-intro .text-area .desc')[2],{autoAlpha:0},) 
introTl.to($('.sc-intro .text-area .desc')[3],{autoAlpha:1},) 






// sc-showcase 스크롤 모션
showcaseTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-showcase",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
      },
})
// from : 전값 셋팅 / autoAlpha:0였었다.
showcaseTl.from('.sc-showcase .intro-inner',{autoAlpha:0})
// 배경 어두움 처리도 같이 되야하니까 "<" 동시에 실행
showcaseTl.to('.sc-showcase .dimmed',{autoAlpha:1},"<")


// xPercent : 자기 크기만큼 보내는 코드
// text 1번째 오른쪽으로 
showcaseTl.to($('.sc-showcase .intro-inner .text')[0],{xPercent:100})
// text 3번째 왼쪽으로
showcaseTl.to($('.sc-showcase .intro-inner .text')[2],{xPercent:-100},"<")
// text 움직이면서 배경 어두움처리 동시에 실행
showcaseTl.to($('.sc-showcase .dimmed'),{autoAlpha:0},"<")


// 위 동작 다 실행 후 완전히 사라짐
showcaseTl.to('.sc-showcase .intro-inner',{autoAlpha:0})

// 3번째 이미지 올라옴 
showcaseTl.to($('.sc-showcase .thumb .img')[2],{height:0})
// 2번째 이미지 올라옴 
showcaseTl.to($('.sc-showcase .thumb .img')[1],{height:0})


// 이미지 다 올라오고, 배경 어두움처리 마지막 텍스트 동시에 실행
showcaseTl.to($('.sc-showcase .dimmed'),{autoAlpha:1})
showcaseTl.from('.sc-showcase .desc',{autoAlpha:0},"<")







// #header 색상변경
// create : to,from처럼 기준을 정하는게 아닌, 이벤트만 주고싶을때 쓰는 코드
ScrollTrigger.create({
    // 시작 지점
    trigger: ".sc-worker",
    start:"0% 0%",
    // 끝나는 지점이 다른 섹션일때 설정
    endTrigger: ".sc-possibility",
    // 이 영역의 시작과 / 윈도우 기준 50%
    // end / scroller-end
    end:"0% 50%",
    // markers: true,
    // 도달했을때 dark클래스가 들어가고 빠졌을때는 dark클래스 빠짐
    toggleClass:{
        targets:"#header",
        className:"dark"
    }

})

ScrollTrigger.create({
    // 시작 지점
    trigger: ".sc-asset",
    start:"0% 0%",
    endTrigger: "#footer",
    // 이 영역의 시작과 / 윈도우 기준 50%
    // end / scroller-end
    end:"0% 50%",
    // markers: true,
    // 도달했을때 dark클래스가 들어가고 빠졌을때는 dark클래스 빠짐
    toggleClass:{
        targets:"#header",
        className:"dark"
    }
})



// ScrollTrigger.create({
//     trigger: "#service2",
//     start:"0% 0%",
//     // 이 영역의 시작과 / 윈도우 기준 50%
//     // end / scroller-end
//     end:"100% 100%",
//     // markers: true,
//     // 도달했을때
//     onEnter:function(){
//         // 이전 카드 지워버림
//         gsap.set('#service1 .card-content',{autoAlpha:0})
//         // 도달했을때 대체카드 보이게 함
//         gsap.set('#service2 .title-area .card',{autoAlpha:1})
//     },
//     // 다시 위로 올라갔을때(다시 빠꾸)
//     onLeaveBack:function(){
//         // 이전 카드 다시 나오게 함
//         gsap.set('#service1 .card-content',{autoAlpha:1})
//         // 다시 빠꾸될때 안보이게 함
//         gsap.set('#service2 .title-area .card',{autoAlpha:0})
//     }

// })






// sc-possibility 부터 배경색상변경
// create : to,from처럼 기준을 정하는게 아닌, 이벤트만 주고싶을때 쓰는 코드
ScrollTrigger.create({
    // 시작 지점
    trigger: ".sc-possibility",
    start:"0% 50%",
    // 끝나는 지점이 다른 섹션일때 설정
    endTrigger: ".sc-asset",
    // 이 영역의 시작과 / 윈도우 기준 50%
    // end / scroller-end
    end:"0% 50%",
    // markers: true,
    // 도달했을때 dark클래스가 들어가고 빠졌을때는 dark클래스 빠짐
    toggleClass:{
        targets:"body",
        className:"dark"
    }

})







// #header
// let lastScrollY = window.scrollY;
// const header = document.querySelector('#header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > lastScrollY) {
//         // 스크롤을 아래로 내릴 때
//         header.classList.add('show'); 
//     } else {
//         // 스크롤을 위로 올릴 때
//         header.classList.remove('show'); 
//     }
//     lastScrollY = window.scrollY;
// });



// #header 색상변경
// gsap.to('#header .header-inner .logo',{
//   scrollTrigger:{
//     trigger: ".sc-worker",
//     start:"0% 0%",
//     end:"100% 100%",
//     toggleActions: "none play none reset",
//     // markers: true,
//   },
//   filter: 'brightness(0) invert(0)',
// });

// gsap.to('#header .header-inner .gnb',{
//   scrollTrigger:{
//     trigger: ".sc-worker",
//     start:"0% 0%",
//     end:"100% 100%",
//     // markers: true,
//   },
//   color: '#000',
// });






// sc-prove-value
proveTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-prove-value",
        start:"0% 70%",
        end:"100% 95%",
        // markers: true,
        scrub:0,
      },
})
// xPercent : 자기 크기만큼 보내는 코드
// 완성값은 css로 만들었으니 from으로 전값을 셋팅해줌
proveTl.from('.sc-prove-value .prove-title .title-item span',{x:0})
// css에서 지정한 변수의 전값을 셋팅해줌
proveTl.from('.sc-prove-value',{'--w':0},"<")





// 순서 바꾸면 작동안됨 왜?
// sc-prove-asset
proveAssetTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-prove-asset",
        start:"0% 70%",
        end:"100% 95%",
        // markers: true,
        scrub:0,
      },
})
// 완성값은 css로 만들었으니 from으로 전값을 셋팅해줌
proveAssetTl.from('.sc-prove-asset .prove-title .title-item span',{x:0})
// css에서 지정한 변수의 전값을 셋팅해줌
proveAssetTl.from('.sc-prove-asset',{'--w':0},"<")







// sc-possibility 슬라이드
possibilityTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-possibility",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 이 속성을 추가해줘야함 / 갱신.재실행
        // 창 사이즈를 수축증가해도 밑의 x수치가 갱신되도록 해줌
        invalidateOnRefresh:true,
      },
})
// to로 완성값을 셋팅해줌
possibilityTl.to('.sc-possibility .slide-inner',{
    // transform %
    // 왼쪽으로
    xPercent:-100,
    // xPercent는 퍼센트%, x는 px
    // 패딩까지 포함한 넓이만큼 땡기고싶다면 innerwidth를 줌
    // 새로고침했을때 처음 값만 구한 것 - 갱신되지 않음
    // x:$('.sc-possibility .graphic').innerWidth()
    // 창의 사이즈에 맞게 바껴야 하므로
       x: function() {
            return $('.sc-possibility .graphic').innerWidth()
       }
})



// sc-possibility 슬라이드 ???
// gsap.registerPlugin(ScrollTrigger);

// const scrollWidth = document.querySelector(".sc-possibility .slide").scrollWidth;
// const viewportWidth = window.innerWidth;

// gsap.to(".sc-possibility .slide", {
//     x: -(scrollWidth - viewportWidth),
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".scroll-wrapper",
//         start: "top top",
//         end: () => "+=" + scrollWidth,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//     }
// });







// sc-feature 배경모션
featureTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-feature",
        start:"0% 95%",
        end:"100% 80%",
        // markers: true,
        scrub:0,

      },
})
// to로 완성값을 셋팅해줌
// x:0 음수였던 값을 완성값으로 돌리지 못해서 xPercent:0을 추가해줌
featureTl.to('.sc-feature .feature-content .item',{x:0,xPercent:0})


// sc-feature 블러모션
featureTl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-feature",
        start:"0% 45%",
        end:"100% 40%",
        // markers: true,
        scrub:0,
        // 도달했을때
        onEnter:function() {
            $('.sc-feature .feature-content').addClass('blur');
        },
        // 도달했다가 다시 올라갈때
        onLeaveBack:function(){
            $('.sc-feature .feature-content').removeClass('blur');

        }
      },
})
// 글자모션
// 전값을 셋팅해줌
featureTl2.from('.sc-feature .title',{opacity:0})







// #service1 슬라이드
service1Tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#service1",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
      },
})
// 완성값을 셋팅해줌
service1Tl.to('#service1 .slide-inner',{
    x:function(){
        // outerWidth: 보더값까지 포함해서 구함
        // 왼쪽으로 가야하니까 음수-
        return -$('#service1 .slide-head').outerWidth()
    }
})
// 하나씩 왼쪽으로 움직이는 모션
service1Tl.to('#service1 .card-item:nth-child(2)',1,{
    xPercent:-100,
    // 각 여백이 있으니까 여백픽셀만큼 이동
    x:-40,
    // 동시에 실행되야하므로 같은 라벨을 줌!
},'a')
service1Tl.to('#service1 .card-item:nth-child(3)',1,{
    xPercent:-200,
    x:-40*2,
},'a')
service1Tl.to('#service1 .card-item:nth-child(4)',1,{
    xPercent:-300,
    x:-40*3,
},'a')

// 자물쇠 바뀌는 모션
service1Tl.to('#service1 .card-area .icon1',0.5,{
    opacity:0
},'a')
service1Tl.to('#service1 .card-area .icon2',0.5,{
    opacity:1
    // 0.5초 딜레이
},'a+=0.5')


// 글자 나오는 모션
service1Tl.to('#service1 .card-area .icon1',0.5,{
    opacity:0
},'a')
service1Tl.to('#service1 .card-area .icon2',0.5,{
    opacity:1
    // 0.5초 딜레이
},'a+=0.5')





// 올라가는 카드(대체카드)는 애초에 0인 상태
gsap.set('#service2 .title-area .card',{autoAlpha:0})

// #service2 슬라이드 / 카드 대체되는 모션
// 클래스만 부여하고 싶을때 create
ScrollTrigger.create({
    trigger: "#service2",
    start:"0% 0%",
    // 이 영역의 시작과 / 윈도우 기준 50%
    // end / scroller-end
    end:"100% 100%",
    // markers: true,
    // 도달했을때
    onEnter:function(){
        // 이전 카드 지워버림
        gsap.set('#service1 .card-content',{autoAlpha:0})
        // 도달했을때 대체카드 보이게 함
        gsap.set('#service2 .title-area .card',{autoAlpha:1})
    },
    // 다시 위로 올라갔을때(다시 빠꾸)
    onLeaveBack:function(){
        // 이전 카드 다시 나오게 함
        gsap.set('#service1 .card-content',{autoAlpha:1})
        // 다시 빠꾸될때 안보이게 함
        gsap.set('#service2 .title-area .card',{autoAlpha:0})
    }

})








// #service3 슬라이드
service3Tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#service3",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
      },
})
// 완성값을 셋팅해줌
service3Tl.to('#service3 .slide-inner',{
    x:function(){
        // outerWidth: 보더값까지 포함해서 구함
        // 왼쪽으로 가야하니까 음수-
        return -$('#service3 .slide-head').outerWidth()
    }
})
// 하나씩 왼쪽으로 움직이는 모션
service3Tl.to('#service3 .card-item:nth-child(2)',1,{
    xPercent:-100,
    // 각 여백이 있으니까 여백픽셀만큼 이동
    x:-40,
    // 동시에 실행되야하므로 같은 라벨을 줌!
},'a')
service3Tl.to('#service3 .card-item:nth-child(3)',1,{
    xPercent:-200,
    x:-40*2,
},'a')
service3Tl.to('#service3 .card-item:nth-child(4)',1,{
    xPercent:-300,
    x:-40*3,
},'a')

// 글자 나오는 모션
service3Tl.to('#service1 .card-area .icon1',0.5,{
    opacity:0
},'a')
service3Tl.to('#service1 .card-area .icon2',0.5,{
    opacity:1
    // 0.5초 딜레이
},'a+=0.5')



// 올라가는 카드(대체카드)는 애초에 0인 상태
gsap.set('#service3 .card-item.card-lock',{autoAlpha:0})

// #service3 슬라이드 / 카드 대체되는 모션
// 클래스만 부여하고 싶을때 create
ScrollTrigger.create({
    trigger: "#service3",
    start:"0% 0%",
    // 이 영역의 시작과 / 윈도우 기준 50%
    // end / scroller-end
    end:"100% 100%",
    // markers: true,
    // 도달했을때
    onEnter:function(){
        // 이전 카드 지워버림
        gsap.set('#service2 .title-area .card',{autoAlpha:0})
        // 도달했을때 대체카드 보이게 함
        gsap.set('#service3 .card-item.card-lock',{autoAlpha:1})
    },
    // 다시 위로 올라갔을때(다시 빠꾸)
    onLeaveBack:function(){
        // 이전 카드 다시 나오게 함
        gsap.set('#service2 .title-area .card',{autoAlpha:1})
        // 다시 빠꾸될때 안보이게 함
        gsap.set('#service3 .card-item.card-lock',{autoAlpha:0})
    }

})








// 올라가는 카드(대체카드)는 애초에 0인 상태
gsap.set('#service4 .card',{autoAlpha:0})

// #service4 슬라이드 / 카드 대체되는 모션
// 클래스만 부여하고 싶을때 create
ScrollTrigger.create({
    trigger: "#service4",
    start:"0% 0%",
    // 이 영역의 시작과 / 윈도우 기준 50%
    // end / scroller-end
    end:"100% 100%",
    // markers: true,
    // 도달했을때
    onEnter:function(){
        // 이전 카드 지워버림
        gsap.set('#service3 .card-content',{autoAlpha:0})
        // 도달했을때 대체카드 보이게 함
        gsap.set('#service4 .card',{autoAlpha:1})
    },
    // 다시 위로 올라갔을때(다시 빠꾸)
    onLeaveBack:function(){
        // 이전 카드 다시 나오게 함
        gsap.set('#service3 .card-content',{autoAlpha:1})
        // 다시 빠꾸될때 안보이게 함
        gsap.set('#service4 .card',{autoAlpha:0})
    }

})

// #service4 스크롤 모션
service4Tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#service4",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 그라데이션
        // 도달했을때
        onEnter:function() {
            $('#service4').addClass('');
        },
        // 도달했다가 다시 올라갈때
        onLeaveBack:function(){
            $('#service4').removeClass('');

        }
      },
})
// service4Tl.to($('#service4 .card::before'),{autoAlpha:1})
service4Tl.to($('#service4 .title'),{autoAlpha:1})







// 미래금융 없는 상태
// gsap.set('.sc-slide-asset .arrow-title .text2',{autoAlpha:0})

// sc-slide-asset 슬라이드
slideAssetTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-slide-asset",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 이 속성을 추가해줘야함 / 갱신.재실행
        // 창 사이즈를 수축증가해도 밑의 x수치가 갱신되도록 해줌
        invalidateOnRefresh:true,
        // 화살표
        toggleClass:{
            targets:".sc-slide-asset .arrow",
            className:"show"
        },

       // 글자 바뀌는 모션
onUpdate: function(data) {
    var a = data.progress;

    if (a > 0.5) {
        // 절반 지점 넘어왔을때 처리할 코드
        $('.sc-slide-asset .arrow-title .text1').removeClass('show');  // text1 숨기기
        $('.sc-slide-asset .arrow-title .text2').addClass('show');  // text2 보이기
    } else {
        // 진행도가 0.5 이하일 때 처리할 코드
        $('.sc-slide-asset .arrow-title .text1').addClass('show');  // text1 보이기
        $('.sc-slide-asset .arrow-title .text2').removeClass('show');  // text2 숨기기
    }
}
      },


})
// to로 완성값을 셋팅해줌
slideAssetTl.to('.sc-slide-asset .slide-inner',{
    // transform %
    // 왼쪽으로
    xPercent:-100,
    // xPercent는 퍼센트%, x는 px
    // 패딩까지 포함한 넓이만큼 땡기고싶다면 innerwidth를 줌
    // 창의 사이즈에 맞게 바껴야 하므로
       x: function() {
        // 내가 보고있는 창의 크기(화면의 크기만큼)
            return window.innerWidth-140;
       }
},"a")

// 글자 바뀌는 모션
// slideAssetTl.to(".sc-slide-asset .arrow-title .text1", { opacity: 0, duration: 0.5 },'a')
// slideAssetTl.to(".sc-slide-asset .arrow-title .text2", { opacity: 1, duration: 0.5 },'a');


//  if (Math.floor(self.progress * 100) >= 47) {
//             $(".start-title").css("opacity", "0");
//             $(".end-title").css("opacity", "1");
//           } else {
//             $(".start-title").css("opacity", "1");
//             $(".end-title").css("opacity", "0");
//           }





// sc-creator 스크롤 모션
creatorTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-creator .creator-content",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 화살표 모션
        // onLeave : 떠났을때
        onLeave:function(){
            $('.sc-creator .creator-content .scroll-down').addClass('hide');
        },
        // onEnterBack : 떠났다가 다시 돌아올때
        onEnterBack:function(){
            $('.sc-creator .creator-content .scroll-down').removeClass('hide');
        }
      },
})
creatorTl.to($('.sc-creator .intro'),{autoAlpha:1})
creatorTl.to($('.sc-creator .intro'),{autoAlpha:0},) 


// sc-creator 슬라이드
creatorTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-creator .creator-slide",
        start:"0% 0%",
        end:"100% 100%",
        // markers: true,
        scrub:0,
        // 이 속성을 추가해줘야함 / 갱신.재실행
        // 창 사이즈를 수축증가해도 밑의 x수치가 갱신되도록 해줌
        invalidateOnRefresh:true,
      },
})
// to로 완성값을 셋팅해줌
creatorTl.to('.sc-creator .slide-inner',{
    // transform %
    // 왼쪽으로
    xPercent:-100,
    // xPercent는 퍼센트%, x는 px
    // 패딩까지 포함한 넓이만큼 땡기고싶다면 innerwidth를 줌
    // 창의 사이즈에 맞게 바껴야 하므로
       x: function() {
        // 내가 보고있는 창의 크기(화면의 크기만큼)
            return window.innerWidth-140;
       }
})








// join 모션
introTl = gsap.timeline({
    scrollTrigger:{
        trigger: ".sc-ground",
        start:"0% 0%",
        endTrigger: "#footer",
        end:"100% 100%",
        // markers: true,
        scrub:0,

    // 도달했을때
    onEnter:function(){
        // 이전 카드 지워버림
        $('.sc-join').addClass('active');
    },
    // 다시 위로 올라갔을때(다시 빠꾸)
    onLeaveBack:function(){
        // 이전 카드 다시 나오게 함
        $('.sc-join').removeClass('active');
    }
      },
})
