// Select the snowfall container
const container = document.getElementById('snowflake-animation');

// Function to create a snowflake
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed
  snowflake.style.opacity = Math.random() * 0.9 + 0.1; // Random opacity
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
  snowflake.innerText = '❄'; // Snowflake character
  container.appendChild(snowflake);

  // Remove the snowflake after it finishes animating
  setTimeout(() => {
    snowflake.remove();
  }, 5000); // Match this with the animation duration
}

// Generate snowflakes at regular intervals
setInterval(createSnowflake, 100);
