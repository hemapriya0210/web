// Get references to the form and table

const form = document.getElementById('achievement-upload-form');
const tableBody = document.querySelector('.achievements-table tbody');
let sno = 1; // Initialize serial number

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get the input values
  
  const type = document.getElementById('type').value;
  const link = document.getElementById('link').value;

  // Create a new row in the table
  
  const newRow = document.createElement('tr');

  // Create and append the SNO cell
  
  const snoCell = document.createElement('td');
  snoCell.textContent = sno++;
  newRow.appendChild(snoCell);

  // Create and append the Name cell
  
  const typeCell = document.createElement('td');
  typeCell.textContent = type;
  newRow.appendChild(typeCell);

  // Create and append the Email cell
  
  const linkCell = document.createElement('td');
  const anchorLink = document.createElement('a');
  anchorLink.textContent = 'CLICK TO VIEW CERTIFICATE';
  anchorLink.href = link;
  anchorLink.target = '_blank';
  linkCell.appendChild(anchorLink);
  newRow.appendChild(linkCell);

  // Append the new row to the table
  
  tableBody.appendChild(newRow);

  // Clear the form inputs
  
  document.getElementById('type').value = '';
  document.getElementById('link').value = '';
  console.log(sno)
});
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('#navbar').classList.toggle('menu-open');
});

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})