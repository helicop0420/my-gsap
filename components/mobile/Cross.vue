<template>
	<div id="cross-wrapper">
		
		<div class="cross-container">
			<div class="cross-right" style="width: 100%; position: relative;">
				<div class="fix-cross" style="position: relative; height: calc(100vh - 75px);">
					<div class="cross-body">
						<div class="cross-right-1 cross-right-item" style="position: relative;">
							<div class="cross-dilator">
								<div style="display: table;">
									<p class="text-white cross-header">Support Catheter + Dilator</p>
								</div>
								<img src="../../assets/img/cross/Lock grip 1.png" style="margin-top: 20vh;" />
							</div>
						</div>
	
						<div class="cross-right-2 cross-right-item" style="position: relative;">
							<div class="cross-support">
								<img src="../../assets/img/cross/Braided support Cath X2.png" style="position: absolute; top: 50%;  transform: translate(63px, -50%); height: 80px;" />
							</div>
						</div>
	
						<div class="cross-right-3 cross-right-item flex items-center" style="background-color: #EF5923;">
							<div class="cross-support-2" style="height: 100%; position: relative;">
								<video id="cross-video" src="../../assets/video/cross-video.mp4" style="width;: 100%" muted="true"></video>
							</div>
						</div>
						<div class="cross-right-4 cross-right-item" style="position: relative;">
							<div style="height: 100vh; position: absolute; width: 100%; background-color: white;"></div>
							<div class="cross-curved" style="position: absolute; width: 100%;">
								<div class="flex justify-end items-center">
									<img src="../../assets/img/cross/curved.jpg" style="margin-right: -45vw; max-width: 146vw;"/>
								</div>
							</div>
						</div>
					</div>

					<div class="px-6 pt-6 pb-24 cross-right-footer" style="background-color: #FDF1E9; position: absolute; bottom: 0; left: 0; right: 0; height: 20vh;">
						<div class="right-1-footer">
							<p class="cross-content" style="font-weight: bold; color: #8d8a89;">Easy-to-use Lock Grip</p>
							<p style="font-size: 20px; line-height: 22px; color: #928e8d;">Seals and secures for accurate<br> positioning of Oscar Dilator,</p>
							<p style="font-size: 20px; line-height: 22px; color: #928e8d;">Oscar PTA Ballon or guide wire.</p>
						</div>
						<div class="right-2-footer">
							<p class="text-white cross-content" style="font-weight: bold;  color: #F68C6F;">Cross</p>
							<p class="text-white" style="font-weight: bold; font-size: 20px; line-height: 22px; color: #807e7d;">Braided Support Catheter and <br> Extendable Dilator</p>
							<p class="text-white" style="font-size: 20px;line-height: 22px; color: #7e7c7b;">Position 0:</p>
							<p class="text-white" style="font-size: 20px;line-height: 22px; color: #7e7c7b;">Strongest support level</p>
						</div>
						<div class="right-3-footer">
							<p class="text-white cross-content" style="font-weight: bold;  color: #F68C6F;">Cross</p>
							<p class="text-white" style="font-weight: bold; font-size: 20px; line-height: 22px; color: #807e7d;">Braided Support Catheter and <br> Extendable Dilator</p>
							<p class="text-white" style="font-size: 20px;line-height: 22px; color: #7e7c7b;">Position Contrast: Slightly extended</p>
							<p class="text-white" style="font-size: 20px;line-height: 22px; color: #7e7c7b;">dilator tip allows local contrast injection</p>
						</div>
						<div class="right-4-footer">
							<p class="cross-content" style="font-weight: bold;  color: #F68C6F;">Cross</p>
							<p class="font-grey" style="font-weight: bold; font-size: 20px; line-height: 22px;">Extended Dilator</p>
							<p class="font-grey" style="font-size: 20px;line-height: 22px;">Position Max Flex: Most flexible support</p>
							<p class="font-grey" style="font-size: 20px;line-height: 22px;">level with fully extended dilator°</p>
							<p class="font-grey" style="font-size: 20px;line-height: 22px; text-align: right;">
								°Dilator extends from 0-191 mm
							</p>
						</div>
					</div>
				</div>

				

				<div class="cross-right-5 p-4 color-gray">
					<p class="font-orange" style="font-size: 30px; border-top: 2px solid #ED6C23; display: table; line-height: 34px; width: 100%;"><b>Achieve the pushability of an</b></p>
					<p class="font-orange" style="font-size: 30px; line-height: 34px; width: 100%;"><b>0.035" system on an 0.018" <br> platform*</b></p>
					<div style="margin-top: 40px;">
						<p style="border-bottom: 2px solid grey; font-size: 24px; font-weight: bold; padding-bottom: 14px;">Oscar Variale Pushability</p>
						<div class="col-span-2" style="padding-top: 30px; position: relative;">
							<div id="crossLottie" class="lottie-wrapper" ref="crossChart" style="width: 100%; position: relative; margin-left: -35px;">
							</div>
							<img src="../../assets/img/Scale.png" style="position: absolute; left: 0; right: 0; bottom: -100px;"/>
						</div>
						<div class="grid grid-cols-1 gap-4 pr-4">
							<div class="col-span-1">
								<div class="color-gray" style="margin-top: 100px;">
									<div class="flex">
										<div style="width: 20px; height: 20px; background-color:#F04E23; margin-right: 10px;"></div>
										<p>Position 0</p>
									</div>
									<div class="flex">
										<div style="width: 20px; height: 20px; background-color:#F58B6E; margin-right: 10px;"></div>
										<p>180 mm</p>
									</div>
								</div>
							</div>
							
						</div>
						<p class="color-gray mt-3">*Testing performed with Oscar 0.018/6F <br> Support Catheter + Dilator combination</p>
					</div>
				</div>

			</div>
		
		</div>
	</div>
</template>
  
<style scoped>
	.cross-dilator {
		position: absolute;
		top: 100vh;
	}
	.color-gray {
		color: #6E6E6E;
	}
	.cross-right-item {
		height: calc(100vh - 75px);	
	}
	.cross-left {
		position: relative;
		height: 100vh;
	}
	.cross-section1 {
		position: fixed;
		top: 100vh;
		height: 140vh;
		z-index: 200;
		left: 0;
		right: 60%;
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
	.cross-content {
		color: white;
		font-size: 25px;
		line-height: 25px;
		margin-bottom: 3px;
	}
	
	.cross-header {
		border: solid 2px; 
		border-width: 2px 0 0 0; 
		padding-right: 100px; 
		font-size: 19px;
		margin-left: 30px;
		margin-top: 50px;
	}
	.cross-container {
		position: relative;
	}

	.cross-right-1 {
		background-color: #EF5923; 
		position: relative;
	}
	.cross-right-2 {
		background-color: #EF5923;
	}
	.cross-right-3 {
		background-color: #ED6C23;
	}
	.cross-right-4 {
		background-color: white;
	}
	.cross-right-5 {
		background-color: white;
		padding-top: 100px;
	}

	.right-2-footer, .right-3-footer, .right-4-footer {
		opacity: 0;
		position: absolute;
	}

	.right-4-footer {
		left: 1.5rem;
    	right: 1.5rem;
	}

	.right-1-footer {
		position: absolute;
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
		let playhead = {frame: 0}
		const animation3 = lottie.loadAnimation({
			container: gsap.utils.toArray("#crossLottie")[0],
			renderer: "svg",
			loop: false,
			autoplay: false,
			path: 'https://assets7.lottiefiles.com/packages/lf20_Vy0ZaXDB1V.json'
		});


		// gsap.timeline({
		// 	scrollTrigger: {
		// 	trigger: '.cross-right-1',
		// 	start: 'top top',
		// 	scrub: true,
		// 	end: "+=3000",
		// 	pin: true,
		// 	// ease: gsap.Power3.easeOut
		// 	}
		// })
		// .add('move')
  		// .to(".cross-dilator", { top: 0, duration: 6}, "move")


		let corssVideo = document.getElementById('cross-video')
	
		gsap.timeline({
			scrollTrigger: {
				trigger: '.fix-cross',
				start: 'bottom bottom',
				end: '+=3800',
				scrub: true,
				pin: true
			}
		})
		.to(".cross-dilator", { top: 0, duration: 6})
		.add('cross-first')
		.to('.cross-body', {y: '-100vh', duration: 2, ease: "power2.in"}, 'cross-first')
		.to('.right-1-footer', {opacity:0, duration: 2}, 'cross-first')
		.to('.right-2-footer', {opacity: 1, duration: 2}, 'cross-first')
		.add('cross-second')
		.to('.cross-body', {y: '-170vh', duration: 2, ease: "power2.in", onComplete: function(){
			corssVideo.muted = true;
			corssVideo.play()
		} }, 'cross-second')
		.to('.right-2-footer', {opacity:0, duration: 2}, 'cross-second')
		.to('.right-3-footer', {opacity: 1, duration: 2}, 'cross-second')
		.add('cross-third')
		.to('.cross-body', {y: '-300vh', duration: 2, ease: "power2.in"}, 'cross-third')
		.to('.right-3-footer', {opacity:0, duration: 2}, 'cross-third')
		.to('.right-4-footer', {opacity: 1, duration: 2}, 'cross-third')
		.to('.cross-right-footer', {backgroundColor: 'white'}, 'cross-third')

		gsap.timeline({
			scrollTrigger: {
				trigger: '.cross-right-5',
				start: 'top top',
				end: '+=3000',
				scrub: true,
				pin: true
			}
		})
		.to(playhead, {
			frame: 148,
			ease: "power2.in",
			duration: 3,
			onUpdate: (a,b,c) => {
				animation3.goToAndStop(playhead.frame, true)
			},
		})
    },
    
    watch: {
  
    },
    methods: {
     
     
    }
  
    
  };
  
  
  
</script>
  
  
  
  