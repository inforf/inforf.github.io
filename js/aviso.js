// Função para criar o link abaixo do elemento .tituloLista
function adicionarLinkAviso() {
    const tituloLista = document.querySelector('.tituloLista');

    if (tituloLista && !document.getElementById('linkAvisoImportante')) {
        const link = document.createElement('a');
        link.id = 'linkAvisoImportante';
        link.href = '#';
        link.textContent = 'Aviso Importante';
        link.style.display = 'block';
        link.style.marginTop = '10px';
        link.style.color = '#007BFF';
        link.style.textDecoration = 'none';
        link.style.cursor = 'pointer';

        // Ao clicar no link, abre o modal
        link.addEventListener('click', (event) => {
            event.preventDefault();
            criarModal();
        });

        tituloLista.insertAdjacentElement('afterend', link);
    }
}

// Função para criar o modal
function criarModal() {
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
                    Prezados clientes,<br><br>
                    Estamos constantemente trabalhando para aprimorar a integração do nosso sistema Delivoro com o iFood, visando oferecer a melhor experiência possível. Por isso, implementamos uma atualização importante:
                    <br><br>
                    <strong>A partir de agora, o status de "Entregue" nos pedidos será atualizado automaticamente pelo iFood, com base na informação enviada diretamente pela plataforma.</strong> 
                    <br><br>
                    Essa mudança elimina a necessidade de alteração manual pelo atendente, garantindo maior precisão nos dados entre os sistemas. Essa melhoria corrige problemas identificados anteriormente e reforça nosso compromisso com a qualidade e eficiência no gerenciamento de pedidos.
                    <br><br>
                    Para mais informações ou em caso de dúvidas, entre em contato com nosso suporte pelo WhatsApp: 
                    <a href="https://wa.me/5516981845488" target="_blank" style="color: #007BFF; text-decoration: none;">
                        <strong>+55 16 98184-5488</strong>
                    </a>.
                    <br><br>
                    Agradecemos pela confiança!
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
}

// Cria um observador para monitorar mudanças no DOM
const observer = new MutationObserver(() => {
    adicionarLinkAviso();
});

// Configura o observador para monitorar o corpo do documento
observer.observe(document.body, { childList: true, subtree: true });

// Adiciona o link pela primeira vez
adicionarLinkAviso();