<template>
  <div style="height: calc(100vh - 75px); overflow: hidden; margin-top: 75px;">
    <div class="contact-form oscar-modal" v-if="isShowModal">
      <div class="oscar-modal-header">
        <cancelSVG style="height: 36px;" @click="isShowModal = false"></cancelSVG>
        <logoSVG></logoSVG>
      </div>
      <p class="font-orange font-bold my-4" style="font-size: 20px; margin: 0;">Get in touch to learn more</p>
      <p class="my-4 font-grey mb-3" style="font-size: 14px; font-weight: bold; margin: 0;" >By providing your contact details, you agree that our local BIOTRONIK sales organization will follow-up with you via e-mail.</p>
      <div class="grid grid-cols-1 gap-2 mt-3">
        <div class="col-span-1">
          <div class="flex">
            <input class="oscar-input" placeholder="First Name*" />
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex">
            <input class="oscar-input" placeholder="Last Name*" />
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex">
            <input class="oscar-input" placeholder="Email Address*"/>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex">
            <select class="oscar-input" >
            </select>
          </div>
        </div>
        <p class="pt-4 mb-4 font-grey" style="font-size: 12px; line-height: 18px; margin: 0;" >Your information will be processed in accordance with our <u>privacy statement.</u><br>
        Please note that you can withdraw your consent at any time by using the unsubscribe option in our e-mails.<br>
        *indicates required field.</p>
        <div class="col-span-1">
          <div class="flex">
            <button class="my-5 request-btn">Request now</button>
          </div>
        </div>
      </div>
      

    </div>
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="items-center container-fluid"
    >
      <div>
        <div :class="'main-img' + (loaded ? ' show' : '')">
          <img src="../../assets/img/oscar/oscar image X2-min.png" style="max-width: 213%; width: 213%;"/>
        </div>
        <div :class="'oscar1-content' + (loaded ? ' show' : '')">
          <div :class="'oscar-texts'" >
            <div class="flex">
              <p class="text-white" style="font-size: 60px; line-height: 60px;">Oscar</p>
              <p class="text-white" style="font-size: 20px; padding-top: 5px">®</p>
            </div>
            <p class="text-white" style="font-size: 22px;">One Solution: Cross. Adjust. Restore.</p>
            <p class="text-white" style="font-size: 30px; line-height: 30px; position: relative;">The all-in-one solution to reach, cross and prepare lesions<span class="text-white" style="padding-top: 5px; font-size: 16px;position: absolute;bottom: 3px;left: 93px;">1</span></p>           
          </div>
          <button class="my-6 more-btn" @click="isShowModal = true"><b>Learn more</b></button>

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
    position: absolute; 
    left: 5%;
    right: 5%;
    bottom: 50px;
  }

  .oscar-input {
      width: 100%;
      border-color: #727272 !important;
      border: solid 1px;
      border-radius: 10px;
      height: 40px;     
      padding-left: 8px;
  } 
  .oscar-input::placeholder {
      color: #f37453;
  }
  .oscar-texts {
    
  }
  .more-btn {
    background-color: white;
    font-size: 16px;
    border-radius: 30px;
    color: #F25625;
    padding-top: 8px;
    width: 100%;
    padding-bottom: 8px;
  }
  .request-btn {
    background-color: #F25625; 
    font-size: 16px;
    border-radius: 30px;
    color: white;
    padding-top: 8px;
    width: 100%;
    padding-bottom: 8px;
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
  }
  .oscar-modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000000000;
  }
  .oscar-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 70px;
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
import logoSVG from '../../assets/img/header/logo.svg'
import cancelSVG from '../../assets/img/header/cancel.svg'
// var ScrollTrigger = null;
if (process.client) {
  var {ScrollTrigger} = require('gsap/ScrollTrigger');
  var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
export default {
  components: { 
    logoSVG,
    cancelSVG
  },

  data() {
    return {
      isShowModal: false,
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



