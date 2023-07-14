<template>
  <div class="solution2-container" >
    <div class="flex" style="width: 80%;">
      <div style="width: 50%;">
        <div id="chartLottie" class="lottie-wrapper" ref="chart" style="background-color: black;"  ></div>
      </div>
      <div style="width: 50%;">
        <img src="../assets/img/solution/83.png" style="width: 500px;" />
        
        <p class="font-grey" style="font-weight: bold; padding-top: 30px; padding-left: 50px; font-size: 35px; border: solid 1px; border-width: 1px 0 0 0;" >An average PTA ballon requires up to 65 stock units to cover a full size range. The Oscar PTA Ballon only needs 11.</p>
        <p class="font-grey" style=" padding-top: 30px; padding-left: 50px; margin-top: 100px;">Compared to equivalent available sizes of Passeo® - 18 PTA balloons</p>
      </div>
    </div>
  </div>
 
</template>

<style scoped>
  .solution2-container {
    position: relative;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    /* display: flex; */
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
      loaded: false,
      scrollTween: null,
      animation3: null,
      animation3Tween: null
    };
  },
  mounted() {
  
    const selft = this;
   
    this.chartLottieScrollTrigger()
  },
  
  watch: {

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
    chartLottieScrollTrigger() {
      this.animation3 = lottie.loadAnimation({
          container: gsap.utils.toArray("#chartLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: 'https://lottie.host/e9c52127-4aa2-4a96-9e78-e02f34019c86/KH082lccRF.json'
      });
      const selft = this;
      const {chart} = this.$refs; 
      this.animation3.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 10},
        st = {trigger: '.cross-container', pin: true, start: "top bottom", end: "+=1000", scrub: 1},
        ctx = gsap.context && gsap.context();
        setTimeout(() => {
          selft.animation3Tween = function() {
            
            selft.animation3.frameTween = gsap.to(playhead, {
                frame: 200,
                ease: "none",
                onUpdate: (a,b,c) => {
                  selft.animation3.goToAndStop(playhead.frame, true)
                },
                scrollTrigger: st
            });
            return () => selft.animation3.destroy && selft.animation3.destroy();
          };
          ctx && ctx.add ? ctx.add(selft.animation3Tween) : selft.animation3Tween();
  
          // ScrollTrigger.create({
          //   trigger: chart,
          //   start: "top bottom",
          //   end: "top top",
          //   onToggle: self => {
          //     self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(chart, 3))
          //     // selft.animation3.play();
          //   }
          // });
  
          // ScrollTrigger.sort();
          // ScrollTrigger.refresh();  
          
        }, 100);

      })
    },
  }

  
};



</script>
