let passengerCounts = {
    adult: 0,
    children: 0,
    infant: 0
};

function toggleDropdown() {
    document.getElementById('passenger-menu').classList.toggle('active');
}

function updatePassengerCount(type, amount) {
    passengerCounts[type] = Math.max(passengerCounts[type] + amount, 0); // Prevent negative counts

    document.getElementById(`${type}-count`).textContent = passengerCounts[type];
    updatePassengerSummary();
}

function updatePassengerSummary() {
    const summary = `${passengerCounts.adult} Adult - ${passengerCounts.children} Child`;
    document.getElementById('passenger-summary').textContent = summary;
}
