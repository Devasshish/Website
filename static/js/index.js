function incrementSatisfiedCustomers() {
    var countElement = document.getElementById("satisfiedCustomersCount");
    var count = parseInt(countElement.innerText);

    // Check if count has reached 1006
    if (count >= 1000) {
        countElement.innerHTML = "1000 +";
        return;
    }

    // Increment the count by 1
    count += 2;

    // Update the count in the HTML
    countElement.innerText = count;

    // Call the function recursively after a shorter delay (e.g., 5 milliseconds)
    setTimeout(incrementSatisfiedCustomers, 5);
}

// Call the function to start incrementing the count
incrementSatisfiedCustomers();
