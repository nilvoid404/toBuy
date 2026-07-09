var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var status = document.getElementById("status");
var total = checkboxes.length;

// first load saved checkboxes
for (var i = 0; i < checkboxes.length; i++) {
  var saved = localStorage.getItem(checkboxes[i].id);
  if (saved === "true") {
    checkboxes[i].checked = true;
  }
}

// count and show status
function updateStatus() {
  var bought = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      bought = bought + 1;
    }
  }
  status.innerHTML = bought + " / " + total + " bought";
}

// run status on start
updateStatus();

// listen for changes
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function () {
    localStorage.setItem(this.id, this.checked);
    updateStatus();
  });
}