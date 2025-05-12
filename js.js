document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const contentPanel = document.querySelector(".content-panel");
    const btnText = document.querySelector(".btn-text");
    const btnIcon = document.querySelector(".icon");
    const hiddenText = document.querySelector(".hidden-text");
  
    if (!hiddenText || !contentPanel || !toggleBtn || !btnText || !btnIcon) {
        console.error("One or more required elements not found in the DOM.");
        return;
    }
  
    let isContentVisible = false;
  
    // Initialize maxHeight to 0 (hidden)
    contentPanel.style.maxHeight = '0px';
  
    toggleBtn.addEventListener('click', function() {
        if (isContentVisible) {
            // Hide content
            contentPanel.style.maxHeight = '0px';
            btnText.textContent = 'Show Content';
            btnIcon.style.transform = 'rotate(180deg)';
        } else {
            // Show content
            contentPanel.style.maxHeight = hiddenText.scrollHeight + 'px';
            btnText.textContent = 'Hide Content';
            btnIcon.style.transform = 'rotate(0deg)';
        }
        isContentVisible = !isContentVisible;
    });
  });