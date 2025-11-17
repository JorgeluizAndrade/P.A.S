document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('.card')

    const modal = document.getElementById("resultado-modal")
    const fecharModal = document.getElementById("fechar-modal")
    const textoResultado = document.getElementById("texto-resultado")

    function abrirModal(texto) {
        textoResultado.innerHTML = texto
        modal.style.display = "block"
    }

    fecharModal.addEventListener("click", () => {
        modal.style.display = "none"
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();   // <-- ESSENCIAL

        const alimentoSelecionado = document.querySelector("input[name='alimento']:checked")

        const precoKg = parseFloat(alimentoSelecionado.dataset.preco)

        const quantidadeGramas = parseFloat(document.querySelector("#quantidade").value)

        const frequencia = document.querySelector("input[name='frequencia']:checked")
        if (!frequencia) {
            
        }

        let multiplicador = 1

        if (frequencia.value === "diariamente") multiplicador = 365
        if (frequencia.value === "semanalmente") multiplicador = 48
        if (frequencia.value === "mensalmente") multiplicador = 12

        const calculo = (quantidadeGramas / 1000) * precoKg * multiplicador

        abrirModal(`
            Você desperdiça cerca de <strong>R$ ${calculo.toFixed(2)}</strong> por ano 
            jogando fora <strong>${alimentoSelecionado.value}</strong>.
        `)
    })
})
