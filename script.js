// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = "🌙 Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.top = "10px";
toggleButton.style.right = "10px";
toggleButton.style.padding = "8px 12px";
toggleButton.style.cursor = "pointer";
toggleButton.style.background = "#6e8efb";
toggleButton.style.color = "white";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.innerText = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Scroll-to-Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = "⬆ Top";
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "10px";
scrollTopButton.style.right = "10px";
scrollTopButton.style.padding = "8px 12px";
scrollTopButton.style.cursor = "pointer";
scrollTopButton.style.display = "none";
scrollTopButton.style.background = "#6e8efb";
scrollTopButton.style.color = "white";
scrollTopButton.style.border = "none";
scrollTopButton.style.borderRadius = "5px";
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode CSS (Added dynamically)
const darkModeStyle = document.createElement("style");
darkModeStyle.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode nav ul li a, .dark-mode #contact a {
        color: #a3bffa;
    }
    .dark-mode .project {
        background: #333;
        color: white;
    }
`;
document.head.appendChild(darkModeStyle);
