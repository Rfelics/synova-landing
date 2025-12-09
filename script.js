console.log('Synova Loaded');

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("synovaForm");
    const message = document.getElementById("formMessage");

    if (!form) return; // segurança caso o form não exista

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simular envio
        setTimeout(() => {
            message.style.display = "block";

            form.reset();

            setTimeout(() => {
                message.style.display = "none";
            }, 4000);

        }, 600);
    });

});

document.getElementById("synovaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.nome.value;
    const email = this.email.value;
    const empresa = this.empresa.value;
    const telefone = this.telefone.value;
    const segmento = this.segmento.value;

    const mensagem = 
`🚀 *Novo lead Synova Digital*  

👤 *Nome:* ${nome}
📩 *E-mail:* ${email}
🏢 *Empresa:* ${empresa}
📱 *Telefone:* ${telefone}
📊 *Segmento:* ${segmento}

Entre em contato agora!`;

    const encodedMsg = encodeURIComponent(mensagem);

    const numero = "5511993674216"; // seu número

    // ABRE O WHATSAPP COM A MENSAGEM
    window.open(`https://wa.me/${numero}?text=${encodedMsg}`, "_blank");

    // MOSTRAR MENSAGEM DE SUCESSO
    document.getElementById("formMessage").style.display = "block";

    // limpar campos
    this.reset();

    // esconder mensagem depois de 4s
    setTimeout(() => {
        document.getElementById("formMessage").style.display = "none";
    }, 4000);
});

