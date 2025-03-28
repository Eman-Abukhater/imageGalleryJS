let scrollContainer = document.querySelector('.gallery'); // Fixed selector
let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    scrollContainer.scrollLeft += e.deltaY; // Move horizontally based on the vertical scroll delta
    scrollContainer.style.scrollBehavior = 'auto'; // Disable smooth scroll behavior during wheel event
});

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth'; // Smooth scroll behavior
    scrollContainer.scrollLeft -= 900; // Scroll 900px to the left
});

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth'; // Smooth scroll behavior
    scrollContainer.scrollLeft += 900; // Scroll 900px to the right
});
