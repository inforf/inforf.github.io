const observer = new MutationObserver(() => {
    const tituloLista = document.querySelector('.tituloLista');
    if (tituloLista && !document.getElementById('linkAvisoImportante')) {
        const link = document.createElement('a');
        link.id = 'linkAvisoImportante';
        link.href = '#';
        link.textContent = 'Aviso Importante! Clique aqui';
        link.style.display = 'block';
        link.style.marginTop = '10px';
        link.style.color = 'red';
        link.style.textDecoration = 'none';
        link.style.cursor = 'pointer';
        link.style.fontSize = '18px';
        link.style.textAlign = 'center';

        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (!document.getElementById('meuModalTexto')) {
                const style = document.createElement('style');
                style.textContent = `
                    #meuModalTexto {
                        position: fixed;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background-color: rgba(0, 0, 0, 0.7);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 9999;
                    }
                    #meuModalConteudo {
                        background-color: #fff;
                        padding: 20px;
                        max-width: 600px;
                        max-height: 80%;
                        overflow-y: auto;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                        font-family: Arial, sans-serif;
                        line-height: 1.5;
                    }
                    #fecharModal {
                        display: block;
                        text-align: right;
                        cursor: pointer;
                        font-size: 18px;
                        color: #333;
                        margin-bottom: 10px;
                    }
                `;
                document.head.appendChild(style);

                const modal = document.createElement('div');
                modal.id = 'meuModalTexto';
                modal.innerHTML = `
                    <div id="meuModalConteudo">
                        <div id="fecharModal">&times; Fechar</div>
                        <h2>Informação Importante</h2>
                        <p>
                            Fizemos melhorias na integração do nosso sistema Delivoro com o iFood. A partir de agora, os pedidos só mudarão para o estado "Entregue" quando essa informação vier diretamente do iFood, e não mais pelo atendente como era antes. 
                            <br><br>
                            Essas melhorias visam uma melhor integração entre os sistemas, corrigem problemas e tornam a experiência de nossos clientes a melhor possível. 
                            <br><br>
                            Se precisar de suporte, entre em contato pelo WhatsApp: <a href="https://wa.me/5516981845488" target="_blank">+55 16 98184-5488</a>.
                        </p>
                    </div>
                `;

                modal.querySelector('#fecharModal').addEventListener('click', () => {
                    modal.remove();
                });

                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });

                document.body.appendChild(modal);
            }
        });

        tituloLista.parentNode.insertBefore(link, tituloLista.nextSibling);
    }
});

observer.observe(document.body, { childList: true, subtree: true });
