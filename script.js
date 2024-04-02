document.addEventListener("DOMContentLoaded", function() {
    const indexNav = document.getElementById("index-nav");
    const sections = document.querySelectorAll("section");
    const ol = document.createElement("ol");

    sections.forEach(function(section) {
        const h2 = section.querySelector("h2");
        if (h2) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = h2.textContent;
            a.href = "#" + h2.id;
            a.addEventListener("click", function(event) {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace
                section.scrollIntoView({ behavior: "smooth" }); // Desplaza suavemente hacia la sección
            });
            li.appendChild(a);
            ol.appendChild(li);
        }
    });

    indexNav.appendChild(ol);
});

