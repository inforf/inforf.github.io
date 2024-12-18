// Intervalo de verificação em milissegundos
const CHECK_INTERVAL = 1000; // 1 segundo

function verificarElementos() {
    const divListaIntegracoes = document.querySelector("#divListaIntegracoes");
    const avisoIfoodInteg = document.querySelector("#avisoIfoodInteg");
    const abrefechacaixa = document.querySelector("#abrefechacaixa");

    if (!divListaIntegracoes) {
        if (avisoIfoodInteg) {
            // Remove o elemento #avisoIfoodInteg se #divListaIntegracoes não existir
            avisoIfoodInteg.remove();
        }
    } else if (divListaIntegracoes && abrefechacaixa) {
        // Ajusta o posicionamento de #abrefechacaixa para evitar sobreposição
        if (avisoIfoodInteg) {
            const avisoRect = avisoIfoodInteg.getBoundingClientRect();
            const divListaRect = divListaIntegracoes.getBoundingClientRect();

            // Calcula a posição para evitar sobreposição
            abrefechacaixa.style.position = "absolute";
            abrefechacaixa.style.top = `${Math.max(avisoRect.bottom, divListaRect.bottom) + 10}px`; // 10px abaixo do maior
            abrefechacaixa.style.left = `${divListaRect.left}px`; // Alinha com #divListaIntegracoes
        } else {
            // Caso #avisoIfoodInteg não exista, posiciona baseado apenas em #divListaIntegracoes
            const divListaRect = divListaIntegracoes.getBoundingClientRect();
            abrefechacaixa.style.position = "absolute";
            abrefechacaixa.style.top = `${divListaRect.bottom + 10}px`;
            abrefechacaixa.style.left = `${divListaRect.left}px`;
        }
    }
}

// Configura a verificação periódica
setInterval(verificarElementos, CHECK_INTERVAL);
