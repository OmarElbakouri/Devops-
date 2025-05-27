document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    
    let count = 0;
    
    incrementButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });
});
