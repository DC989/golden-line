(() => {
  "use strict";

  // Only run this script on the specific page
  if (window.location.pathname === "/ru/kopaonik/") {
    const contactFixed = document.querySelector(".contact-fixed");

    if (contactFixed) {
      const contactLinks = contactFixed.querySelectorAll("a");

      contactLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (typeof gtag_report_conversion === "function") {
            gtag_report_conversion();
          }
        });
      });
    }
  }
})();

(() => {
  "use strict";

  // Universal solution for clickable parent dropdowns
  const dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .dropdown-toggle');
  const isDesktop = () => window.innerWidth >= 992; // Bootstrap's lg breakpoint

  dropdownToggles.forEach(toggle => {
    let lastTap = 0;

    toggle.addEventListener('click', (e) => {
      const href = toggle.getAttribute('href');

      if (isDesktop()) {
        // On desktop, just navigate. Hover will open the dropdown.
        if (href && href !== '#') {
          window.location.href = href;
        }
      } else {
        // On mobile, handle the "double tap" behavior.
        const now = new Date().getTime();
        const tapLength = now - lastTap;
        
        // If the dropdown is already open and they tap again quickly, navigate.
        if (tapLength < 500 && tapLength > 0) {
          if (href && href !== '#') {
            window.location.href = href;
          }
        } else {
          // Otherwise, just let Bootstrap's JS open the dropdown.
          e.preventDefault(); 
        }
        lastTap = new Date().getTime();
      }
    });
  });
})();
