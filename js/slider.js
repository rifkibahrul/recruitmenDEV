
// Fetch feedback data from PHP
async function fetchFeedback() {
    const response = await fetch('php/get_feedback.php');
    const feedbacks = await response.json();

    const slider = document.getElementById('slider');
    let currentIndex = 0;

    function showNextItem() {
        if (currentIndex >= feedbacks.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = feedbacks.length - 1;
        }

        // Clear previous items
        slider.innerHTML = '';

        // Create and display new slider item
        const feedback = feedbacks[currentIndex];
        const sliderItem = document.createElement('div');
        sliderItem.className = 'flex flex-none px-4 py-2 max-w-xs min-w-full justify-start items-center bg-white rounded-lg shadow-lg';

        sliderItem.innerHTML = `
            <img src="${feedback.image}" alt="Profile" class="w-12 h-12 rounded-full mr-4">
            <div class="ml-4">
                <h3 class="font-semibold text-lg">${feedback.name}</h3>
                <p class="text-gray-600">${feedback.message}</p>
            </div>
        `;

        slider.appendChild(sliderItem);
    }

    // Initial display
    showNextItem();

    // Auto-slide every 2 seconds
    setInterval(() => {
        currentIndex++;
        showNextItem();
    }, 2000);
}

document.addEventListener('DOMContentLoaded', fetchFeedback);