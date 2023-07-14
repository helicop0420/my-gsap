<template>
  <div style="background-color: black;">
    <div
      class="mx-auto items-center container-fluid"
      style="width: 80%;"
    >
      <div class="flex justify-between items-stretch oscar2-texts"  style="padding-top: 200px;">
        <div style="width: 30%;">
          <div class="flex justify-center mb-5">
            <img src="../assets/img/oscar/One solution X2.png" width="300px" />
          </div>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">One Solution.</p>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">Multiple functions.</p>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">No compromise.</p>
          <p style="color: #CDCDCD;" class="text-center mt-5" >Achieve more with less. Optimize your <br>stock management and simplify your <br>procedural flow</p>
        </div>
        <div style="width: 30%;">
          <div class="flex justify-center mb-5">
            <img src="../assets/img/oscar/Lesion-specific X2.png" width="300px" />
          </div>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">Lesion-specific</p>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">angioplasty with</p>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">length-adjustable balloon</p>
          <p style="color: #CDCDCD;" class="text-center mt-5" >Customize your angioplasty <br>by matching ballon exactly<br> to lesion length</p>
        </div>
        <div style="width: 30%;">
          <div class="flex justify-center mb-5">
            <img src="../assets/img/oscar/User-adjustable X2.png" width="300px" />
          </div>
          <p class="text-white text-cente oscar2-text" style="font-size: 30px; font-weight: bold;">User-adjustable guide</p>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">wire support for</p>
          <p class="text-white text-center oscar2-text" style="font-size: 30px; font-weight: bold;">pushability or flexibility</p>
          <p style="color: #CDCDCD;" class="text-center mt-5" >User adjustable guide wire <br>support so you can choose the <br>pushability and flexibility you need</p>
        </div>
      </div>
      <div style="margin-top: 200px; padding-bottom: 200px;">
        <p class="text-white tablet-text-1" style="font-size: 120px; font-weight: bold;">Oscar</p>
        <p class="text-white tablet-text-2" style="font-size: 80px; line-height: 90px;">One Solution:</p>
        <p class="text-white tablet-text-2 mb-5" style="font-size: 80px; line-height: 90px;">Multiple functions.</p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;">Simplify your approach to a complex</p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;">problem. Achieve versatility without</p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;">compromise. <span style="font-weight: bold;">Flexibility, pushability</span></p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;"><span style="font-weight: bold;">long or short balloons</span> - use a single</p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;">system with fully adjustable</p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;">components to cross and dilate</p>
        <p class="text-white tablet-text-3" style="font-size: 50px; line-height: 60px;">lesions exactly how you want to.</p>
      </div>
    </div>
  </div>
</template>

<style>

  .font-orange {
    color: #F25625; 
  }
  .font-grey {
    color: #6E6E6E;
  }
  .font-bold {
    font-weight: bold;;
  }
  .oscar2-texts {
    opacity: 0;
  }
  .oscar2-text {
    line-height: 34px;
  }

  @media screen and (max-width: 1300px) {
    .tablet-text-1 {
      font-size: 100px !important;
    }
    .tablet-text-2 {
      font-size: 70px !important;
    }
    .tablet-text-3 {
      font-size: 40px !important;
    }
    .container-fluid {
      width: 96% !important;
    }
  }
</style>

<script>
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
     
      loading: false,
      loaded: false
    };
  },
  mounted() {

    gsap.timeline({
      scrollTrigger: {
        trigger: '.oscar2-texts',
        start: 'top center',
        end: 'top top',
        scrub: 0.2,
        // ease: gsap.Power3.easeOut
      }
    })
    .to(".oscar2-texts", {opacity: 1})
   
  },
  
  watch: {

  },
  methods: {
   
   
  }

  
};



</script>



