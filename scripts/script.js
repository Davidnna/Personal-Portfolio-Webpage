const small = document.querySelectorAll(".small");
const shows = document.getElementById("shows");

// Function to toggle display of elements with class "small"
function show() {
    // Determine current display status based on the first element (assuming all are the same)
    const currentlyShown = small.length > 0 && small[0].style.display === "flex";
    small.forEach(element => {
        element.style.display = currentlyShown ? "none" : "flex";
    });
    shows.textContent = currentlyShown ? "Show More" : "Show Less";
}

// On window resize, ensure the ".small" elements are handled appropriately.
window.addEventListener("resize", function() {
    if (window.innerWidth > 854) {
      small.forEach(element => element.style.display = "flex");
      shows.textContent = "Show More";
    } else {
      small.forEach(element => element.style.display = "none");
    }
});