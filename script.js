const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach((button) => {
  const extraInfo = button.previousElementSibling;
  const previewTextLength = 50; // Length of preview text
  const fullText = extraInfo.textContent.trim();

  // Set initial preview text
  if (fullText.length > previewTextLength) {
    extraInfo.dataset.fullText = fullText; // Save full text
    extraInfo.textContent = `${fullText.slice(0, previewTextLength)}...`;
  }

  // Toggle between preview and full text
  button.addEventListener('click', () => {
    if (extraInfo.classList.contains('show')) {
      extraInfo.classList.remove('show');
      extraInfo.textContent = `${extraInfo.dataset.fullText.slice(0, previewTextLength)}...`;
      button.textContent = 'Read More';
    } else {
      extraInfo.classList.add('show');
      extraInfo.textContent = extraInfo.dataset.fullText;
      button.textContent = 'Read Less';
    }
  });
});



            // Get all accordion buttons
    // Get all accordion buttons
const accordions = document.querySelectorAll('.accordion');

// Loop through each accordion button and add an event listener
accordions.forEach(accordion => {
accordion.addEventListener('click', function() {
  // Toggle the 'active' class to change the background color and text color
  this.classList.toggle('active');
  
  // Get the associated panel and toggle its display
  const panel = this.nextElementSibling;
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
});
});



// Script for sideBAr
const sidebarLinks = document.querySelectorAll('.sticky-sidebar a');

// Add event listeners to highlight the active link
window.addEventListener('scroll', () => {
  let current = '';

  // Check the section currently in the viewport
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  // Remove active class from all links
  sidebarLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
