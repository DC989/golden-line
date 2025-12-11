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
