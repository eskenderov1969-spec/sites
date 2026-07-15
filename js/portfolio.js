/* ============================================
   PORTFOLIO MODULE
============================================ */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

/* ============================================
   FILTER
============================================ */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || filter === category) {

                gsap.to(card, {

                    opacity: 1,

                    scale: 1,

                    duration: .35,

                    display: "block"

                });

            } else {

                gsap.to(card, {

                    opacity: 0,

                    scale: .85,

                    duration: .25,

                    onComplete() {

                        card.style.display = "none";

                    }

                });

            }

        });

    });

});

/* ============================================
   VIDEO PREVIEW
============================================ */

document.querySelectorAll(".project-card").forEach(card => {

    const video = card.querySelector("video");

    if (!video) return;

    card.addEventListener("mouseenter", () => {

        video.play().catch(() => {});

    });

    card.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});

/* ============================================
   CARD ENTRANCE
============================================ */

gsap.from(".project-card", {

    scrollTrigger: {

        trigger: "#portfolio",

        start: "top 75%"

    },

    y: 70,

    opacity: 0,

    stagger: .15,

    duration: .8,

    ease: "power3.out"

});

/* ============================================
   HOVER GLOW
============================================ */

projectCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(59,130,246,.18),
            rgba(255,255,255,.05) 60%
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});
