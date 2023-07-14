<template>
    <div asscroll-container>
      <slot asscroll />
    </div>
  </template>
  
  <script>
  import gsap from 'gsap'
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {

    created() {
      // window.addEventListener('wheel', e =>  {
      //   console.log('fff')
      //   e.preventDefault();
      //   e.stopPropagation();
      //   e.returnValue = false;
      //   return false;
      // })
    },

    mounted() {
      // window.addEventListener('wheel', e =>  {
      //   console.log('fff')
      //   e.preventDefault();
      //   e.stopPropagation();
      //   e.returnValue = false;
      //   return false;
      // })
        const self = this;
      // setTimeout(() => {
        const ASScroll = self.ASScroll;
    
        const asscroll = new ASScroll({
          disableRaf: true,
        });
    
        gsap.ticker.add(asscroll.update);
  
        if (window.innerWidth >= 1300) {
          ScrollTrigger.defaults({
            scroller: asscroll.containerElement,
          });
        }
        else {
          document.getElementById('loading-scene').style.display='none'
        }
    
        ScrollTrigger.scrollerProxy(asscroll.containerElement, {
          scrollTop(value) {
            if (arguments.length) {
              asscroll.currentPos = value;
              return;
            }
            return asscroll.currentPos;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          // fixedMarkers: true,
        });
        
        asscroll.on("update", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", asscroll.resize);

        setTimeout(() => {
          
          self.$nextTick(() => {
            asscroll.enable({
              newScrollElements: document.querySelectorAll(
                ".gsap-marker-start, .gsap-marker-end, [asscroll]"
              ),
            });
            document.getElementById('loading-scene').style.display='none'
          });
        }, 6000);
    
      // }, 5000);
    },
  };
  </script>
  
  <style>
  </style>