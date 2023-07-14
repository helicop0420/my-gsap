<template>
  <div id="oscar-container" style="height: 100vh; overflow: hidden; position: relative;">
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="mx-auto items-center container-fluid"
    >
      <div>
        <div :class="'main-img' + (loaded ? ' show' : '')">
          <img src="../assets/img/oscar/oscar image X2-min.png" style="margin-top: 76px; height: 100vh;" />
        </div>
        <div :class="'oscar-texts' + (loaded ? ' show' : '')" >
          <div class="flex">
            <p class="text-white" style="font-size: 80px; line-height: 80px;">Oscar</p>
            <p class="text-white" style="font-size: 20px; padding-top: 5px">®</p>
          </div>
          <p class="text-white mb-5" style="font-size: 25px;"><b>O</b>ne <b>S</b>olution: <b>C</b>ross. <b>A</b>djust. <b>R</b>estore.</p>
          <p class="text-white" style="font-size: 40px; line-height: 40px;">The all-in-one solution to reach,</p>
          <div class="flex">
            <p class="text-white" style="font-size: 40px;">cross and prepare lesions</p>
            <p class="text-white" style="padding-top: 5px;">1</p>
          </div>
        </div>
        <div :class="'contact-form' + (loaded ? ' show' : '')" >
          <p class="font-orange font-bold my-3" style="font-size: 25px;">Get in touch to learn more</p>
          <p class="my-3 font-grey" style="font-size: 15px; font-weight: bold;" >By providing your contact details, you agree that our local BIOTRONIK sales organization will follow-up with you via e-mail.</p>
          <p class="font-orange font-bold my-1" style="font-size: 20px;" >First Name*</p>
          <div class="flex">
            <input class="oscar-input" />
          </div>
          <p class="font-orange font-bold my-1" style="font-size: 20px;" >Last Name*</p>
          <div class="flex">
            <input class="oscar-input" />
          </div>
          <p class="font-orange font-bold my-1" style="font-size: 20px;" >Email Address*</p>
          <div class="flex">
            <input class="oscar-input" />
          </div>
          <p class="font-orange font-bold my-1" style="font-size: 20px;" >Country*</p>
          <div class="flex">
            <select class="oscar-input" >
            </select>
          </div>
          <div class="flex" style="height: 50px; position: relative; padding-top: 20px; margin-bottom: 20px;">
            <button class="request-btn">Request now</button>
          </div>
          <p class="my-4 font-grey desktop-show" style="font-size: 15px; line-height: 18px;" >Your information will be processed in accordance with our <span style="text-decoration: underline;">privacy statement.</span></p>
          <p class="my-4 font-grey desktop-show" style="font-size: 15px; line-height: 18px;" >Please note that you can withdraw your consent at any time by using the unsubscribe option in our e-mails.</p>
          <p class="my-4 font-grey desktop-show" style="font-size: 15px; line-height: 18px;" >*indicates required field.</p>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-img, .oscar-texts, .contact-form {
    transition: all 1.5s ease-out, opacity 2.5s ease-out;
  }
  .main-img, .oscar-texts {
    opacity: 0;
    transform: translateX(-150px);
  }
  .contact-form {
    opacity: 0;
    transform: translateX(150px);
  }
  .main-img.show, .oscar-texts.show, .contact-form.show {
    opacity: 1;
    transform: translateX(0);
  }
  .oscar-texts {
    position: absolute; 
    left: 4%;
    bottom: 100px;
  }
  .request-btn {
    background-color: #F25625; 
    font-size: 23px;
    border-radius: 30px;
    color: white;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute;
    left: 0;
    top: 25%;
    transition: all .1s;
  }
  .request-btn:hover {
    margin-top: -3px;
    box-shadow: 1px 1px 1px 1px #00000099;
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
    position: absolute;
    padding-left: 30px;
    padding-right: 30px;
    top: 120px;
    right: 10%;
    max-width: 402px;
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
  @media screen and (max-width: 1300px) {
    .desktop-show {
      display: none;
    }
    .contact-form {
      right: 3%;
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



