function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');
  
  rows.forEach(row => { 
    const statusCell = row.querySelector('td[data-available]');
    if (statusCell) {
      const available = statusCell.getAttribute('data-available') === 'true';
      if (available) {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', true);
    }

    const genderCell = row.children[2];
      if (genderCell) { 
      if (genderCell.textContent.trim() === 'm') {
        row.classList.add('male');
      } else if (genderCell.textContent.trim() === 'f') {
        row.classList.add('female');
      }
    }

    const ageCell = row.children[1]; 
    if (ageCell) { 
      if (parseInt(ageCell.textContent, 10) < 18) {
        row.style.textDecoration = 'line-through'; 
      }
    }
  });
}

