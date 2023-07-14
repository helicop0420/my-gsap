<template>
	<div style="position: relative;" id="adjust-wrapper">
		<div style="height: 100vh; background-color: black;">
			<div class="pta-text pb-3">
				<p class="pta-text-1">Customize your angioplasty to accurately<br> match the ballon length to lesion length</p>
				<p class="pta-text-2">The unique solution allows in-vessel<br> adjustments of the ballon length from 20<br> to 180 mm, designed to dialte various<br> lesion lengths or focal residual stenosis<br> with the same balloon</p>
			</div>
			<div class="pta-section" style="background-color: black;">
				<div style="overflow: hidden;">
					<!--  -->
					<div class="img-panel" id="img-panel">
						<div class="img-adjust-container">
							<!-- <adjustSVG style="position: absolute; width: 100vw;"></adjustSVG> -->
							<div class="img-adjust" id="img-adjust">
								<img src="../../assets/img/adjust/standard.png" style="width: 100vw; max-width: 100vw;"/>
							</div>
							<div style="background-color: white;">
								<div class="img-bounder" id="img-bounder" style="padding: 1px; position: relative;">
									<div class="img-bar"></div>
									<img src="../../assets/img/Button.png" alt="" class="img-slider" id="img-slider">
								</div>
							</div>
							<div class="p-6" style="background-color: black; color: white; position: relative; height: 300px;">
								<div id="standard-text" style="position: absolute;">
									<p style="font-size: 20px;">Standard PTA Balloon</p>
									<p>Unable to exactly match the length of the <br>lesion, potentially damaging healthy parts<br>of the vessel once inflated</p>
								</div>
								<div id="restore-text" style="font-size: 18px; line-height: 20px; color: #f04e23; position: absolute; opacity: 0;">
									<p>Adjust</p>
									<p>Oscar PTA Balloon</p>
									<p>Unique adjustable length balloon able to<br>exactly match the length of the lesion</p>
									
									<p class="mt-3">Restore</p>
									<p>Restoring blood flow quickly and <br>efficently</p>
								</div>
							</div>	
						</div>
						<div class="img-restore" id="img-restore">
							<!-- <restoreSVG></restoreSVG> -->
							<img src="../../assets/img/adjust/restore.png" style="width: 100vw;"/>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
		<div class="metal-section">
			<img class="img-ballon" src="../../assets/img/adjust/vertical_balloon.png" style="width: 77px;" />
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
				<div class="second-marker-title" style="margin-right: 71px;">Balloon markers</div>
				<div class="second-marker-content flex" style="align-items: end;">
					Markers on distal balloon shoulder<br/>
					and every 60 mm aid accurate<br/>
					balloon-to-lesion measurement<p style="font-size: 11px; margin-bottom: 8px; margin-left: -24px;">2</p>
				</div>
				<div class="second-marker-arrow" style="margin-bottom: 20px; margin-top: 14px;"></div>
				<p>*Balloon ø 7 mm has 2<br>markers, one distal<br>and one at 50 mm</p>
			</div>
		</div>
		<div id="adjust-chart" style="position: relative; background-color: #f45c24;">
			<img class="img-ballon-2" src="../../assets/img/adjust/ballon.png" />
			<div id="main-content" style="height: 60vh; ">
				
			</div>
		</div>
	</div>
</template>

<style scoped>
	.pta-section {
		position: relative;
		width: 100vw;
		background-color: black;
	}
	.img-panel {
		width: 80vw;
	}
	.img-adjust-container {
		position: absolute;
		right: 0;
		left: 0;
		z-index: 20;

	}
	.img-adjust {
		overflow: hidden;
		margin-right: 89%;
		border-right: 1px solid #b4a499;
	}
	.img-restore {
		position: absolute;
		z-index: 9;
		width: 100vw;
	}
	.img-slider {
		cursor: pointer;
		left: 0;
		height: 100%;
	}
	.img-stick {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 14vw;
		z-index: 100;
	}
	.img-ballon-2 {
		left: 5%;
		right: 0px;
		position: absolute;
		top: 20vw;
		max-width: 120%;
		width: 110%;
		z-index: 15;
	}

	.pta-text {
		color: white;
		width: 100%;
		background-color: black;
		padding-top: 20px;
		padding-left: 20px;
	}
	.pta-text-1 {
		font-size: 18px;
	}

	.pta-text-2 {
		font-size: 18px;
		color: #939393;
	}

	.metal-section {
		background-color: rgb(244, 101, 38);
		position: relative;
		display: flex;
		justify-content: flex-end;
		padding-right: 20%;
	}

	.img-ballon {
		transform: rotateZ(90);
	}

	.first-marker {
		position: absolute;
		color: white;
		top: 100px;
		left: 5%;
	}

	.first-marker-arrow {
		width: 45vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.first-marker-title {
		font-size: 16px;
	}
	.first-marker-content {
		font-size: 14px;
	}

	.second-marker {
		position: absolute;
		color: white;
		bottom: 60px;
		left: 5%;
	}
	.second-marker-arrow {
		width: 56vw;
		height: 1px;
		border-bottom: 1px solid white;
	}

	.second-marker-title {
		font-size: 16px;
	}
	.second-marker-content {
		font-size: 14px;
	}

	.third-marker {
		position: absolute;
		left: -100px;
		opacity: 0;
		bottom: 10%;
		color: white;
		padding-right: 5px;
		border-right: 1px solid white;
	}
	.third-marker-content {
		text-align: right;
		font-size: 20px;
	}

	.img-bounder {
		height: 5vw;
		margin-left: 7%;
		width: 90%;
	}

	.img-bar {
		position: absolute;
		border-top: 1px solid black;
		left: 5%;
		right: 5%;
		bottom: 50%;
	}
	
</style>

<script>
import gsap from 'gsap'
import lottie from 'lottie-web'
import adjustSVG from '../../assets/img/adjust/standard_without_text.svg'
import restoreSVG from '../../assets/img/adjust/restore_without_text.svg'
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
			};
	},
	mounted() {         		
		let playhead1 = {frame: 0}
		var parentSliderW = document.getElementById('img-adjust').parentElement.clientWidth
		document.getElementById('img-slider').style.transform = `translateX(${parentSliderW*0.93*0.85}px)`
		let style =  window.getComputedStyle(document.getElementById('img-slider'));
		var transformX = new WebKitCSSMatrix(style.transform).m41;
		var parentW = document.getElementById('img-adjust').parentElement.clientWidth
		document.getElementById('img-adjust').style.marginRight = `${parentW-0.11*parentW-transformX}px`
		Draggable.create('#img-slider', {
			type: 'x',
			bounds: document.getElementById('img-bounder'),
			onDrag () {
				let style =  window.getComputedStyle(document.getElementById('img-slider'));
				var transformX = new WebKitCSSMatrix(style.transform).m41;
				var parentW = document.getElementById('img-adjust').parentElement.clientWidth
				document.getElementById('img-adjust').style.marginRight = `${parentW-0.11*parentW-transformX}px`

				var standardText = document.getElementById('standard-text')
				var restoreText = document.getElementById('restore-text')
				standardText.style.opacity = transformX/(parentW-0.1*parentW-transformX)
				restoreText.style.opacity = 1- standardText.style.opacity
			}
		})

		const animation3 = lottie.loadAnimation({
                container: gsap.utils.toArray("#main-content")[0],
                renderer: "svg",
                loop: false,
                autoplay: false,
                path: 'https://assets1.lottiefiles.com/packages/lf20_2xrsDhrCLE.json'
            });

		gsap.timeline({
			scrollTrigger: {
				trigger: '#adjust-chart',
				start: 'top top',
				end: '+=2000',
				scrub: true,
				pin: true,
			}
		})
		.to(playhead1, {
            frame: 148,
			duration: 26,
            onUpdate: (a,b,c) => {
                animation3.goToAndStop(playhead1.frame, true)
            },
        })
	}
};



</script>