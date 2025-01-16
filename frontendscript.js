// Toggle Left Menu Collapse
function toggleMenu() {
    const menu = document.getElementById('leftMenu');
    menu.classList.toggle('collapsed');
}
  
  

function adjustPageScale() {
    let width = window.innerWidth;

    let scale = 1;  // Default scale (100%)
    
    // Adjust scale based on the width
    if (width > 992 && width < 1600) {
        scale = 0.9; // 90% shrink
    } else if (width > 700 && width < 767) {
        scale = 0.8; // 80% shrink
    } else if (width > 600 && width < 700) {
        scale = 0.75; // 75% shrink
    } else if (width <= 600) {
        scale = 0.5; // 50% shrink
    }

    // Apply the scale to the body
    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top left';  // Ensuring the scaling starts from top left
    document.body.style.width = `${100 / scale}%`;  // Adjusting the width to keep content proportional

    // Log the scale value to console for visibility
    console.log(`Page scale is: ${(scale * 100)}%`);
}

// Call the function on resize and load
window.addEventListener('resize', adjustPageScale);
window.addEventListener('load', adjustPageScale);
  