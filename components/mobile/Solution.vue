<template>
    <div class="solution-wrapper" id="solution-wrapper">
        <div  class="solution-section" >
            <div id="solution-section" class="solution-section-item solution-section-1">
                <div class="solution1-container" >
                    <div class="solution" >
                        <img class="solution-box solution-box-1" src="../../assets/img/solution/BIO-OscarLP-M-02-Box01-min.png" />
                        <img class="solution-box solution-box-2" src="../../assets/img/solution/BIO-OscarLP-M-02-Box02-min.png" />
                        <img class="solution-box solution-box-3" src="../../assets/img/solution/BIO-OscarLP-M-02-Box03-min.png" />
                    </div>
                </div>
            </div>
            <div id="solution2-section" class="solution-section-item solution-section-2" style="overflow: hidden; background-color:white;">
                <div class="solution2-container" >
                    <div style="width: 85%;">
                        <div style="position: absolute; left: 4vw; top: 20vh;">
                            <div id="chartLottie" class="lottie-wrapper" ref="chart" style="width: 70%;"></div>
                        </div>
                        <div id="chartLottie2" class="lottie-wrapper2" ref="dial" style=""></div>
                        <div style="position: absolute; left: 5%; right: 5%; bottom: 20px;">
                            <p class="font-grey" style="padding-top:20px; font-size: 28px; line-height: 30px;" >An average PTA ballon requires up to 65<sup>◊</sup> stock units to cover a full size range. The Oscar PTA Ballon only needs 11.</p>
                            <p class="font-grey" style="font-size: 20px; margin-top: 10px;"><sup>◊</sup>Compared to equivalent available sizes of Passeo<sup>®</sup>-14 and Passeo<sup>®</sup>-18 PTA balloons</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  </template>
  
  <style scoped>

    .solution-wrapper {
        overflow: hidden;
    }

    .solution-section-item {
        width: 100%;
    }

    .solution1-container {
        position: relative;
        height: 100vh;
        background-color: #F25625;
        /* display: flex; */
        width: 100%;
    }

    .solution-box {
        position: absolute;
        height: 100vh;
        width: 100vw;
    }

    .solution-box-1 {
        z-index: 3;
    }
    .solution-box-2 {
        z-index: 2;
        opacity: 1;
    }
    .solution-box-3 {
        z-index: 1;
        opacity: 1;
    }
    .solution2 {
        opacity: 0;
    }
    #solution2-section {
        height: 100vh;
        padding-top: 75px;
    }
    .solution2-container {
        position: relative;
        min-height: calc(100vh - 75px);
        background-color: white;
        display: flex;
        justify-content: center;
        overflow: hidden;
        /* display: flex; */
    }
    #chartLottie2 {
        height: 26%;
        position: absolute;
        top: 8vh;
        right: 4vw;
    }
  </style>
  
  <script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    data() {
      return {
        loading: false,
        loaded: false
      };
    },
    mounted() {
        const panels = gsap.utils.toArray("#solution-section .solution-section-item");
        let panelsContainer = document.querySelector("#solution-section")
        let playhead = {frame: 0}
        let playhead1 = {frame: 0}
        // this.chartLottieScrollTrigger()
        const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#chartLottie")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://lottie.host/40d9d6dc-9b15-45d4-a275-ee5a82f8f7d4/riPOZpN1zv.json'
            });
        const animation2 = lottie.loadAnimation({
                container: gsap.utils.toArray("#chartLottie2")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets5.lottiefiles.com/packages/lf20_5CUTywzNId.json'
            });

        gsap.to('.solution-box-2', {scale: 0.6}).play()
        gsap.to('.solution-box-3', {scale: 0.6}).play()

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution-section',
                start: 'center center',
                scrub: 0.2,
                pin: true,
                end: '+=4000'
            }
        })
        .to('.solution .solution-box-1', {scale: 0.6, duration: 3})
        .to('.solution .solution-box-1', {y: '-150vh', duration: 3})
        .to('.solution .solution-box-2', {y: '-150vh', duration: 3})

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution2-section',
                start: 'center center',
                scrub: true,
                pin: true,
                end: '+=1000'
            }
        })
        .add('lottie')
        .to(playhead, {
            frame: 58,
            duration: 3,
            onUpdate: (a,b,c) => {
                animation3.goToAndStop(playhead.frame, true)
            },
        },'lottie')
        .to(playhead1, {
            frame: 59,
            duration: 3,
            onUpdate: (a,b,c) => {
                animation2.goToAndStop(playhead1.frame, true)
            },
        },'lottie')
    },
    components: {
    },
    methods: {
        goToSection (top) {
        let observer = ScrollTrigger.normalizeScroll(true);
        console.log('goTo', top);
        this.scrollTween = gsap.to(window, {
            scrollTo: {y: top, autoKill: false},
            ease: "strong.inOut",
            duration: 1,
            onStart: () => {
            observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
            observer.enable();
            },
            onComplete: () => this.scrollTween = null,
            overwrite: true
        });
        },
        getTopPosition (el, idx) {
            // return (idx - 1) * window.innerHeight;
            // if (el.parentElement.classList.contains('pin-spacer')) return el.parentElement.getBoundingClientRect().top + window.scrollY;
            return el.getBoundingClientRect().top + window.scrollY;
        },
    }
    
  };
  
  
  
  </script>
  