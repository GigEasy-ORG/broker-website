// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
 // Create mobile menu button if it doesn't exist
 const nav = document.getElementById("header");
 if (nav && !document.querySelector(".mobile-menu-button")) {
  const mobileMenuButton = document.createElement("button");
  mobileMenuButton.className =
   "mobile-menu-button md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-300 hover:text-primary hover:border-primary";
  mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  mobileMenuButton.onclick = toggleMobileMenu;

  // Insert before the CTA button
  const ctaButton = nav.querySelector("button");
  if (ctaButton) {
   nav
    .querySelector(".flex.items-center")
    .insertBefore(mobileMenuButton, ctaButton);
  }

  // Create mobile menu
  const mobileMenu = document.createElement("div");
  mobileMenu.id = "mobile-menu";
  mobileMenu.className =
   "mobile-menu hidden md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg z-40";
  mobileMenu.innerHTML = `
            <div class="px-6 py-4 space-y-4">
                <a href="index.html" class="block text-gray-700 hover:text-primary font-medium py-2">Home</a>
                <a href="brokers.html" class="block text-gray-700 hover:text-primary font-medium py-2">Brokers</a>
                <a href="developers.html" class="block text-gray-700 hover:text-primary font-medium py-2">Developers</a>
                <a href="contact.html" class="block text-gray-700 hover:text-primary font-medium py-2">Contact Us</a>
                <div class="pt-4 border-t border-gray-200">
                    <button class="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Get Early Access
                    </button>
                </div>
            </div>
        `;

  nav.appendChild(mobileMenu);
 }
});

function toggleMobileMenu() {
 const mobileMenu = document.getElementById("mobile-menu");
 const button = document.querySelector(".mobile-menu-button i");

 if (mobileMenu) {
  if (mobileMenu.classList.contains("hidden")) {
   mobileMenu.classList.remove("hidden");
   button.className = "fa-solid fa-times";
  } else {
   mobileMenu.classList.add("hidden");
   button.className = "fa-solid fa-bars";
  }
 }
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
 const links = document.querySelectorAll('a[href^="#"]');

 links.forEach((link) => {
  link.addEventListener("click", function (e) {
   e.preventDefault();

   const targetId = this.getAttribute("href");
   const targetElement = document.querySelector(targetId);

   if (targetElement) {
    const headerHeight = document.getElementById("header").offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight - 20;

    window.scrollTo({
     top: targetPosition,
     behavior: "smooth",
    });
   }
  });
 });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (e) {
 const mobileMenu = document.getElementById("mobile-menu");
 const mobileMenuButton = document.querySelector(".mobile-menu-button");

 if (
  mobileMenu &&
  mobileMenuButton &&
  !mobileMenu.contains(e.target) &&
  !mobileMenuButton.contains(e.target)
 ) {
  mobileMenu.classList.add("hidden");
  const button = mobileMenuButton.querySelector("i");
  if (button) {
   button.className = "fa-solid fa-bars";
  }
 }
});

// Handle window resize
window.addEventListener("resize", function () {
 const mobileMenu = document.getElementById("mobile-menu");
 if (window.innerWidth >= 768 && mobileMenu) {
  mobileMenu.classList.add("hidden");
  const button = document.querySelector(".mobile-menu-button i");
  if (button) {
   button.className = "fa-solid fa-bars";
  }
 }
});

// FAQ accordion functionality
document.addEventListener("DOMContentLoaded", function () {
 const faqItems = document.querySelectorAll("#faq-section .border");

 faqItems.forEach((item) => {
  item.addEventListener("click", function () {
   const chevron = this.querySelector("i");
   const isOpen = chevron.classList.contains("rotate-180");

   // Close all other items
   faqItems.forEach((otherItem) => {
    if (otherItem !== this) {
     const otherChevron = otherItem.querySelector("i");
     otherChevron.classList.remove("rotate-180");
     const content = otherItem.querySelector(".faq-content");
     if (content) {
      content.style.display = "none";
     }
    }
   });

   // Toggle current item
   if (isOpen) {
    chevron.classList.remove("rotate-180");
    const content = this.querySelector(".faq-content");
    if (content) {
     content.style.display = "none";
    }
   } else {
    chevron.classList.add("rotate-180");
    const content = this.querySelector(".faq-content");
    if (content) {
     content.style.display = "block";
    }
   }
  });
 });
});

// All form handling is now done directly in the HTML files
// This keeps the code organized and prevents conflicts
