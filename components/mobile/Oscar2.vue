<template>
  <div style="background-color: black;">
    <div
      class="mx-auto items-center container-fluid"
      style="width: 85%;"
    >
      <div class="flex items-stretch oscar2-texts"  style="padding-top: 20px;">
        <div style="width: 30%;">
          <div class="flex justify-center mb-2">
            <img src="../../assets/img/oscar/One solution X2.png" width="160px" />
          </div>
        </div>
        <div class="ml-2">
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">One Solution.</p>
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">Multiple functions.</p>
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">No compromise.</p>
          <p style="color: #CDCDCD; line-height: 17px;" class="mt-2" >Achieve more with less.<br> Optimize your stock<br> management and simplify<br> your procedural flow</p>
        </div>
      </div>
      <div class="flex items-stretch oscar2-texts"  style="padding-top: 20px;">
        <div style="width: 30%;">
          <div class="flex justify-center mb-2">
            <img src="../../assets/img/oscar/Lesion-specific X2.png" width="160px" />
          </div>
        </div>
        <div class="ml-2">
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">Lesion-specific</p>
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">angioplasty with length-</p>
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">adjustable balloon</p>
          <p style="color: #CDCDCD; line-height: 17px;" class="mt-2" >Customize your angioplasty <br>by matching ballon exactly<br> to lesion length</p>
        </div>
      </div>
      <div class="flex items-stretch oscar2-texts"  style="padding-top: 20px;">
        <div style="width: 30%;">
          <div class="flex justify-center mb-2">
            <img src="../../assets/img/oscar/User-adjustable X2.png" width="160px" />
          </div>
        </div>
        <div class="ml-2">
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">User-adjustable guide</p>
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">wire support for</p>
          <p class="text-white" style="font-size: 18px; font-weight: bold; line-height: 20px;">pushability or flexibility</p>
          <p style="color: #CDCDCD; line-height: 17px;" class="mt-2" >User adjustable guide wire <br>support so you can choose <br>the pushability and flexibility <br> you need</p>
        </div>
      </div>
      <div style="margin-top: 14px; padding-bottom: 50px;">
        <p class="text-white" style="font-size: 50px; font-weight: bold;">Oscar</p>
        <p class="text-white" style="font-size: 36px; line-height: 36px;">One Solution:</p>
        <p class="text-white mb-5" style="font-size: 36px; line-height: 36px;">Multiple functions.</p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf">Simplify your approach to a complex</p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf">problem. Achieve versatility without</p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf">compromise. <span style="font-weight: bold; color: white;">Flexibility, pushability</span></p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf"><span style="font-weight: bold; color: white;">long or short balloons</span> - use a single</p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf">system with fully adjustable</p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf">components to cross and dilate</p>
        <p class="text-white" style="font-size: 24px; line-height: 28px; color: #bfbfbf">lesions exactly how you want to.</p>
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
        scrub: true,
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



