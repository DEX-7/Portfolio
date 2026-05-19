// Navbar mobile toggle
        const navToggle = document.getElementById("navToggle");
        const navLinks = document.getElementById("navLinks");
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
        // Close nav on link click (mobile)
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () =>
                navLinks.classList.remove("active")
            );
        });

        // 3D Parallax for cards and hero
        VanillaTilt.init(document.querySelectorAll(".parallax-tilt"), {
            max: 12,
            speed: 600,
            glare: true,
            "max-glare": 0.18,
            scale: 1.04,
        });

        // Parallax background effect for hero
        const heroBg = document.getElementById("heroBg");
        window.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        });

        // Project card flip on hover (for touch, flip on tap)
        document.querySelectorAll(".project-card").forEach((card) => {
            let inner = card.querySelector(".project-inner");
            card.addEventListener("touchstart", function (e) {
                inner.style.transform =
                    inner.style.transform === "rotateY(180deg)"
                        ? ""
                        : "rotateY(180deg)";
            });
        });

        // Animate skill bars on scroll into view
        function animateSkillBars() {
            document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight - 60) {
                    bar.style.width = bar
                        .getAttribute("style")
                        .match(/width:\s*([\d.]+%)/)[1];
                }
            });
        }
        window.addEventListener("scroll", animateSkillBars);
        window.addEventListener("DOMContentLoaded", animateSkillBars);

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" });
                }
            });
        });
