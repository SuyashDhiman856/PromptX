document.getElementById("searchBuses").addEventListener("click", function() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    if (from === "" || to === "" || date === "") {
        alert("Please fill all fields before searching for buses.");
    } else {
        alert(`Searching for buses from ${from} to ${to} on ${date}.`);
    }
});
// Function to load the bus booking section
function loadBookingSection() {
    document.getElementById("booking-section").innerHTML = `
        <div class="relative">
            <img src="https://placehold.co/1200x400" alt="Background with cityscape and road" class="w-full h-64 object-cover"/>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <h1 class="text-white text-2xl md:text-4xl font-bold mb-4">India's No. 1 Online Bus Ticket Booking Site</h1>
                <div class="bg-white rounded-full shadow-lg flex items-center p-2 md:p-4 w-11/12 md:w-3/4 lg:w-1/2">
                    <div class="flex items-center w-1/3">
                        <i class="fas fa-map-marker-alt text-gray-500 mr-2"></i>
                        <input type="text" id="from" class="w-full p-2 outline-none" placeholder="From"/>
                    </div>
                    <div class="flex items-center justify-center w-1/6">
                        <i class="fas fa-exchange-alt text-gray-500"></i>
                    </div>
                    <div class="flex items-center w-1/3">
                        <i class="fas fa-map-marker-alt text-gray-500 mr-2"></i>
                        <input type="text" id="to" class="w-full p-2 outline-none" placeholder="To"/>
                    </div>
                    <div class="flex items-center w-1/3">
                        <i class="fas fa-calendar-alt text-gray-500 mr-2"></i>
                        <input type="date" id="date" class="w-full p-2 outline-none"/>
                    </div>
                    <button id="searchBuses" class="bg-red-500 text-white rounded-full px-4 py-2 ml-2">SEARCH BUSES</button>
                </div>
            </div>
        </div>
    `;
}

// Function to load the government buses section
function loadGovernmentBuses() {
    document.getElementById("government-buses").innerHTML = `
        <div class="container mx-auto p-4">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-2xl font-bold">GOVERNMENT BUSES</h1>
                <button class="text-blue-500">View All</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="border rounded-lg p-4 shadow-md">
                    <div class="flex items-center mb-2">
                        <h2 class="text-lg font-bold">GSRTC</h2>
                        <span class="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded">3.7</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">1450 services including Garuda Plus, Rajdhani and more</p>
                    <p class="text-xs text-gray-500 mb-2">Official booking partner of TGSRTC</p>
                    <p class="text-xs text-red-500">Use code FIRST to save upto ₹250 (only for first-time users)</p>
                </div>
                <div class="border rounded-lg p-4 shadow-md">
                    <div class="flex items-center mb-2">
                        <h2 class="text-lg font-bold">KERALA RTC</h2>
                        <span class="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded">3.5</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">940 services including Swift, AC Multiaxle and more</p>
                    <p class="text-xs text-gray-500 mb-2">Official booking partner of KSRTC</p>
                    <p class="text-xs text-red-500">Use code FIRST to save upto ₹250 (only for first-time users)</p>
                </div>
                <div class="border rounded-lg p-4 shadow-md">
                    <div class="flex items-center mb-2">
                        <h2 class="text-lg font-bold">SBSTC</h2>
                        <span class="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded">3.95</span>
                    </div>
                    <p class="text-sm text-gray-600 mb-2">480 services including Non AC Bus and more</p>
                    <p class="text-xs text-gray-500 mb-2">Official booking partner of SBSTC</p>
                    <p class="text-xs text-red-500">Use code FIRST to save upto ₹250 (only for first-time users)</p>
                </div>
            </div>
        </div>
    `;
}

// Load both sections on page load
window.onload = function() {
    loadBookingSection();
    loadGovernmentBuses();
};
