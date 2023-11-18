"use strict";
// List Data
let listData = [
  {
    title: "Lorem Ipsum",
    forPoc: "HON CIRCLE;",
    pocBrief: "Miles & More",
    startDate: "1/29/2010 6:30:00PM",
    targetDate: "1/29/2010 6:30:00PM",
    actualDate: "1/29/2010 6:30:00PM",
  },
  {
    title: "Lorem Ipsum",
    forPoc: "HON CIRCLE;",
    pocBrief: "Miles & More",
    startDate: "1/29/2010 6:30:00PM",
    targetDate: "1/29/2010 6:30:00PM",
    actualDate: "1/29/2010 6:30:00PM",
  },
  {
    title: "Lorem Ipsum",
    forPoc: "HON CIRCLE;",
    pocBrief: "Miles & More",
    startDate: "1/29/2010 6:30:00PM",
    targetDate: "1/29/2010 6:30:00PM",
    actualDate: "1/29/2010 6:30:00PM",
  },
  {
    title: "Lorem Ipsum",
    forPoc: "HON CIRCLE;",
    pocBrief: "Miles & More",
    startDate: "1/29/2010 6:30:00PM",
    targetDate: "1/29/2010 6:30:00PM",
    actualDate: "1/29/2010 6:30:00PM",
  },
];

// Display the list dynamically
const listContainer = document.querySelector(".list-container")
listData.forEach(function (item, i) {
  insertData(item, i);
});

// Insert Data in list area
function insertData(data, index) {
  let content = `
  <div class="list-item">
    <div class="list-item-header">
      <h3>${index + 1}. ${data.title}</h3>
      <div class="list-controls">
        <a href="#" class="edit-btn" title="Edit List">
          <i class="fa-solid fa-pen-to-square"></i>
        </a>
        <a href="#" class="delete-btn" title="Delete List">
          <i class="fa-solid fa-trash-can"></i>
        </a>
      </div>
    </div>
    <div class="list-content">
      <p>For/POC: <span>${data.forPoc}</span> POC Briefed: <span>${
    data.pocBrief
  }</span></p>
      <p>Start Date: <span>${data.startDate}</span>  Target Date: <span>${
    data.targetDate
  }</span></p>
      <p>Actual Date: <span>${data.actualDate}</span></p>
    </div>
  </div>
    `;
  listContainer.innerHTML += content;
}
// Handle Delete Functionality of List
const listItems = document.querySelectorAll(".list-item");
const deleteBtns = document.querySelectorAll(".delete-btn");
listItems.forEach(function (item, i) {
  deleteBtns[i].addEventListener("click", (event) => {
    event.preventDefault();
    // listData = listData.filter((currentData, index) => i !== index);
    let currentList = event.target.closest(".list-item");
    if (currentList) {
      currentList.classList.add("delete");
      setTimeout(function () {
        currentList.remove();
        checkList();
      }, 300);
    }
  });
});

// Check the list and display no list messsage
function checkList() {
  const listCounts = document.querySelectorAll(".list-item");
  const listMessage = document.querySelector(".no-list-message");
  if (listCounts.length === 0) {
    listMessage.style.display = "block";
  }
}


// Hide Button Functionality 
const hideBtn = document.querySelector(".hide-btn");
const showBtn = document.querySelector(".show-action-btn");
const newActionContainer = document.querySelector(".new-action-container");
const formActionBtn = document.querySelector(".form-action-btn");

hideBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // hide new action section
  newActionContainer.style.display = "none";
  formActionBtn.style.display = "none";
  newActionContainer.classList.add("hide-element");
  formActionBtn.classList.add("hide-element");
  // show action button
  showBtn.classList.add("show-element");
  showBtn.style.display = "block";
});

// Show Action Button Functionality 
showBtn.addEventListener("click", (event) => {
  // show new action section
  newActionContainer.style.display = "block";
  formActionBtn.style.display = "block";
  newActionContainer.classList.add("show-element");
  formActionBtn.classList.add("show-element");
  // hide 'show action' button
  showBtn.classList.add("hide-element");
  showBtn.style.display = "none";
});

// On status change modal functionality
const statusSelect = document.getElementById("status");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
statusSelect.addEventListener("change", function () {
  let selectedValue = this.value;
  // On status equal to 'done'
  if (selectedValue == "done") {
    toggleModal();
  }
});

// Toggle the modal functionality
function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

// On clicking 'yes' on modal functionality 
yesBtn.addEventListener("click", function () {
  console.log("Status changed to DONE");
  toggleModal();
});

// On clicking 'no' on modal functionality
noBtn.addEventListener("click", function () {
  toggleModal();
  // Reset the select value
  statusSelect.value = "select";
});

// Save button functionality
let saveBtn = document.querySelector(".save-btn");
let waitingModal = document.querySelector(".waiting-modal");

saveBtn.addEventListener("click", function (event) {
  // Show the waiting modal
  waitingModal.style.display = "flex";
  overlay.classList.toggle("hidden");

  // After 2 seconds, hide the waiting modal and redirect
  setTimeout(function () {
    waitingModal.style.display = "none";
    window.location.href = "./thank-you/index.html";
  }, 2000);
});

// Insert Button Functionality
const insertBtn = document.getElementById("insert-btn");
insertBtn.addEventListener("click", function () {
  const listCounts = document.querySelectorAll(".list-item");
  let newData = {
    title: "Lorem Ipsum",
    forPoc: document.getElementById("for-poc").value,
    pocBrief: document.getElementById("poc-brief").value,
    startDate: document.getElementById("start-date").value,
    targetDate: document.getElementById("target-date").value,
    actualDate: document.getElementById("actual-date").value,
  };
  insertData(newData, listCounts.length);
});
