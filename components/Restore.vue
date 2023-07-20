<template>
	<div>

	
	<div class="restore-wrapper" id="restore-wrapper">
		<div class="world-section" id="world-section">
			<h1>A Real-World User Evaluation </h1>
			<div class="grid grid-cols-2 gap-4 align-stretch">
				<div class="world-item world-left col-span-1">
					<h2 style="display: flex;">Real-World User Evaluation<p style="margin-top: 2px; font-size: 21px;">3</p></h2>
					<div class="world-content">
						<div class="world-content-left flex align-center gap-3">
							<img class="world-left-image" src="../assets/img/restore/Icon_1.png"/>
							<div>
								<p><span class="color-orange">Oscar</span> was evaluated in very complex lesions:</p>
								<ul>
									<li>80% CLI patients</li>
									<li>74% severe or moderate lesion calcification</li>
									<li>53% of lesions were occlusions</li>
									<li>Average lesion length of 151mm</li>
								</ul>
							</div>
						</div>
						<div class="world-content-left flex align-center gap-3">
							<img class="world-left-image" src="../assets/img/restore/Icon_2.png"/>
							<div>
								<p><span class="color-orange">Oscar</span> use was evaluated:</p>
								<ul>
									<li>In 12 different hospitals across the US</li>
									<li>By 15 physicians; 7 interventional cardiologists, 5 interventional radiologists and 3 vascular surgeons</li>
								</ul>
							</div>
						</div>
						<div class="world-content-left flex align-center gap-3">
							<img class="world-left-image" src="../assets/img/restore/Icon_3.png"/>
							<div>
								<p><span class="color-orange">Oscar</span> in numbers:</p>
								<ul>
									<li>Was used in 78 cases</li>
									<li>A total of 91 kits were used</li>
									<li>51 4F/0.014" and 40 6F/0.018" kits</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="world-item world-right col-span-1">
					<h2 style="display: flex;">Oscar User Evaluation<p style="margin-top: 2px; font-size: 21px;">3</p></h2>
					<div class="world-content">
						<div class="grid gap-16 grid-cols-2">
							<div class="col-span-1 text-center">
								<div id="restore1" class="lottie-wrapper2" ref="restore1" style=""></div>
								<p>Crossing success</p>
							</div>
							<div class="col-span-1 text-center">
								<div id="restore2" class="lottie-wrapper2" ref="restore2" style=""></div>
								<p>PTA technical success</p>
							</div>
							<div class="col-span-1 text-center">
								<div id="restore3" class="lottie-wrapper2" ref="restore3" style=""></div>
								<p>Improved procedural<br>efficiency</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="achieve-section" id="achieve-section">
			<h1>Achieve the pushability of an 0.035" system on an 0.018" platform</h1>
			<div class="grid grid-cols-4 gap-4 mb-12">
				<div class="col-span-2">
					<div class="achieve-title flex"><span class="color-orange" style="margin-right: 5px;">Oscar</span> pushability on the bench<p style="margin-top: 0px; font-size: 16px;">4</p></div>
					<div class="grid grid-cols-3 gap-3">
						<div class="col-span-1 pt-6">
								<p class="color-orange mb-3"><b>Oscar, 0.018"</b><br>BITRONIK</p>
								<p class="color-gray"><b>NaviCross, 0.035"</b><br>Terumo</p>
								<div class="color-gray" style="margin-top: 50px;">
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
						<div class="col-span-2" style="padding-top: 30px;">
							<div id="restoreLottie6" class="lottie-wrapper" ref="restoreChart6" style="width: 100%; position: relative;">
								<img src="../assets/img/Scale.png" style="position: absolute; left: 40px; right: 0; bottom: -50px;"/>
							</div>
						</div>
					</div>
				</div>
				<div class="col-span-1" style="padding-left: 20%;">
					<div id="restoreLottie7" class="lottie-wrapper" ref="restoreChart7" style="width: 100%;"></div>
					<p style="text-align: center;">more pushability<br> vs Terumo<br> NaviCross 0.035"</p>
				</div>				
			</div>
			<div class="grid grid-cols-4 gap-4">
				<div class="col-span-2">
					<p class="achieve-title"><span class="color-orange">Oscar</span> user evaluation </p>
					<p>Physicians rated <span class="color-orange">Oscar</span> 0.018" Support Catheter and Dilator combination 91.7% much better/better or equal in crossing performance when compared to the Terumo NaviCross 0.035" crossing catheter</p>
				</div>
				<div class="col-span-1" style="padding-left: 20%;">
					<div id="restoreLottie8" class="lottie-wrapper" ref="restoreChart8" style="width: 100%;"></div>
					<p style="text-align: center;">much better, better or equal<br>crossing performance vs<br>Terumo NaviCross 0.035"</p>
				</div>
			</div>
			

		</div>
	</div>
	<div id="meet-section" class="meet-section">
		<img src="../assets/img/restore/left-balloon.png" alt="" class="meet-left" />
		<div class="meet-right">
			<h1>Meet Oscar</h1>
			<p>
			The all-in-one solution to reach,<br/>
			cross and prepare lesions<sup style="font-size: 24px;">1</sup>
			</p>
			<div class="meet-solution">
				<img src="../assets/img/restore/solution.png" class="meet-solution-image"/>
				<div class="mask"></div>
				<button class="meet-button">Watch the video</button>
			</div>
			<button class="btn-brochure">View the brochure</button>
		</div>
	</div>
</div>
</template>
  
<style scoped>
	.restore-wrapper {
		background-color: #EF5923;
		padding-bottom: 15vh;
	}
	.world-section {
		padding-top: 15vh;
		width: 80vw;
		margin-left: 10vw;
		margin-bottom: 20px;
		opacity: 0;
	}
	.world-section>h1 {
		font-size: 50px;
		color: white;
		margin-bottom: 20px;
	}
	.achieve-section>h1 {
		font-size: 30px;
		color: #EF5923;
		margin-bottom: 20px;
	}
	.world-item {
		background-color: white;
		padding: 20px 40px 10px 20px !important;
	}
	.world-item>h2 {
		color: #EF5923;
		font-size: 30px;
		margin-bottom: 20px;
	}
	.color-orange {
		color: #EF5923;
		font-weight: bold;
	}
	.world-content {
		padding: 20px;
	}
	.world-content-left {
		margin-bottom: 20px;
	}
	.world-left-image {
		width: 104px;
		height: 104px;
		margin-right: 24px;
	}
	.world-content-left ul {
		list-style: disc;
		margin-left: 20px;
	}
	.achieve-section {
		background-color: white;
		width: 80vw;
		margin-left: 10vw;
		padding: 20px;
		opacity: 0.1;
	}
	.achieve-title {
		font-size: 20px;
		font-weight: bold;
		color: #6E6E6E;
	}
	.color-gray {
		color: #6E6E6E;
	}

	.meet-section {
		position: relative;
		background-color: #EF5923;
		height: 100vh;
		margin-top: 40px;
		padding-top: 80px;
	}
	.meet-left {
		position: absolute;
		left: -200px;
		top: -10%;
	}
	.meet-right {
		margin-left: 40%;
		color: white;
	}
	.meet-right h1 {
		font-size: 60px;
	}
	.meet-right> p {
		font-size: 40px;
		line-height: 40px;
	}
	.meet-solution {
		margin-top: 50px;
		margin-bottom: 50px;
		position: relative;
		width: 650px;
		height: 360px;
	}
	.meet-solution-image {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.mask {
		opacity: 0.5;
		background-color: white;
		width: 100%;
		height: 100%;
		z-index: 10;
	}

	.btn-brochure {
		background-color: white;
		padding: 10px 50px 10px 50px;
		border-radius: 25px;
		box-shadow: 1px 2px 3px 2px #1c1a1a91;
		color: #EF5923;
		position: relative;
		z-index: 30;
	}

	.meet-button {
		background-color: #F04E23;
		padding: 10px 20px 10px 20px;
		border-radius: 25px;
		box-shadow: 1px 2px 3px 2px #1c1a1a91;
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
		scrolling : {
			enabled: true,
			events: "scroll,wheel,touchmove,pointermove".split(","),
			prevent: e => e.preventDefault(),			
		}
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
			let playhead2 = {frame: 0}
			const selft = this;
			const {restore1, restore2, restore3, restoreChart6, restoreChart7, restoreChart8} = this.$refs;

			

			const animation1 = lottie.loadAnimation({
                container: gsap.utils.toArray("#restore1")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets4.lottiefiles.com/packages/lf20_wciY22iqor.json'
            });

			const animation2 = lottie.loadAnimation({
                container: gsap.utils.toArray("#restore2")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets2.lottiefiles.com/packages/lf20_dSaBZqLXsv.json'
            });
			
			const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#restore3")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets8.lottiefiles.com/packages/lf20_XYswRcqon7.json'
            });

			const animation4 = lottie.loadAnimation({
                container: gsap.utils.toArray("#restoreLottie6")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets4.lottiefiles.com/packages/lf20_aX96pVGsFP.json'
            });

			const animation5 = lottie.loadAnimation({
                container: gsap.utils.toArray("#restoreLottie7")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets3.lottiefiles.com/packages/lf20_xeSYcRENpQ.json'
            });

			const animation6 = lottie.loadAnimation({
                container: gsap.utils.toArray("#restoreLottie8")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets6.lottiefiles.com/packages/lf20_Giw8Yw7Niq.json'
            });

			gsap.timeline({
				scrollTrigger: {
					trigger: '.world-section',
					start: 'top top',
					end: '+=3000',
					scrub: true,
					pin: true
				}
			})
			.to(playhead, {
				frame: 58,
				ease: "power2.in",
				duration: 3,
				onUpdate: (a,b,c) => {
					animation1.goToAndStop(playhead.frame, true)
					animation2.goToAndStop(playhead.frame, true)
					animation3.goToAndStop(playhead.frame, true)
				},
			})

			gsap.timeline({
				scrollTrigger: {
				trigger: '.world-section',
				start: 'top bottom',
				scrub: true,
				end: "top top",
				}
			})
			.to(".world-section", {opacity:1})

			gsap.timeline({
				scrollTrigger: {
					trigger: '.achieve-section',
					start: 'top 30%',
					scrub: true,
					end: '+=4000',
					onEnter: ()=> {
						animation4.play();
						animation5.play();
						animation6.play();
					}
				}
			})

			const section = gsap.utils.toArray('#meet-section')[0]
			ScrollTrigger.create({
				trigger: section,
				start: "top bottom-=1",
				end: "bottom top+=1",
				onEnter: () => this.goToSection(section),
				onEnterBack: () => this.goToSection(section)
			});

			const section1 = gsap.utils.toArray('#world-section')[0]
			ScrollTrigger.create({
				trigger: section1,
				start: "top bottom-=1",
				end: "bottom top+=1",
				onEnter: () => this.goToSection(section1),
				onEnterBack: () => this.goToSection(section1)
			});
			
			// const section2 = gsap.utils.toArray('#achieve-section')[0]
			// ScrollTrigger.create({
			// 	trigger: section2,
			// 	start: "top bottom-=1",
			// 	end: "bottom top+=1",
			// 	onEnter: () => this.goToSection(section2, 80),
			// 	onEnterBack: () => this.goToSection(section2, 80)
			// });

			gsap.timeline({
				scrollTrigger: {
				trigger: '.achieve-section',
				start: 'top bottom',
				scrub: true,
				end: "center center",
				}
			})
			.to(".achieve-section", {opacity:1})

			gsap.timeline({
				scrollTrigger: {
				trigger: '.meet-section',
				start: 'top center',
				scrub: true,
				end: "top top",
				}
			})
			.to(".meet-left", {left:0})
		},

	methods: {
        goToSection(section, mt, i) {
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
  
  
  
  