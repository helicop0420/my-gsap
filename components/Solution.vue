<template>
    <div class="solution-wrapper" id="solution-wrapper">

        <div id="solution-section" class="solution-section" >
            <div class="solution-section-item solution-section-1">
                <div class="solution1-container" >
                    <div class="solution" >
                        <img class="solution-box solution-box-1" src="../assets/img/BIO-OscarLP-D-02-Box01-min.png" />
                        <img class="solution-box solution-box-2" src="../assets/img/BIO-OscarLP-D-02-Box02-min.png" />
                        <img class="solution-box solution-box-3" src="../assets/img/BIO-OscarLP-D-02-Box03-min.png" />
                    </div>
                </div>
            </div>
            <div class="solution-section-item solution-section-2">
                <div class="solution2-container" >
                    <div class="flex" style="width: 100%;">
                        <div class="flex justify-center" style="width: 50%;">
                            <div id="chartLottie" class="lottie-wrapper" ref="chart" style="width: 75%;"></div>
                        </div>
                        <div style="width: 50%; padding-right: 10%;">
                            <div id="chartLottie2" class="lottie-wrapper2" ref="dial" style=""></div>
                            <div class="solution-text">
                                <p class="font-grey solution-text-1" style="padding-top: 30px; padding-left: 50px; font-size: 35px; border: solid 1px; border-width: 1px 0 0 0;" >An average PTA balloon requires<br> up to 65 stock units to cover a full<br> size range. The Oscar PTA Ballon<br> only needs 11.</p>
                                <p class="font-grey solution-text-2" style=" padding-top: 30px; padding-left: 50px; margin-top: 80px;"><sup>◊</sup>Compared to equivalent available sizes of Passeo<sup>®</sup>-14 and Passeo<sup>®</sup>-18 PTA balloons</p>
                            </div>
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
    .solution-section {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        width: 200%;
    }

    .solution-section-2 {
        background-color: white;
    }

    .solution-text {
        margin-top: 100px;
    }
    .solution-text-1, .solution-text-2 {
        opacity: 0;
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
    .solution2-container {
        position: relative;
        min-height: 100vh;
        background-color: white;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        padding-bottom: 40px;
        /* display: flex; */
  }
    #chartLottie2 {
        height: 240px;
        width: 240px;
        margin-left: 50px;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 1300px) {
        .solution-box {
            height: 100%;
        }
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
                scrub: true,
                pin: true,
                end: '+=9000'
            }
        })
        .to('.solution .solution-box-1', {scale: 0.6, duration: 6})
        .to('.solution .solution-box-1', {x: '-100vw', duration: 6})
        .to('.solution .solution-box-2', {x: '-100vw', duration: 6})
        .add('move')
        .to('.solution .solution-box-3', {opacity: 0, duration: 10}, 'move')  
        .to(panels, {
            xPercent: -100 * ( panels.length - 1 ),
            duration: 10,
        }, 'move')
        .add('lottie')
        .to(playhead, {
            frame: 58,
            ease: "power2.in",
            duration: 4,
            onUpdate: (a,b,c) => {
                animation3.goToAndStop(playhead.frame, true)
            },
        },'lottie')
        .to(playhead1, {
            frame: 59,
            ease: "power2.in",
            duration: 4,
            onUpdate: (a,b,c) => {
                animation2.goToAndStop(playhead1.frame, true)
            },
        },'lottie')
        .to('.solution-text', {marginTop: 0, duration: 6}, 'lottie')
        .to('.solution-text-1', {opacity: 1, duration: 6}, 'lottie')
        .to('.solution-text-2', {opacity: 1, duration: 6}, 'lottie')
        // .to(playhead1, {
        //     frame: 58,
        //     ease: "none",
        //     Togg
        //     onUpdate: (a,b,c) => {
        //         animation2.goToAndStop(playhead1.frame, true)
        //     },
        // },'lottie');
    },
    components: {
    },
    methods: {
    }
    
  };
  
  
  
  </script>
  