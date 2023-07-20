<template>
	<div style="position: relative;" id="adjust-wrapper">
		<div class="pta-section">
				<div style="overflow: hidden;">
					<!-- <img class="img-adjust" src="../assets/img/adjust/standard_adjust.png" /> -->
					<div class="img-panel" id="img-panel">
						<div class="img-adjust" id="img-adjust">
							<img src="../assets/img/adjust/standard_desktop.png" style="position: absolute; width: 80vw; max-width: 86vw;" />
							<!-- <adjustSVG style="position: absolute; width: 100vw;"></adjustSVG> -->
						</div>
						<div class="img-restore" id="img-restore">
							<img src="../assets/img/adjust/restore_desktop.png" style="width: 80vw; max-width: 86vw;" />
							<!-- <restoreSVG></restoreSVG> -->
						</div>
						<div class="img-bounder" id="img-bounder">
							<img src="../assets/img/adjust/Slider.png" alt="" class="img-slider" id="img-slider">
						</div>
					</div>
				</div>
				<div class="pta-text">
					<p class="pta-text-1">Customize your angioplasty to accurately <br> match the ballon length to lesion length</p>
					<p class="pta-text-2">The unique solution allows in-vessel adjustments of <br> the ballon length from 20 to 180 mm, designed to <br> dialte various lesion lengths or focal residual stenosis <br> with the same balloon</p>
				</div>
		</div>
		<div class="metal-section-temp">
		</div>
		<div class="metal-section">
			<img class="img-ballon" src="../assets/img/adjust/ballon.png" />
			<div class="first-marker">
				<div class="first-marker-arrow"></div>
				<p class="first-marker-title">Proximal marker</p>
				<div class="first-marker-content flex" style="align-items: end;">
					Metal ring on support<br/>
					catheter aids visualization<br/>
					ad resists tip deformation<p style="font-size: 13px; margin-bottom: 8px;">2</p>
				</div>
			</div>
			<div class="second-marker">
				<div class="second-marker-arrow"></div>
				<div class="second-marker-title" style="margin-right: 71px;">Balloon markers</div>
				<div class="second-marker-content flex" style="align-items: end;">
					Markers on distal balloon shoulder<br/>
					and every 60 mm* aid accurate<br/>
					balloon-to-lesion measurement<p style="font-size: 13px; margin-bottom: 8px; margin-left: -26px;">2</p>
				</div>
			</div>
			<div class="third-marker">
				<p>*Balloon 7 mm has 2 markers, one distal and one at 50 mm</p>
			</div>
			<div id="adjust-content" class="adjust-content">

			</div>
		</div>
	</div>
</template>

<style scoped>
	.pta-section {
		top: 0;
		left: 0;
		right: 0;
		z-index: 5;
		position: absolute;
		height: 100vh;
		width: 100vw;
		background-color: black;
	}
	.img-panel {
		position: absolute;
		z-index: 20;
		top: 8vw;
		left: 0;
		right: 0;		
	}

	.img-adjust {
		position: absolute;
		z-index: 10;
		left: 10%;
		right: 10%;
		overflow: hidden;
		height: 130vh;
	}
	.img-restore {
		position: absolute;
		z-index: 9;
		left: 10%;
		right: 10%;
		height: 130vh;
	}
	.img-slider {
		position: absolute;
		z-index: 11;
		right: 0;
		top: 0;
		height: 40.8vw;
		cursor: pointer;
	}
	.img-stick {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 14vw;
		z-index: 100;
	}

	.pta-text {
		z-index: 10;
		left: 10vw;
		position: absolute;
		color: white;
		width: 50vw;
		bottom: 12vh;
		opacity: 0;
	}
	.pta-text-1 {
		font-size: 46px;
		line-height: 48px;
		margin-bottom: 20px;
	}

	.pta-text-2 {
		font-size: 37px;
		line-height: 40px;
	}

	.metal-section-temp {
		background-color: rgb(244, 101, 38);
		height: 100vh;
	}

	.metal-section {
		background-color: rgb(244, 101, 38);
		height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.img-ballon {
		position: absolute;
		top: 50%;
		height: 67vw;
		max-width: 400vw;
		width: 400vw;
		transform: translateY(-50%);
		z-index: 30;
	}

	.first-marker {
		position: absolute;
		color: white;
		opacity: 0;
		top: 55%;
		left: 13vw;
		z-index: 25;
	}

	.first-marker-arrow {
		width: 123px;
		height: 123px;
		border-right: 1px solid white;
		border-bottom: 1px solid white;
	}

	.first-marker-title {
		font-size: 30px;
	}
	.first-marker-content {
		font-size: 20px;
	}

	.second-marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		color: white;
		opacity: 0;
		top: 55%;
		right: 10vw;
		z-index: 100;
	}
	.second-marker-arrow {
		width: 40vw;
		height: 8vw;
		border-bottom: 1px solid white;
		border-left: 1px solid white;
	}

	.second-marker-title {
		font-size: 30px;
	}
	.second-marker-content {
		font-size: 20px;
	}

	.third-marker {
		position: absolute;
		left: 0;
		bottom: 40px;
		font-size: 14px;
		color: white;
		opacity: 0;
	}

	.adjust-content {
		position: absolute;
		opacity: 0;
		bottom: 0;
		color: white;
		z-index: 20;
	}
	.third-marker-content {
		text-align: right;
		font-size: 20px;
	}

	.img-bounder {
		height: 100px;
		margin-left: 14%;
		width: 73.5%;
		position: relative;
	}
	
</style>

<script>
import gsap from 'gsap'
import lottie from 'lottie-web'
import adjustSVG from '../assets/img/adjust/standard_adjust.svg'
import restoreSVG from '../assets/img/adjust/restore_adjust.svg'
// var ScrollTrigger = null;
if (process.client) {
	var {ScrollTrigger} = require('gsap/ScrollTrigger');
	var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
	var {Draggable} = require('gsap/Draggable')
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	gsap.registerPlugin(Draggable)
}
export default {
	components: { adjustSVG, restoreSVG },

	data() {
		return {
			scrolling : {
				enabled: true,
				events: "scroll,wheel,touchmove,pointermove".split(","),
				prevent: e => e.preventDefault(),			
			},
			
		};
	},
	computed:{
		isNavClicked(){
			return this.$store.state.isNavClicked
		},
	},
	mounted() {       
		let playhead = {frame: 0}
		let playhead1 = {frame: 0}
		const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#adjust-content")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets1.lottiefiles.com/packages/lf20_2xrsDhrCLE.json'
            });  

		const section = gsap.utils.toArray('#adjust-wrapper')[0]
		ScrollTrigger.create({
			trigger: section,
			start: "top bottom-=1",
			end: "bottom top+=1",
			onEnter: () => this.goToSection(section),
			onEnterBack: () => this.goToSection(section)
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.pta-section',
				start: 'top top',
				end: '+=4000',
				scrub: 0.2,
				pin: true
			}
		})
		.add('image-up')
		.to(".img-panel", {top: '-22vw', duration: 2}, "image-up")
		.to(".pta-text", {opacity: 1, duration: 2}, "image-up")
		.to(".pta-section", {top: '-100vh', opacity: 0, delay:2, duration: 10})

		gsap.timeline({
			scrollTrigger: {
				trigger: '.metal-section',
				start: 'top top',
				end: '+=11000',
				scrub: true,
				pin: true,
			}
		})
		.to(".first-marker", {opacity:1, duration: 5, delay: 30})
		.add("ballon-move-1")
		.to(".first-marker", {x: '-250vw', duration: 16, delay: 20}, "ballon-move-1")
		.to(".img-ballon", {x: '-250vw', duration: 16, delay: 20}, "ballon-move-1")
		.add("text-show")
		.to(".second-marker", {opacity: 1, duration: 5}, "text-show")
		.to(".third-marker", {opacity: 1, left: '2vw', duration: 5}, "text-show")
		.add("ballon-move-2")
		.to(".second-marker", {x: '150px', opacity:0, duration: 6, delay: 10}, "ballonmove-2")
		.to(".third-marker", {opacity:0, left: 0,  duration: 6, delay: 10}, "ballonmove-2")
		.to(".img-ballon", {top: '20%', width: '115vw', height: '16vw', duration: 6, x: 0, delay:10, opacity: 1}, "ballonmove-2")
		.to(".adjust-content", {opacity:1, duration: 3, onComplete: ()=> {
			animation3.play()
		}})

		Draggable.create('#img-slider', {
			type: 'x',
			bounds: document.getElementById('img-bounder'),
			onDrag () {
				let style =  window.getComputedStyle(document.getElementById('img-slider'));
				var transformX = new WebKitCSSMatrix(style.transform).m41;
				var parentW = document.getElementById('img-adjust').parentElement.clientWidth
				document.getElementById('img-adjust').style.right = `${0.13*parentW-transformX}px`
				
			}
		})
	},
	methods: {
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