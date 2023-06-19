var acc = document.getElementsByClassName("question");
var i;
var openAccordion = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Check if the clicked accordion is already active
    if (this.classList.contains("active")) {
      this.classList.remove("active"); // Remove the "active" class
      var panel = this.nextElementSibling;
      panel.style.display = "none"; // Hide the accordion content
      panel.style.maxHeight = null; // Reset the max height
      openAccordion = null; // Reset the open accordion reference
    } else {
      // If another accordion is open, close it first
      if (openAccordion) {
        openAccordion.classList.remove("active"); // Remove the "active" class
        openAccordion.nextElementSibling.style.display = "none"; // Hide the accordion content
        openAccordion.nextElementSibling.style.maxHeight = null; // Reset the max height
      }
      this.classList.add("active"); // Add the "active" class to the clicked accordion
      var panel = this.nextElementSibling;
      panel.style.display = "block"; // Show the accordion content
      panel.style.maxHeight = panel.scrollHeight + "px"; // Set the max height to fit the content
      openAccordion = this; // Update the open accordion reference
    }
  });
}
