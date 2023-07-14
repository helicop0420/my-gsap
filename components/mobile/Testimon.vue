<template>
	<div class="testimon-wrapper" id="test-wrapper">
		<h1>Take their word for it</h1>
		<div class="testimon-video">
			<iframe id="main-video"  src="https://www.youtube.com/embed/0MqLI3B4fs4" style="max-height: 36vh; height: 36vh; width: 100%;" controls></iframe>
		</div>
		<div style="padding-left: 5%; padding-right: 5%;">
			<div class="flex justify-between align-center" style="margin-top: 10px;">
        <p class="testimon-subtitle">PHYSICIAN TESTIMONIAL</p>
        <p class="testimon-date">01/08/23</p>
      </div>
			<p class="testimon-content">How does Oscar change the way to approach your procedures?</p>
		</div>
		<div class="carousel-section">
			<agile :options="options">
					<div class="slide-item">
						<div class="slide" @click="(e)=>onClickVideo(e, 0)">
								<iframe style="pointer-events:none !important; width: 100%;" class="carousel-video" src="https://www.youtube.com/embed/0MqLI3B4fs4" ></iframe>
								<div class="playing-mask" v-if="videoNo == 0">
								<div>
									<div style="display: flex; justify-content: center; height: 40px;"><triangleSVG style="height: 100%;"></triangleSVG></div>
									<p style="color: #F04E23; font-size: 12px;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3" style="line-height: 17px; height: 60px;">How does Oscar change the way to approach your procedures?</p>
					</div>
					<div class="slide-item">
						<div class="slide" @click="(e)=>onClickVideo(e, 1)">
							<iframe style="pointer-events:none !important; width: 100%;" class="carousel-video" src="https://www.youtube.com/embed/0MqLI3B4fs4" ></iframe>
							<div class="playing-mask" v-if="videoNo == 1">
								<div>
									<div style="display: flex; justify-content: center; height: 40px;"><triangleSVG style="height: 100%;"></triangleSVG></div>
									<p style="color: #F04E23; font-size: 12px;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3" style="line-height: 17px; height: 60px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
					<div class="slide-item">
						<div class="slide" @click="(e)=>onClickVideo(e, 2)">
							<iframe style="pointer-events:none !important; width: 100%;" class="carousel-video" src="https://www.youtube.com/embed/0MqLI3B4fs4" ></iframe>
							<div class="playing-mask" v-if="videoNo == 2">
								<div>
									<div style="display: flex; justify-content: center; height: 40px;"><triangleSVG style="height: 100%;"></triangleSVG></div>
									<p style="color: #F04E23; font-size: 12px;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3" style="line-height: 17px; height: 60px;">Proin mattis dolor enim, eget bibendum est feugiat non.</p>
					</div>
			</agile>
		</div>
	</div>
</template>
  
<style scoped>
.testimon-wrapper {
	background-color: black;
	color: white;
	padding-top: 30px;
	padding-bottom: 50px;
}

.carousel-video {
	cursor: pointer;
	height: 100px;
}

.carousel-section {
	margin-top: 30px;
	padding-top: 20px;
	padding-bottom: 20px;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
	margin-left: 5%;
	width: 90%;
}

.testimon-wrapper h1 {
	font-size: 38px;
	margin-top: 20px;
	margin-left: 5%;
}
.testimon-video {
	flex-grow: 1;
}
.testimon-content {
	font-size: 24px;
	line-height: 26px;
}
.testimon-subtitle {
	color: #EF5923;
}
.slide-item {
	padding: 10px;
	color: white;
}
.slide {
	background-color: black;
	height: 100px;
	position: relative;
}
.playing-mask {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute; 
	left: 0; 
	top: 0; 
	height: 100px;
	background-color: white;
	opacity: 0.9;
	width: 100%;
	font-size: 23px;
	font-weight: bold;
}

  .agile {
    position: relative;
  }

  .agile--ssr .agile__slides--cloned {
    display: none
  }

  .agile--ssr .agile__slides > * {
    overflow: hidden;
    width: 0
  }

  .agile--ssr .agile__slides > *:first-child {
    width: 100%
  }

  .agile--rtl .agile__track,
  .agile--rtl .agile__slides,
  .agile--rtl .agile__actions,
  .agile--rtl .agile__dots {
    flex-direction: row-reverse;
  }

  .agile:focus, .agile:active, .agile *:focus, .agile *:active {
    outline: none;
  }

  .agile__list {
    display: block;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .agile__track {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .agile__actions {
    display: flex;
    justify-content: space-between;
  }

  .agile--no-nav-buttons .agile__actions {
    justify-content: center;
  }

  .agile__slides {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: unset;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .agile--disabled .agile__slides {
    display: block;
    width: 100%;
  }

  .agile__slide {
    display: block;
    flex-grow: 1;
    flex-shrink: 0;
  }

  .agile__slide,
  .agile__slide * {
    -webkit-user-drag: none;
  }

  .agile--fade .agile__slide {
    opacity: 0;
    position: relative;
    z-index: 0;
  }

  .agile--fade .agile__slide--active {
    opacity: 1;
    z-index: 2;
  }

  .agile--fade .agile__slide--expiring {
    opacity: 1;
    transition-duration: 0s;
    z-index: 1;
  }

  .agile__nav-button[disabled] {
    cursor: default;
  }

  .agile__dots {
    align-items: center;
    display: flex;
    list-style: none;
    padding: 0;
    white-space: nowrap;
  }

  .agile__dot button {
    cursor: pointer;
    display: block;
    font-size: 0;
    line-height: 0;
  }
</style>
  
<script>
  import gsap from 'gsap'
  import lottie from 'lottie-web'
	import triangleSVG from '../../assets/img/triangle.svg'
  // var ScrollTrigger = null;
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    components: {
        'triangleSVG': triangleSVG
    },
  
    data() {
      return {
				options: {
					// infinite: true,
					slidesToShow: 2,
					dots: false,
					centerMode: false
				},
				videoNo: 0
      };
    },
    mounted() {			
			
		},

		methods: {
			onClickVideo(e, no) {
        e.preventDefault()
        e.stopPropagation()
        let url = document.getElementsByClassName('carousel-video')[no].src
        console.log(url)

        let mainVideo = document.getElementById('main-video')
        mainVideo.src = url;
        // mainVideo.load();
        this.videoNo = no;
      },
		}
  };
  
  
  
</script>
  
  
  
  