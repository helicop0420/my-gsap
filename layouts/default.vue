<template>
  <div>
    <!-- <div id="loading-scene" class="loading-scene">
      <img src="../assets/img/loading.gif" />
    </div> -->
    <div class="cross-section1" id="cross-section1">
      <img src="../assets/img/cross/Lock_grip_2_new.png" id="verticalBiotronik" class="cross-left-dilator-body"/>
      <img src="../assets/img/cross/Dilator.png" class="cross-left-dilator"/>
    </div>
    <the-header />
    <!-- <as-scroll> -->
      <div class="leading-normal tracking-normal text-black gradient">
        <div style="min-height: 100vh">
          <nuxt />
        </div>
        <!-- <the-footer /> -->
      </div>
    <!-- </as-scroll> -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ASScroll from '~/components/ASScroll.vue';



export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter,
    'as-scroll': ASScroll
  },
}

</script>

<style>
.loading-scene {
  position: fixed;
  z-index: 100000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-scene img {
  width: 200px;
}


html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'DINPro' !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.font-orange {
  color: #F25625; 
}
.font-grey {
  color: #6E6E6E;
}
.font-bold {
  font-weight: bold;;
}

.cross-section1 {
		position: fixed;
		top: 0;
		height: 140vh;
		z-index: 200;
		left: 0;
		right: 60%;
    opacity: 0;
}

.cross-left-dilator-body {
  height: 140vh;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 200;
  transform: translateX(-50%);
}
.cross-left-dilator {
  position: absolute;
  z-index: 100;
  bottom: -120px;
  height: 36vh;
  left: 50%;
  transform: translateX(-50%);
}
</style>
