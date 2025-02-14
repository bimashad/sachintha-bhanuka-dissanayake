document.addEventListener("DOMContentLoaded", function() {
    console.log("SB Dissanayake Website Loaded Successfully");

    // Fade-in animation for sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.transition = "opacity 1s ease-out, transform 1s ease-out";
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Initial check

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});


