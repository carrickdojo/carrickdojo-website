console.log("HI")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = "lime"
ctx.fillRect(0, 0, canvas.width, canvas.height)

class Dojo {
  constructor({ position, velocity }) {
    this.position = position
  }

  draw() {
    let circle_big = new Path2D(
      "M 99.824281,50.000001 A 49.824276,49.824276 0 0 1 50.000001,99.824281 49.824276,49.824276 0 0 1 0.175725,50.000001 49.824276,49.824276 0 0 1 50.000001,0.175725 49.824276,49.824276 0 0 1 99.824281,50.000001 Z"
    )

    let circle_small = new Path2D(
      "m 50.000039,0.0878625 a 49.824276,49.824276 0 0 0 -4.291213,0.306958 C 33.999214,2.4319235 25.087862,12.619793 25.087862,24.912186 c 0,13.75858 11.153594,24.912164 24.912177,25.000027 13.75858,0.0879 24.91217,11.24144 24.91217,25.00002 0,12.78082 -9.62928,23.29931 -22.02604,24.73183 A 49.824276,49.824276 0 0 0 99.824389,49.912213 49.824276,49.824276 0 0 0 50.000039,0.0878625 Z"
    )

    let zero = new Path2D(
      "m 44.011914,37.454194 c -0.740608,-0.195212 -1.59328,-1.035485 -1.860321,-1.833055 -0.219508,-0.655622 -0.192512,-20.76435 0.02856,-21.293524 0.236697,-0.566475 0.876445,-1.255339 1.451749,-1.563218 C 44.120701,12.50286 44.188432,12.5 49.918352,12.5 c 5.71905,0 5.79856,0.004 6.28327,0.262757 0.6485,0.347141 1.33292,1.11909 1.49895,1.690686 0.0944,0.324981 0.12301,3.512282 0.0976,10.857765 l -0.036,10.397756 -0.36674,0.521753 c -0.20171,0.286998 -0.609,0.685323 -0.90506,0.885256 l -0.53831,0.363443 -5.85267,0.018 c -3.218961,0.01 -5.958315,-0.01 -6.087456,-0.0434 z M 54.805652,25.050052 v -9.472878 h -4.88728 -4.887279 v 9.472878 9.472857 h 4.887279 4.88728 z"
    )

    let one = new Path2D(
      "m 42.952871,86.078896 c -0.736651,-0.45238 -0.953063,-1.17208 -0.573283,-1.9065 0.357066,-0.69048 0.669207,-0.76052 3.573784,-0.80214 2.63014,-0.0376 2.63014,-0.0376 2.63014,-9.36797 0,-9.33029 0,-9.33029 -2.40563,-9.33029 -1.48479,0 -2.559433,-0.0516 -2.807439,-0.1346 -0.554145,-0.1856 -0.914051,-0.54058 -1.067563,-1.05296 -0.16474,-0.54986 0.11818,-1.2162 0.656285,-1.54562 0.340872,-0.20866 0.62411,-0.22096 4.442257,-0.1928 4.078159,0.03 4.078159,0.03 4.108339,10.81645 0.0302,10.78645 0.0302,10.78645 1.68446,10.78645 1.6543,0 1.6543,0 1.6543,-3.37272 0,-3.75063 0.042,-4.00555 0.73166,-4.42597 0.49738,-0.30324 0.96904,-0.30348 1.45884,-8.8e-4 0.72761,0.44968 0.76469,0.70494 0.76469,5.26415 0,4.412 -0.018,4.5581 -0.64437,5.13584 -0.32022,0.29554 -0.32022,0.29554 -7.07814,0.32626 -6.491304,0.0294 -6.772566,0.0218 -7.12833,-0.1968 z"
    )
    ctx.fillStyle = "black"
    ctx.translate(this.position.x, this.position.y)
    ctx.fill(circle_big)
    ctx.fillStyle = "white"
    ctx.fill(circle_small)
    ctx.fill(one)
    ctx.fillStyle = "black"
    ctx.fill(zero)
  }
}

function animate() {
  window.requestAnimationFrame(animate)
}

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
      keys.w.pressed = true
      break
  }
})

const dojo = new Dojo({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
})

dojo.draw()

console.log(dojo)
