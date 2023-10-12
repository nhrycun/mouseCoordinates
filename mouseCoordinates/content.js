// Create a div to display the coordinates
const coordDiv = document.createElement('div');
coordDiv.style.position = 'fixed';
coordDiv.style.bottom = '0';
coordDiv.style.right = '0';
coordDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
coordDiv.style.color = 'white';
coordDiv.style.padding = '10px';
coordDiv.style.zIndex = '9999';
document.body.appendChild(coordDiv);

// Update the div whenever the mouse moves
document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  coordDiv.innerHTML = `X: ${x}, Y: ${y}`;
});
