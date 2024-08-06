const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mask-form");

function mostrarForm() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function hideForm() {
    form.style.left = "-300px";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("back-to-top");

    // Mostrar o botão quando rolar para baixo
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { // Mostrar botão após 300px de rolagem
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Adicionar funcionalidade ao botão
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});