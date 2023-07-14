<template>
  <div>
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="mx-auto items-center" 
    >
      <div id="lottieWindow" class="" ref="first" ></div>
      <div style="position: relative;">
        <div id="secondLottie" class="lottie-wrapper" ref="second" >
          <div :class="isShowBtns?'btn-group':'opacity-0'">
            <button
              class="mx-auto lg:mx-0 rounded-full mt-4 lg:mt-0 shadow opacity-75 text-purple border-purple consumer-button"
              @click="goToConsumer"
            >
              Consumer
            </button>
            <button
              class="mx-auto lg:mx-0 rounded-full mt-4 lg:mt-0 shadow opacity-75 text-white border-white enterprise-button"
              @click="goToEnterprise"
            >
              Enterprise
            </button>
          </div>
      </div>
      
      </div>
      <div id="thirdLottie" class="lottie-wrapper" ref="third" style="background-color: black;"  ></div>
      <div id="fourthLottie" class="lottie-wrapper" ref="fourth" style="background-color: #101010;" ></div>
      <div id="fifthLottie" class="lottie-wrapper" ref="fifth" style="background-color: white;"></div>
      <div id="sixthLottie" class="" ref="sixth" style="background-color: white;" ></div>
      <div id="seventhLottie" class="" ref="seventh" style="background-color: #101010;" ></div>
      <!-- <div id="eigthLottie" class="lottie-wrapper" ref="eigth" style="background-color: white;" ></div> -->
      <div id="ninethLottie" ref="nineth" style="background-color: white;" ></div>
    </div>
  </div>
</template>

<style>

  .opacity-0 {
    opacity: 0;
  }
  .btn-group {
    opacity: 1;
    transition: all 2s ease-in;
    position: absolute;
    top: 39.5%;
    left: auto;
    right: auto;
    width: 100%;
    max-width: 150vh;
  }
  /* @media screen and (max-width: 1563px) {
  .btn-group {
    max-width: 1290px !important;
    right: 0px !important;
  }
} */
  .lottie-wrapper {
    height: 100vh !important;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .lottie-wrapper>svg {
    /* height: auto !important; */
    object-fit: contain;
  }
  .text-purple {
    color: #D2B8ED;
  }
  .border-purple {
    border-color: #D2B8ED;
  }
  .consumer-button {
    border: solid 2px;
    position: absolute;
    right: 9.5vw;
    /* top: 41.5%; */
    font-size: 1.5vw;
    padding: 0.4vw 1vw 0.5vw;
    z-index: 10;
  }
  .enterprise-button {
    border: solid 2px;
    position: absolute;
    right: 0px;
    /* top: 41.5%; */
    font-size: 1.5vw;
    padding: 0.4vw 1vw 0.5vw;
    z-index: 10;
  }
  .loading-page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .loading {
    display: inline-block;
    width: 3.5rem;
    height: 3.5rem;
    border: 4px solid rgba(210, 184, 237, 0.705);
    border-radius: 50%;
    border-top-color: #D2B8ED;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>

<script>
//https://lottie.host/00cc7db7-13c7-40b9-81e0-63bdba44c234/6AGc0xRwJi.json
// import lottie from 'vue-lottie/src/lottie.vue'
// import * as firstAnimationData from "~/assets/lottie/Page 1-(Full).json";
// import * as secondAnimationData from "~/assets/lottie/Page 2-(Full).json";
//https://lottie.host/67bb6f7e-36d3-4670-915f-cf16f307c55f/7NpYwOwC2z.json
//https://lottie.host/81414737-55a6-4e99-bd7d-e9116f842889/lVXB73xi3i.json
//https://lottie.host/b8cfe65c-12e2-409d-8597-50164d6fc96a/mc90hu87Qs.json
//https://lottie.host/e42cf5be-962a-48ac-9110-c47848d079c9/g5ZAFEGogS.json
// import * as fourthAnimationData from "~/assets/lottie/Page 4-(Full).json";
import gsap from 'gsap'
import lottie from 'lottie-web'
// var ScrollTrigger = null;
if (process.client) {
  var {ScrollTrigger} = require('gsap/ScrollTrigger');
  var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
export default {
  // components: { lottie },

  data() {
    return {
      animation2: null,
      animation3: null,
      animation4: null,
      animation5: null,
      animation6: null,
      animation7: null,
      animation8: null,
      animation9: null,
      animation3Tween: null,
      animation5Tween: null,
      animation6Tween: null,
      animation7Tween: null,
      animation8Tween: null,
      isShowBtns: false,
      scrollTween: null,
      loading: true
    };
  },
  mounted() {
   
    this.secondLottieScrollTrigger()
    this.thirdLottieScrollTrigger()
    this.fourthLottieScrollTrigger()
    this.fifthLottieScrollTrigger()
    this.sixthLottieScrollTrigger()
    this.seventhLottieScrollTrigger()
    // this.eigthLottieScrollTrigger()
    this.ninethLottieScrollTrigger()
    if (process.client) {
      this.firstLottieScrollTrigger({
        target: "#lottieWindow",
        path: "https://lottie.host/e8514756-7af0-4a3e-aa9b-0b1e0b468a90/phyBIXo9AK.json",
        speed: "medium",
        scrub: 2 // seconds it takes for the playhead to "catch up"
        // you can also add ANY ScrollTrigger values here too, like trigger, start, end, onEnter, onLeave, onUpdate, etc. See https://greensock.com/docs/v3/Plugins/ScrollTrigger
      });
    }
    
  },
  methods: {
    goToConsumer() {
      this.goToSection(this.getTopPosition(this.$refs.third, 3))
    },
    goToEnterprise() {
      this.goToSection(this.getTopPosition(this.$refs.seventh, 7) + 600)
    },
    secondLottieScrollTrigger() {
      this.animation2 = lottie.loadAnimation({
          container: gsap.utils.toArray("#secondLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          // path: "https://lottie.host/25f95591-d9c7-442b-9514-1eb527373f64/cvxvyjjbwt.json"
          path: "https://lottie.host/ca1d6657-6b13-4f87-9be8-c1b9490b4b97/stR0mdPYxU.json"
      });
    },
    thirdLottieScrollTrigger() {
      this.animation3 = lottie.loadAnimation({
          container: gsap.utils.toArray("#thirdLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/00cc7db7-13c7-40b9-81e0-63bdba44c234/6AGc0xRwJi.json"
      });
      const selft = this;
      this.animation3.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 30},
        st = {trigger: selft.$refs.third, pin: true, start: "top top", end: "+=10000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation3Tween = function() {
          selft.animation3.frameTween = gsap.to(playhead, {
              frame: 400,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation3.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation3.destroy && selft.animation3.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation3Tween) : selft.animation3Tween();
      })
    },
    fourthLottieScrollTrigger() {
      this.animation4 = lottie.loadAnimation({
          container: gsap.utils.toArray("#fourthLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          // path: "https://lottie.host/57c2ae16-9a71-47bc-89e6-03dd11e3d0f6/knuJSpWT4K.json"
          path: "https://lottie.host/0129d462-7153-4dd5-a8bb-6f073ffe3d89/to4madqEDA.json"
      });
    },
    fifthLottieScrollTrigger() {
      this.animation5 = lottie.loadAnimation({
          container: gsap.utils.toArray("#fifthLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/67bb6f7e-36d3-4670-915f-cf16f307c55f/7NpYwOwC2z.json"
      });
      const selft = this;
      this.animation5.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 30},
        st = {trigger: selft.$refs.fifth, pin: true, start: "top top", end: "+=10000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation5Tween = function() {
          selft.animation5.frameTween = gsap.to(playhead, {
              frame: 250,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation5.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation5.destroy && selft.animation5.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation5Tween) : selft.animation5Tween();
      })
    },
    sixthLottieScrollTrigger() {
      this.animation6 = lottie.loadAnimation({
          container: gsap.utils.toArray("#sixthLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/b13c6af9-f9c1-4e0a-be16-bd3443f66da4/nwFV9j8DVx.json"
      });
      const selft = this;
      this.animation6.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 70},
        st = {trigger: selft.$refs.sixth, pin: true, start: "top top", end: "+=5000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation6Tween = function() {
          selft.animation6.frameTween = gsap.to(playhead, {
              frame: 200,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation6.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation6.destroy && selft.animation6.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation6Tween) : selft.animation6Tween();
      })
    },
    seventhLottieScrollTrigger() {
      this.animation7 = lottie.loadAnimation({
          container: gsap.utils.toArray("#seventhLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/e9c52127-4aa2-4a96-9e78-e02f34019c86/KH082lccRF.json"
      });
      const selft = this;
      this.animation7.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 30},
        st = {trigger: selft.$refs.seventh, pin: true, start: "top top", end: "+=10000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation7Tween = function() {
          selft.animation7.frameTween = gsap.to(playhead, {
              frame: 400,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation7.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation7.destroy && selft.animation7.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation7Tween) : selft.animation7Tween();
      })
    },
    
    eigthLottieScrollTrigger() {
      this.animation8 = lottie.loadAnimation({
          container: gsap.utils.toArray("#eigthLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/e42cf5be-962a-48ac-9110-c47848d079c9/g5ZAFEGogS.json"
      });
      const selft = this;
      this.animation8.addEventListener("DOMLoaded", () => {
        let playhead = {frame: 30},
        st = {trigger: selft.$refs.eigth, pin: true, start: "top top", end: "+=1000", scrub: 1},
        ctx = gsap.context && gsap.context();
        selft.animation8Tween = function() {
          selft.animation8.frameTween = gsap.to(playhead, {
              frame: 400,
              ease: "none",
              onUpdate: (a,b,c) => {
                selft.animation8.goToAndStop(playhead.frame, true)
              },
              scrollTrigger: st
          });
          return () => selft.animation8.destroy && selft.animation8.destroy();
        };
        ctx && ctx.add ? ctx.add(selft.animation8Tween) : selft.animation8Tween();
      })
    },
    ninethLottieScrollTrigger() {
      this.animation9 = lottie.loadAnimation({
          container: gsap.utils.toArray("#ninethLottie")[0],
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "https://lottie.host/748a648e-c9e9-4b75-bb9b-734697baf52f/OQ5fIaXYa2.json"
      });
    },
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
    firstLottieScrollTrigger(vars) {
      let playhead = {frame: 50},
      target = gsap.utils.toArray(vars.target)[0],

      speeds = {slow: "+=2000", medium: "+=1000", fast: "+=500"},
      st = {trigger: target, pin: true, start: "top top", end: "+=3000", scrub: 1},
      ctx = gsap.context && gsap.context(),

      animation = lottie.loadAnimation({
          container: target,
          renderer: vars.renderer || "svg",
          loop: false,
          autoplay: false,
          path: vars.path,
          // rendererSettings: vars.rendererSettings || { preserveAspectRatio: 'xMidYMid slice' }
      });
      
      for (let p in vars) { // let users override the ScrollTrigger defaults
        st[p] = vars[p];
      }
      

      const {nineth, eigth, seventh, sixth, fifth, fourth, third, second, first} = this.$refs;
      const selft = this;

      animation.addEventListener("DOMLoaded", function() {
        selft.loading = false
          animation.playSegments([0, 50], true)
          setTimeout(() => {
            let createTween = function() {
                animation.frameTween = gsap.to(playhead, {
                    frame: 120,
                    ease: "none",
                    onUpdate: (a,b,c) => {
                      animation.goToAndStop(playhead.frame, true)
                    },
                    scrollTrigger: st
                });
                return () => animation.destroy && animation.destroy();
            };
            ctx && ctx.add ? ctx.add(createTween) : createTween();
            // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes


            ScrollTrigger.create({
              trigger: first,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(first, 1))
            });
            ScrollTrigger.create({
              trigger: second,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(second, 2))
                setTimeout(() => {selft.animation2.play(); selft.isShowBtns=true;  console.log('isShowBtns', selft.isShowBtns)}, 1000)
              }
            });
            ScrollTrigger.create({
              trigger: third,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(third, 3))
              }
            });
            ScrollTrigger.create({
              trigger: fourth,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(fourth, 4))
                selft.animation4.play();
                // animation.playSegments([0, 150], true)
              }
            });
            ScrollTrigger.create({
              trigger: fifth,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(fifth, 5))
              }
            });
            ScrollTrigger.create({
              trigger: sixth,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(sixth, 6))
              }
            });
            ScrollTrigger.create({
              trigger: seventh,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(seventh, 7))
              }
            });
            // ScrollTrigger.create({
            //   trigger: eigth,
            //   start: "top bottom",
            //   end: "+=150%",
            //   onToggle: self => {
            //     self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(eigth, 8))
            //   }
            // });
            ScrollTrigger.create({
              trigger: nineth,
              start: "top bottom",
              end: "+=150%",
              onToggle: self => {
                self.isActive && !selft.scrollTween && selft.goToSection(selft.getTopPosition(nineth, 9))
                selft.animation9.play();
              }
            });
            ScrollTrigger.sort();
            ScrollTrigger.refresh();    
            
          }, 2000);

          // gsap.to(second, { x: 0, opacity:0, duration: 1, ease: "power2.inOut" });
        });
        

      return animation;
    }
  }

  
};



</script>



