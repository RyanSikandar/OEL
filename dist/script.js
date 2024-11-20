// DOM Elements
const body = document.body; // The body element for toggling dark mode
const toggleModeButton = document.getElementById("toggle-mode"); // Button to switch between modes
const addItemButton = document.getElementById("add-item"); // Button to add items to the list
const itemInput = document.getElementById("item-input"); // Input field for new items
const itemList = document.getElementById("item-list"); // Unordered list to display items
const appTitle = document.getElementById("app-title"); // Title element to update styles dynamically

// Toggle Mode
toggleModeButton.addEventListener("click", () => {
  // Toggles dark mode on the body
  body.classList.toggle("dark-mode");

  // Toggles dark mode styling for buttons
  toggleModeButton.classList.toggle("dark-mode");
  addItemButton.classList.toggle("dark-mode");

  // Updates the title color based on the current mode
  if (body.classList.contains("dark-mode")) {
    appTitle.style.color = "#ff4081"; // Engaged mode title color
    toggleModeButton.textContent = "Switch to Minimalist Mode"; // Update button text for dark mode
  } else {
    appTitle.style.color = ""; // Resets to default (CSS-defined) title color
    toggleModeButton.textContent = "Switch to Engaged Mode"; // Update button text for light mode
  }
});

// Add Item
addItemButton.addEventListener("click", () => {
  const itemText = itemInput.value.trim(); // Gets and trims input text
  if (!itemText) return; // Prevents adding empty items

  // Creates a new list item with the input text
  const li = document.createElement("li");
  li.textContent = itemText;

  // Creates a delete button for the list item
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Adds functionality to remove the list item when the delete button is clicked
  deleteButton.addEventListener("click", () => li.remove());

  // Appends the delete button to the list item
  li.appendChild(deleteButton);

  // Appends the list item to the item list
  itemList.appendChild(li);

  // Clears the input field after adding the item
  itemInput.value = "";
});
