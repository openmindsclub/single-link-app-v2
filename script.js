const links = document.querySelectorAll('a');
let focusedIndex = 0;

links[focusedIndex].focus();

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    focusedIndex = (focusedIndex + 1) % links.length;
    updateFocus();
    event.preventDefault();
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    focusedIndex = (focusedIndex - 1 + links.length) % links.length;
    updateFocus();
    event.preventDefault();
  } else if (event.key === 'Enter') {
    links[focusedIndex].click();
  }
});

function updateFocus() {
  links.forEach((link, index) => {
    if (index === focusedIndex) {
      link.focus();
    //   link.classList.add('active');
    } else {
    //   link.classList.remove('active');
    link.blur();
    }
  });
}
