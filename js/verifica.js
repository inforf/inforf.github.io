const CHECK_INTERVAL = 1000; // 1 segundo

function verificarElementos() {
    const divListaIntegracoes = document.querySelector("#divListaIntegracoes");
    const avisoIfoodInteg = document.querySelector("#avisoIfoodInteg");
    const abrefechacaixa = document.querySelector("#abrefechacaixa");

    if (!divListaIntegracoes && avisoIfoodInteg) {
        avisoIfoodInteg.remove();
    } else if (divListaIntegracoes && abrefechacaixa) {
        const avisoRect = avisoIfoodInteg?.getBoundingClientRect();
        if (avisoRect) {
            abrefechacaixa.style.marginTop = "60px";
        }
    }
}

setInterval(verificarElementos, CHECK_INTERVAL);
