document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".search-button").addEventListener("click", function () {
        alert("Searching for available buses...");
    });

    document.querySelectorAll(".book-now").forEach(button => {
        button.addEventListener("click", function () {
            alert("Proceeding to booking...");
        });
    });

    document.querySelector(".train-booking-btn").addEventListener("click", function () {
        alert("Redirecting to train ticket booking...");
    });
});
