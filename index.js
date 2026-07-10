const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const status = document.getElementById('status');
const total = checkboxes.length;

checkboxes.forEach(cb => {
  cb.addEventListener('change', updateStatus);
});

function updateStatus() {
  const checked = document.querySelectorAll('input:checked').length;
  status.textContent = checked + ' / ' + total + ' bought';

  if (checked === total) {
    status.textContent = 'All items bought!';
    status.style.color = 'green';
  } else {
    status.style.color = '#555';
  }
}
