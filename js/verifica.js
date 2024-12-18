// Intervalo de verificação em milissegundos
const CHECK_INTERVAL = 1000; // 1 segundo

function verificarElementos() {
    const divListaIntegracoes = document.querySelector("#divListaIntegracoes");
    const avisoIfoodInteg = document.querySelector("#avisoIfoodInteg");
    const abrefechacaixa = document.querySelector("#abrefechacaixa");

    if (!divListaIntegracoes && avisoIfoodInteg) {
        // Remove o elemento #avisoIfoodInteg se #divListaIntegracoes não existir
        avisoIfoodInteg.remove();
    } else if (divListaIntegracoes && abrefechacaixa) {
        // Ajusta o posicionamento de #abrefechacaixa para evitar sobreposição
        const avisoRect = avisoIfoodInteg?.getBoundingClientRect();
        if (avisoRect) {
            abrefechacaixa.style.marginTop = "60px";
        }
    }
}

// Configura a verificação periódica
setInterval(verificarElementos, CHECK_INTERVAL);
