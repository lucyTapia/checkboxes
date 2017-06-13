const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;
let inBetween = false;

function handleCheck(e) {
  if (e.shiftKey) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      
      if (inBetween && checkbox !== lastChecked && checkbox !== this) {
        checkbox.checked = !checkbox.checked;
      }
    });
  }
    
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));