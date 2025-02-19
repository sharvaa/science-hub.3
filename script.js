document.addEventListener("DOMContentLoaded", function () {
    console.log("Вэбсайт амжилттай ачааллаа!");

    function showSection(sectionId) {
        document.querySelectorAll('.science-section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    // Ensure .science-tab elements exist
    const tabs = document.querySelectorAll(".science-tab");
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener("mouseenter", () => {
                tab.style.backgroundColor = "#ffcc00";
                tab.style.color = "black";
            });

            tab.addEventListener("mouseleave", () => {
                if (!tab.classList.contains("active-tab")) {
                    tab.style.backgroundColor = "white";
                    tab.style.color = "#333";
                }
            });

            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active-tab"));
                tab.classList.add("active-tab");
            });
        });
    }
});
