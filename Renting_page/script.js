document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!"); // Debugging: Check if script runs

    // Select elements
    let searchSection = document.querySelector(".search-section");
    let vehicles = document.querySelectorAll(".vehicle-container"); // Select bike & car containers

    // Hide search section initially
    searchSection.style.display = "none";

    // Add event listener to both bike and car
    vehicles.forEach(vehicle => {
        vehicle.addEventListener("click", function () {
            console.log("Vehicle clicked:", vehicle.id); // Debugging: Show clicked vehicle ID

            // Show search section when a vehicle is clicked
            searchSection.style.display = "block";
            if (vehicle.id === "bike") {
                document.querySelector("#bike .vehicle").style.transform = "scale(1.1)";
                document.querySelector("#car .vehicle").style.transform = "scale(1)";
            } 
            else if (vehicle.id === "car") {
                document.querySelector("#car .vehicle").style.transform = "scale(1.1)";
                document.querySelector("#bike .vehicle").style.transform = "scale(1)";
            }
            
        });
    });

    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Duration Calculation
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

    // Initial duration calculation
    calculateDuration();
});

