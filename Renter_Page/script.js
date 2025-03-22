document.addEventListener("DOMContentLoaded", function () {
    const acceptButtons = document.querySelectorAll(".accept-btn");
    const clientsSection = document.getElementById("clients-section");
    const requestsSection = document.getElementById("requests-section");
    const radioClients = document.querySelector("input[value='clients']");
    const radioRequests = document.querySelector("input[value='requests']");
    const clientsLabel = document.querySelector("input[value='clients'] + label");
    const requestsLabel = document.querySelector("input[value='requests'] + label");

    function updateLabelStyles() {
        if (radioClients.checked) {
            clientsLabel.style.textDecoration = "underline";
            clientsLabel.style.border = "1px solid #007bff";
            clientsLabel.style.padding = "0.4rem 1.5rem";
            clientsLabel.style.borderRadius = "5px";
            clientsLabel.style.color = "#007bff";
            requestsLabel.style = "";
        } else {
            requestsLabel.style.textDecoration = "underline";
            requestsLabel.style.border = "1px solid #007bff";
            requestsLabel.style.padding = "0.4rem 1.5rem";
            requestsLabel.style.borderRadius = "5px";
            requestsLabel.style.color = "#007bff";
            clientsLabel.style = "";
        }
    }

    // Handle section switching
    radioClients.addEventListener("change", function () {
        clientsSection.style.display = "block";
        requestsSection.style.display = "none";
        updateLabelStyles();
    });

    radioRequests.addEventListener("change", function () {
        clientsSection.style.display = "none";
        requestsSection.style.display = "block";
        updateLabelStyles();
    });

    // Initial check
    updateLabelStyles();

    // Handle accepting clients
    acceptButtons.forEach(button => {
        button.addEventListener("click", function () {
            const row = this.parentElement.parentElement;
            const clientName = row.children[0].textContent;
            const destination = row.children[1].textContent;
            const duration = row.children[2].textContent;
            const payment = row.children[3].textContent;
            const dates = row.children[4].textContent;

            const newRow = document.createElement("tr");
            newRow.innerHTML = `<td>${clientName}</td><td>${destination}</td><td>${duration}</td><td>${payment}</td><td>${dates}</td>`;

            document.getElementById("clients-list").appendChild(newRow);
            row.remove();
        });
    });
});

console.log("Script loaded successfully");