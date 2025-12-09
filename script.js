console.log('Synova Loaded');

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("synovaForm");
    const message = document.getElementById("formMessage");

    if (!form || !message) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const empresa = form.empresa.value.trim();
        const telefone = form.telefone.value.trim();
        const segmento = form.segmento.value;

        if (!nome || !email || !empresa || !telefone || !segmento) {
            message.textContent = "⚠ Preencha todos os campos!";
            message.style.display = "block";
            return;
        }

        const texto =
`🚀 *Novo lead Synova Digital*  

👤 *Nome:* ${nome}
📩 *E-mail:* ${email}
🏢 *Empresa:* ${empresa}
📱 *Telefone:* ${telefone}
📊 *Segmento:* ${segmento}

👉 Entre em contato agora!`;

        const numeroWhats = "5511993674216";
        const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;

        // Mostrar confirmação visual
        message.textContent = "✔ Seus dados foram enviados com sucesso!";
        message.style.display = "block";

        // Abrir WhatsApp
        window.open(url, "_blank");

        // Resetar form após envio
        form.reset();

        setTimeout(() => {
            message.style.display = "none";
        }, 4000);
    });

    // MENU MOBILE
    const menuToggle = document.getElementById("menuToggle");
    const menuNav = document.getElementById("menuNav");

    if (menuToggle && menuNav) {

        const overlay = document.createElement("div");
        overlay.classList.add("menu-overlay");
        document.body.appendChild(overlay);

        function closeMenu() {
            menuToggle.classList.remove("active");
            menuNav.classList.remove("open");
            overlay.classList.remove("show");
        }

        function toggleMenu() {
            menuToggle.classList.toggle("active");
            menuNav.classList.toggle("open");
            overlay.classList.toggle("show");
        }

        menuToggle.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", closeMenu);

        document.querySelectorAll("nav.menu a").forEach(link =>
            link.addEventListener("click", closeMenu)
        );
    }

});
