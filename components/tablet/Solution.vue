<template>
    <div class="solution-wrapper" id="solution-wrapper">
        <div  class="solution-section" >
            <div id="solution-section" class="solution-section-item solution-section-1">
                <div class="solution1-container" >
                    <div class="solution" >
                        <div class="solution-box solution-box-1" style="color: #fd4f01; border-radius: 20px; background-color: white; text-align: center;">
                            <div>
                                <p>One</p>
                                <p>Solution</p>
                            </div>
                        </div>
                        <img class="solution-box solution-box-2" src="../../assets/img/solution/BIO-OscarLP-M-02-Box02-min.png" />
                        <img class="solution-box solution-box-3" src="../../assets/img/solution/BIO-OscarLP-M-02-Box03-min.png" />
                    </div>
                </div>
            </div>
            <div id="solution2-section" class="solution-section-item solution-section-2" style="overflow: hidden;">
                <div class="solution2-container" >
                    <div style="width: 85%;">
                        <div style="position: absolute; left: -3vw; top: 0vh;">
                            <div id="chartLottie" class="lottie-wrapper" ref="chart" style="width: 150vw; max-width: 1032px;"></div>
                        </div>
                        <div id="chartLottie2" class="lottie-wrapper2" ref="dial" style=""></div>
                        <div style="position: absolute; left: 5%; bottom: 30px;">
                            <p class="font-grey" style="padding-top:20px; padding-left: 20px; font-size: 20px; line-height: 21px;" >An average PTA ballon requires up to<br> 65<sup>◊</sup> stock units to cover a full size range.<br> The Oscar PTA Ballon only needs 11.</p>
                            <p class="font-grey" style=" padding-top: 30px; padding-left: 20px; margin-top: 10px;"><sup>◊</sup>Compared to equivalent available sizes of Passeo<sup>®</sup>-14 and Passeo<sup>®</sup>-18 PTA balloons</p>
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
    #solution-section {
        padding-top: 75px;
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
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 130px;
        line-height: 128px;
        font-weight: bold;
        background: linear-gradient(to right, #f4f4f4, #f3f3f3);
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
        height: 70vh;
        background-color: white;
        display: flex;
        justify-content: center;
        overflow: hidden;
        /* display: flex; */
    }
    #chartLottie2 {
        scale: 1.8;
        height: 50%;
        position: absolute;
        top: 8vh;
        right: 1vw;
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
                path: 'https://assets10.lottiefiles.com/packages/lf20_d6QpT1Rx5T.json'
            });
        const animation2 = lottie.loadAnimation({
                container: gsap.utils.toArray("#chartLottie2")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets1.lottiefiles.com/packages/lf20_bh2Ncy3wJG.json'
            });

        gsap.to('.solution-box-2', {scale: 0.6}).play()
        gsap.to('.solution-box-3', {scale: 0.6}).play()

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution-section',
                start: 'center center',
                scrub: true,
                pin: true,
                end: '+=4000'
            }
        })
        .to('.solution .solution-box-1', {scale: 0.6, ease: "power2.in"})
        .to('.solution .solution-box-1', {y: '-150vh', ease: "power2.in"})
        .to('.solution .solution-box-2', {y: '-150vh', ease: "power2.in"})

        gsap.timeline({
            scrollTrigger: {
                trigger: '#solution2-section',
                start: 'center center',
                scrub: true,
                pin: true,
                end: '+=4000'
            }
        })
        .add('lottie')
        .to(playhead, {
            frame: 58,
            onUpdate: (a,b,c) => {
                animation3.goToAndStop(playhead.frame, true)
            },
        },'lottie')
        .to(playhead1, {
            frame: 59,
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
  