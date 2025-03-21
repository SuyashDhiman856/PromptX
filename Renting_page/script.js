// Tab switching
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Calculate duration
const pickupInput = document.getElementById('pickup-date');
const returnInput = document.getElementById('return-date');
const durationText = document.querySelector('.duration');

function calculateDuration() {
    const pickupDate = new Date(pickupInput.value);
    const returnDate = new Date(returnInput.value);
    const diffMs = returnDate - pickupDate;
    
    if (diffMs < 0) {
        durationText.textContent = 'Return date must be after pickup date';
        return;
    }

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    durationText.textContent = `Duration: ${diffDays} Days and ${diffHrs} Hrs`;
}

pickupInput.addEventListener('change', calculateDuration);
returnInput.addEventListener('change', calculateDuration);

// Initial calculation
calculateDuration();