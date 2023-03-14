// await loadScript("https://hydra-extensions.glitch.me/hydra-text.js")

const canvas = document.getElementById("canvas-0");

// fix resolution
canvas.width = 1024;
canvas.height = 1024;
// create a new hydra-synth instance
var hydra = new Hydra({
  detectAudio: false,
  enableStreamCapture: false,
})

// await loadScript("https://hydra-extensions.glitch.me/hydra-text.js")
// let f = new FontFace("test", "https://fonts.googleapis.com/css2?family=BIZ+UDPGothic&family=Montserrat:wght@400;500&family=Roboto:wght@400;700&display=swap");

// f.load().then(() => {
//   // Ready to use the font in a canvas context
// });



// hydraText.font = "serif"
// hydraText.lineWidth = "2%"
// str = " May Wilcher "
solid(231/256, 27/256, 94/256, 1)
	.add(osc(1.5)
		.kaleid(2)
		.mult(shape(4,0.3,0.3)
			.diff(src(o0)
				// .modulate(osc(10))
				.scale(1,0.9)
				
				// .repeat(2)
				.kaleid(2)
				// .scroll(1,10,0,0.1)
				// .scale(0.5,4,1)
				.modulateScale(osc(4).kaleid(),2)
				.blend(shape(4,0.4,0.6))
				// .repeat(50)
			)
		)	
		// 
		// .luma(0.2)
		// .modulate(src(o0))
		// .color(118/256, 87/256, 78/256)
	)
	// .modulateScale(src(o0))
	// .layer(text(str))
	// .diff(strokeText(str).modulateScale(noise(1,1), .4))
	.out()