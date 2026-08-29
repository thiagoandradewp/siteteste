// ==============================
// MENU MOBILE
// ==============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


// ==============================
// FECHAR MENU AO CLICAR NO LINK
// ==============================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// ==============================
// DARK MODE
// ==============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// ==============================
// CARREGAR TEMA SALVO
// ==============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


// ==============================
// ANO AUTOMÁTICO DO FOOTER
// ==============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ==============================
// ANIMAÇÃO DAS HABILIDADES
// ==============================

const progressBars = document.querySelectorAll(".progress-bar");

const animateSkills = () => {
    progressBars.forEach(bar => {
        const progress = bar.dataset.progress;
        bar.style.width = `${progress}%`;
    });
};


// ==============================
// OBSERVER PARA ANIMAR AO ENTRAR
// ==============================

const skillsSection = document.getElementById("habilidades");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.disconnect();
            }
        });
    },
    {
        threshold: 0.2
    }
);

observer.observe(skillsSection);


// ==============================
// ANIMAÇÃO DE ENTRADA DOS ELEMENTOS
// ==============================

const animatedElements = document.querySelectorAll(
    ".timeline-item, .education-card, .skill"
);

animatedElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const animationObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                animationObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(element => {
    animationObserver.observe(element);
});
