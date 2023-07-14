<template>
  <div>
    <div v-if="loading" class="loading-page">
      <div class="loading"></div>
    </div>
    <div
      class="mx-auto items-center"
    >
      <div>
        <img src="../assets/img/oscar/oscar image X2-min.png" />
      </div>
    </div>
  </div>
</template>

<style>
  
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
import oscarImg from "~/assets/img/oscar/oscar image X2-min.png";
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
     
      loading: true
    };
  },
  mounted() {
  
  },
  
  watch: {

  },
  methods: {

  }

  
};



</script>



