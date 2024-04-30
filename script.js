document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Simulate form submission (replace this with actual form submission code)
    // For demonstration purposes, we'll use setTimeout to simulate a delay
    setTimeout(function() {
        // Redirect to the previous page
        window.location.href = document.referrer;
    }, 1000); // 1000 milliseconds = 1 second (adjust as needed)
});
let mouseMoved = false;

const pointer = {
  x: 0.5 * window.innerWidth,
  y: 0.5 * window.innerHeight
};

const params = {
  pointsNumber: 40,
  widthFactor: 0.3,
  mouseThreshold: 0.6,
  spring: 0.4,
  friction: 0.5
};

function updateMousePosition(ex, eY) {
  pointer.x = ex;
  pointer.y = eY;
  setupCanvas();
  update(0);
}

window.addEventListener("resize", setupCanvas);




 