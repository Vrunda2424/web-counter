// Element references
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const errorMessage = document.getElementById('error-message');

// Initialize count
let count = 0;

// Update display
function updateDisplay() {
    counterDisplay.textContent = count;
    counterDisplay.classList.remove('flash-active');
    void counterDisplay.offsetWidth; // Restart animation
    counterDisplay.classList.add('flash-active');
}

// Increment
incrementBtn.addEventListener('click', () => {
    count++;
    errorMessage.classList.add('opacity-0');
    updateDisplay();
});

// Decrement
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        errorMessage.classList.add('opacity-0');
        updateDisplay();
    } else {
        errorMessage.classList.remove('opacity-0');
        decrementBtn.classList.add('animate-pulse', 'ring-4', 'ring-red-500');
        setTimeout(() => {
            decrementBtn.classList.remove('animate-pulse', 'ring-4', 'ring-red-500');
        }, 500);
    }
});

// Reset
resetBtn.addEventListener('click', () => {
    count = 0;
    errorMessage.classList.add('opacity-0');
    updateDisplay();
});

// Initial update
updateDisplay();
