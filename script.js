// Data for Chart and Table
let chartData = [];
let labels = [];
let partReadings = [];

// Initialize Chart.js
const ctx = document.getElementById("runChart").getContext("2d");
const runChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Readings",
            data: chartData,
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
            borderWidth: 2,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        },
        scales: {
            x: { title: { display: true, text: "Entry Number" } },
            y: { title: { display: true, text: "Reading" } }
        }
    }
});

// Function to Add a Reading
function addReading() {
    const partNo = document.getElementById("partNo").value.trim();
    const reading = parseFloat(document.getElementById("reading").value);

    if (!partNo || isNaN(reading)) {
        alert("Please enter valid part number and reading!");
        return;
    }

    // Update Chart Data
    chartData.push(reading);
    labels.push(chartData.length);
    runChart.update();

    // Update Table
    const table = document.getElementById("dataTable");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${partNo}</td>
        <td>${reading.toFixed(2)}</td>
        <td>${new Date().toLocaleTimeString()}</td>
    `;
    table.appendChild(row);

    // Clear Inputs
    document.getElementById("partNo").value = "";
    document.getElementById("reading").value = "";
}
