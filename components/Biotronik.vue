<template>
  <div class="scrollpanels-content" id="biotronik" style="overflow: hidden; background-color: #F25625;">
    
    <template v-if="mode==='desktop'">
      <div id="oscar-wrapper" class="my-panel">
        <div ref="oscar1">
          <oscar1 />
        </div>
        <div ref="oscar2">
          <oscar2 />
        </div>       
      </div>
      <div class="my-panel" ref="solution">
        <solution />
      </div>
      <div class="my-panel">
        <cross />
      </div>
      <div class="my-panel">
        <adjust />
      </div>
      <div class="my-panel">
        <restore />
      </div>
      <div class="my-panel">
        <testimon />
      </div>
      <contactus />
      <desktop-footer />
    </template>
    <template v-if="mode==='tablet'">
      <div class="my-panel" id="oscar-wrapper">
        <tablet-oscar1 />
        <tablet-oscar2 />
      </div>
      <tablet-solution class="my-panel" />
      <tablet-cross class="my-panel" />
      <tablet-adjust class="my-panel" />
      <tablet-restore class="my-panel" />
      <tablet-test class="my-panel" />
      <tablet-contactus class="my-panel" />   
      <tablet-footer class="my-panel" />
    </template>
    <template v-if="mode==='mobile'">
      <div class="my-panel" id="oscar-wrapper">
        <mobile-oscar1 />
        <mobile-oscar2 />
      </div>
      <mobile-solution class="my-panel" />
      <mobile-cross class="my-panel" />
      <mobile-adjust class="my-panel" />
      <mobile-restore class="my-panel" />
      <mobile-test class="my-panel" />
      <mobile-contactus class="my-panel" />
      <mobile-footer class="my-panel" />
    </template>

  </div>
</template>

<style scoped>

</style>

<script>
import Oscar1 from '@/components/Oscar1'
import Oscar2 from '@/components/Oscar2'
import Solution from '@/components/Solution'
import Cross from '@/components/Cross'
import Adjust from '@/components/Adjust'
import Restore from '@/components/Restore'
import Testimon from '@/components/Testimon'
import ContactUs from '@/components/ContactUs.vue'
import HeroContentMobile from '@/components/HeroContentMobile'
import Footer from '@/components/Footer'

import TabletOscar1 from '@/components/tablet/Oscar1.vue'
import TabletOscar2 from '@/components/tablet/Oscar2.vue'
import TabletSolution from '@/components/tablet/Solution.vue'
import TabletCross from '@/components/tablet/Cross.vue'
import TabletAdjust from '@/components/tablet/Adjust.vue'
import TabletRestore from '@/components/tablet/Restore.vue'
import TabletTestimon from '@/components/tablet/Testimon.vue'
import TabletContactUs from '@/components/tablet/ContactUs.vue'
import TabletFooter from '@/components/mobile/Footer.vue'

import MobileOscar1 from '@/components/mobile/Oscar1.vue'
import MobileOscar2 from '@/components/mobile/Oscar2.vue'
import MobileSolution from '@/components/mobile/Solution.vue'
import MobileCross from '@/components/mobile/Cross.vue'
import MobileAdjust from '@/components/mobile/Adjust.vue'
import MobileRestore from '@/components/mobile/Restore.vue'
import MobileTestimon from '@/components/mobile/Testimon.vue'
import MobileContactUs from '@/components/mobile/ContactUs.vue'
import MobileFooter from '@/components/mobile/Footer.vue'
import gsap from 'gsap'

if (process.client) {
  var {ScrollTrigger} = require('gsap/ScrollTrigger');
  var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default {
  name: 'Hero',
  
  data () {
    return {
      mode: '',
      scrollTween: null,
    }
  },
  computed:{
    isOpenContact(){
      return this.$store.state.isOpenContact
    },
    isOpenTabletContact(){
      return this.$store.state.isOpenTabletContact
    },
    isOpenMobileContact(){
      return this.$store.state.isOpenMobileContact
    }
  },
  methods: {
    goToSection (top) {
      let observer = ScrollTrigger.normalizeScroll(true);
      console.log('goTo', top);
      this.scrollTween = gsap.to(window, {
        scrollTo: {y: top, autoKill: false},
        // ease: "strong.inOut",
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
  },
  mounted () {

    if (window.innerWidth >= 1300) this.mode = 'desktop';
    else if(window.innerWidth >= 500) this.mode = 'tablet'
    else this.mode = 'mobile';


    setTimeout(() => {
      const {oscar1, oscar2} = this.$refs;
      const selft = this;
    }, [100])
  },
  components: {
    'oscar1': Oscar1,
    'oscar2': Oscar2,
    'solution': Solution,
    'cross': Cross,
    'hero-content-mobile': HeroContentMobile,
    'adjust': Adjust,
    'restore': Restore,
    'testimon': Testimon,
    'contactus': ContactUs,
    'desktop-footer': Footer,

    'tablet-oscar1': TabletOscar1,
    'tablet-oscar2': TabletOscar2,
    'tablet-solution': TabletSolution,
    'tablet-cross': TabletCross,
    'tablet-adjust': TabletAdjust,
    'tablet-restore': TabletRestore,
    'tablet-test': TabletTestimon,
    'tablet-contactus': TabletContactUs,
    'tablet-footer': TabletFooter,

    'mobile-oscar1': MobileOscar1,
    'mobile-oscar2': MobileOscar2,
    'mobile-solution': MobileSolution,
    'mobile-cross': MobileCross,
    'mobile-adjust': MobileAdjust,
    'mobile-restore': MobileRestore,
    'mobile-test': MobileTestimon,
    'mobile-contactus': MobileContactUs,
    'mobile-footer': MobileFooter
  }
}
</script>
