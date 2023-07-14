<template>
    <div id="contactus-wrapper" class="contact-wrapper pb-5">
      <div v-if="loading" class="loading-page">
        <div class="loading"></div>
      </div>
      <div
        class="mx-auto items-center container-fluid"
      >
        <div>
          <div class="contact-form">
            <p class="mb-4" style="font-size: 30px; color: white;">Contact</p>
            <div class="grid grid-cols-1 gap-4">
                <div class="flex">
                  <input class="oscar-input" placeholder="Job Title"/>
                </div>
                <div class="flex">
                  <input class="oscar-input" placeholder="First Name*"/>
                </div>
                <div class="flex">
                  <input class="oscar-input" placeholder="Last Name*"/>
                </div>
                <div class="flex">
                  <input class="oscar-input" placeholder="Email Address*"/>
                </div>
                <div class="flex">
                  <input class="oscar-input" placeholder="Telephone"/>
                </div>
                <div class="flex">
                  <input class="oscar-input" placeholder="Institution*"/>
                </div>
                <div class="flex">
                    <select class="oscar-input">
                    </select>
                </div>
                <div class="col-span-1">
                  <textarea style="min-height: 100px; padding-top: 5px;" class="oscar-input" placeholder="Message*"></textarea>
                </div>
            </div>
            <div class="mb-2" style="color: white;">
                <input type="checkbox" /> <span>I agree to be contracted by a BIOTRONIK representative</span>
            </div>
            <div class="mb-4" style="color: white;">
                <input type="checkbox" /> <span>I agree to receive marketing content and product updates by e-mail</span>
            </div>
            <p style="color: white;" class="mb-4">Your information will be processed in accordance with our <u>privacy statement</u>. Please note that you can withdraw your consent at any 
            time by sending a message to to marketing.vi@biotronik.com or by using the unsubscribe option in our e-mails</p>
            <div class="grid grid-cols-1 gap-4 mb-4">
                <button class="request-btn col-span-1">Submit</button>
            </div>   
            <div class="mt-10">
              <p style="color: white;font-size: 10px;">1. per IFU: Indicated for percutaneous transluminal interventions in the peripheral 
              vasculature to provide support during access into and to dilate stenoses in femoral, 
              popliteal and infrapopliteal arteries. The product is also intended for injection of radiopaque 
              contrast media for the purpose of angiography: 2. BIOTRONIK data on file; 
              3. The real-world user evaluation assessed Oscar's acceptance in the US market 
              and is referred to as Evaluation of Market Acceptance (EMA), BIOTRONIK date on file; 
              4. BIOTRONIK date on file, testing performed with Oscar 0.018/6F Support Catheter + Dilator combination. 
              Oscar and Passeo are trademarks or registered trademarks of the BIOTRONIK Group of Companies. 
              All other trademarks or registered trademarks are the property of their respective owners.</p>
            </div>         
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .request-btn {
      background-color: white; 
      font-size: 23px; 
      border-radius: 30px;
      color: #F25625;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      transition: all .1s;
    }
    .request-btn:hover {
        margin-top: -3px;
        box-shadow: 1px 1px 1px 1px #00000099;
    }
    .oscar-input {
      width: 100%;
      border-color: #727272 !important;
      border: solid 1px;
      border-radius: 10px;
      height: 33px;     
      padding-left: 8px;
    } 
    .oscar-input::placeholder {
        color: #f37453;
    }

    .main-img {
        position: absolute;
    }
    .contact-wrapper {
      padding-top: 30px;
      background: linear-gradient(to right, #EF5923, #ec6926, #EF5923);
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
  
  
  
  