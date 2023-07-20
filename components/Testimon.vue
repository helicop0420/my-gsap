<template>
	<div class="testimon-wrapper" id="test-wrapper">
		<h1>Take their word for it</h1>
		<div class="testimon-video">
			<iframe id="main-video"  src="https://www.youtube.com/embed/0MqLI3B4fs4" style="max-height: 68vh; height: 68vh; width: 100%;" controls></iframe>
		</div>
		<div class="flex justify-between align-center" style="margin-top: 10px;">
			<p class="testimon-subtitle">PHYSICIAN TESTIMONIAL</p>
			<p class="testimon-date">01/08/23</p>
		</div>
		<p class="testimon-content">How does Oscar change the way to approach your procedures?</p>
		<div class="carousel-section">
			<agile :options="options">
					<div class="slide-item">
						<div class="slide" @click="(e)=>onClickVideo(e, 0)">
								<iframe style="pointer-events:none !important; width: 100%;" class="carousel-video" src="https://www.youtube.com/embed/0MqLI3B4fs4" ></iframe>
								<div class="playing-mask" v-if="videoNo == 0">
								<div>
									<div style="display: flex; justify-content: center; height: 100px;"><triangleSVG></triangleSVG></div>
									<p style="color: #F04E23;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3">How does Oscar change the way to approach your procedures?</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
					<div class="slide-item">
						<div class="slide" @click="(e)=>onClickVideo(e, 1)">
							<iframe style="pointer-events:none !important; width: 100%;" class="carousel-video" src="https://www.youtube.com/embed/0MqLI3B4fs4" ></iframe>
							<div class="playing-mask" v-if="videoNo == 1">
								<div>
									<div style="display: flex; justify-content: center; height: 100px;"><triangleSVG></triangleSVG></div>
									<p style="color: #F04E23;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
					<div class="slide-item">
						<div class="slide" @click="(e)=>onClickVideo(e, 2)">
							<div id="player"></div>
							<iframe style="pointer-events:none !important; width: 100%;" class="carousel-video" src="https://www.youtube.com/embed/0MqLI3B4fs4" ></iframe>
							<div class="playing-mask" v-if="videoNo == 2">
								<div>
									<div style="display: flex; justify-content: center; height: 100px;"><triangleSVG></triangleSVG></div>
									<p style="color: #F04E23;">NOW PLAYING</p>
								</div>
							</div>
						</div>
						<p class="mt-3">Proin mattis dolor enim, eget bibendum est feugiat non.</p>
						<div class="flex mt-2" style="color: #7C8082">
							<p class="mr-3">4:32</p>
							<p>01/08/23</p>
						</div>
					</div>
			</agile>
		</div>
	</div>
</template>
  
<style scoped>
.testimon-wrapper {
	background-color: black;
	color: white;
	padding-left: 10vw;
	padding-right: 10vw;
	padding-top: 80px;
	padding-bottom: 120px;
}

.carousel-video {
	cursor: pointer;
	height: 200px;
	pointer-events:none !important;
}

.carousel-section {
	margin-top: 80px;
	padding-top: 70px;
	padding-bottom: 70px;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
}

.testimon-wrapper h1 {
	font-size: 70px;
	margin-top: 20px;
}
.testimon-video {
	flex-grow: 1;
}
.testimon-date {
	color: white;
	font-size: 16px;
}
.testimon-content {
	font-size: 40px;
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
	height: 200px;
	position: relative;
}
.playing-mask {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute; 
	left: 0; 
	top: 0; 
	height: 200px;
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
	import triangleSVG from '../assets/img/triangle.svg'
  // var ScrollTrigger = null;
  if (process.client) {
    var {ScrollTrigger} = require('gsap/ScrollTrigger');
    var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }
  export default {
    components: {
        'triangleSVG': triangleSVG,
    },
  
    data() {
      return {
		scrolling : {
			enabled: true,
			events: "scroll,wheel,touchmove,pointermove".split(","),
			prevent: e => e.preventDefault(),			
		},
		options: {
			// infinite: true,
			slidesToShow: 3,
			dots: false,
			centerMode: false
		},
		videoNo: 0
      };
    },
	computed:{
		isNavClicked(){
			return this.$store.state.isNavClicked
		},
	},
    mounted() {			
		const section = gsap.utils.toArray('#test-wrapper')[0]
			ScrollTrigger.create({
				trigger: section,
				start: "top bottom-=1",
				end: "bottom top+=1",
				onEnter: () => this.goToSection(section),
				onEnterBack: () => this.goToSection(section)
			});
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

		goToSection(section, anim, i) {
			if (this.scrolling.enabled && !this.isNavClicked) { // skip if a scroll tween is in progress
				this.disable();
				gsap.to(window, {
					scrollTo: {y: section, autoKill: false},
					onComplete: this.enable,
					duration: 1
				});

				// anim && anim.restart();
			}
		},
		disable() {
			if (this.scrolling.enabled) {
				this.scrolling.enabled = false;
				window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
				this.scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, this.scrolling.prevent, {passive: false}));
			}
		},
		enable() {
			if (!this.scrolling.enabled) {
				this.scrolling.enabled = true;
				window.removeEventListener("scroll", gsap.ticker.tick);
				this.scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, this.scrolling.prevent));
			}
		}
	}
  };
  
  
  
</script>
  
  
  
  