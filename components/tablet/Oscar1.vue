<template>
  <div style="overflow: hidden; margin-top: 83px;">
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="mx-auto items-center container-fluid"
    >
      <div>
        <div :class="'main-img' + (loaded ? ' show' : '')">
          <img src="../../assets/img/oscar/oscar image X2-min.png" />
        </div>
        <div :class="'oscar1-content' + (loaded ? ' show' : '')">
          <div :class="'oscar-texts'" >
            <div class="flex">
              <p class="text-white" style="font-size: 60px; line-height: 60px;">Oscar</p>
              <p class="text-white" style="font-size: 20px; padding-top: 5px">®</p>
            </div>
            <p class="text-white" style="font-size: 22px;">One Solution: Cross. Adjust. Restore.</p>
            <p class="text-white" style="font-size: 30px; line-height: 30px;">The all-in-one solution to reach,</p>
            <div class="flex">
              <p class="text-white" style="font-size: 30px;">cross and prepare lesions</p>
              <p class="text-white" style="padding-top: 5px;">1</p>
            </div>
          </div>
          <div :class="'contact-form'" >
            <p class="font-orange font-bold my-4" style="font-size: 20px; margin: 0;">Get in touch to learn more</p>
            <p class="my-4 font-grey" style="font-size: 14px; font-weight: bold; margin: 0;" >By providing your contact details, you agree that our local BIOTRONIK sales organization will follow-up with you via e-mail.</p>
            <div class="grid grid-cols-2 gap-2">
            <div class="col-span-1">
              <p class="font-orange font-bold" style="font-size: 14px;" >First Name*</p>
              <div class="flex">
                <input class="oscar-input" />
              </div>
            </div>
            <div class="col-span-1">
              <p class="font-orange font-bold" style="font-size: 14px;" >Last Name*</p>
              <div class="flex">
                <input class="oscar-input" />
              </div>
            </div>
            <div class="col-span-1">
              <p class="font-orange font-bold" style="font-size: 14px;" >Email Address*</p>
              <div class="flex">
                <input class="oscar-input" />
              </div>
            </div>
            <div class="col-span-1">
              <p class="font-orange font-bold" style="font-size: 14px;" >Country*</p>
              <div class="flex">
                <select class="oscar-input" >
                </select>
              </div>
            </div>
            <div class="col-span-1">
              <div class="flex">
                <button class="my-5 request-btn">Request now</button>
              </div>
            </div>
            </div>
            <p class="my-4 font-grey" style="font-size: 12px; line-height: 18px; margin: 0;" >Your information will be processed in accordance with our <span>privacy statement.</span><br>
            Please note that you can withdraw your consent at any time by using the unsubscribe option in our e-mails.<br>
            *indicates required field.</p>
  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-img, .oscar-texts, .oscar1-content {
    transition: all 1.5s ease-out, opacity 2.5s ease-out;
  }
  .main-img{
    opacity: 0;
    transform: translateX(-150px);
    position: absolute;
    top: 0;
    left: -20px;
    padding-top: 80px;
  }
  .oscar1-content {
    opacity: 0;
    transform: translateY(-150px);
  }
  .main-img.show, .oscar1-content.show {
    opacity: 1;
    transform: translateY(0);
  }
  .oscar1-content {
    margin-bottom: 40px;
    margin-top: 40%;
  }
  .oscar-texts {
    
  }
  .request-btn {
    background-color: #F25625; 
    font-size: 16px;
    border-radius: 30px;
    color: white;
    padding-top: 5px;
    width: 100%;
    padding-bottom: 5px;
  }
  .oscar-input {
    width: 100%;
    border-color: #727272 !important;
    border: solid 2px;
    border-radius: 10px;
    height: 40px;
    
  } 

  .contact-form {
    background-color: #FFF6F2;
    padding: 20px;
    margin-top: 10px;
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
    width: 2.5rem;
    height: 2.5rem;
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
    setTimeout(() => {
      this.loaded = true;
    }, 100)
  },
  
  watch: {

  },
  methods: {

  }

  
};



</script>



