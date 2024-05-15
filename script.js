function createFallingElement() {
    const element = document.createElement('div');
    element.className = 'falling-element';
    element.style.left = `${Math.random() * (window.innerWidth - 100)}px`; // Random horizontal position
    document.getElementById('container').appendChild(element);

    setTimeout(() => {
        element.remove(); // Remove the element after animation
    }, 3000); // Should match the animation duration
}

setInterval(createFallingElement, 1000); // Create elements every 1 second
