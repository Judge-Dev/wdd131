// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Display current date and time in en-GB format
    const now = new Date();
    const formatted = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString('en-GB');
    document.getElementById('lastModified').textContent = formatted;

    // Static weather values
    const temperature = 45; // °F
    const windSpeed = 5;    // mph

    // Set temp and wind
    document.getElementById("temp").textContent = `${temperature} °F`;
    document.getElementById("wind").textContent = `${windSpeed} mph`;

    // Wind chill eligibility check and calculation
    let windChillText;
    if (temperature <= 50 && windSpeed > 3) {
        windChillText = `${Math.round(calculateWindChill(temperature, windSpeed))} °F`;
    } else {
        windChillText = "N/A";
    }

    // Inject Wind Chill info into the page
    const weatherBox = document.getElementById("weatherBox");
    const wcPara = document.createElement("p");
    wcPara.innerHTML = `<strong>Wind Chill:</strong> <span id="windChill">${windChillText}</span>`;
    weatherBox.appendChild(wcPara);
});

// Wind chill formula (Imperial units)
function calculateWindChill(t, s) {
    return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}
