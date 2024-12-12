window.onload = function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
        var button = document.createElement('button');
        button.innerText = 'Boas Festas!';
        button.classList.add('pedidoOperador', 'btn', 'btn-success', 'js-shortcut-blank');
        button.style.fontSize = '14px';
        button.style.padding = '10px 10px';
        button.style.margin = '0px';
        button.style.width = 'auto';
        button.style.display = 'inline-block';

        button.onclick = function () {
            Swal.fire({
                title: "🎄 Feliz Natal e um Próspero Ano Novo! 🎆",
                text: "Desejo que este Natal seja repleto de amor, alegria e união, e que o ano novo traga novas conquistas e realizações para você e sua família!",
                imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20241025/pngtree-merry-christmas-2024-image_16452006.jpg",
                imageWidth: 300,
                imageHeight: 400,
                background: "#ffe7d1",
                color: "#d10000",
                confirmButtonText: "🎁 Obrigado!",
                footer: "<a href='https://pt.wikipedia.org/wiki/Natal' style='color:#d10000'>Saiba mais sobre o Natal</a>"
            });
        };

        var buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'fixed'; // Torna o botão flutuante
        buttonContainer.style.right = '10px'; // Alinha à direita
        buttonContainer.style.top = '50%'; // Centraliza verticalmente
        buttonContainer.style.transform = 'translateY(-50%)'; // Ajusta para ficar exatamente ao meio
        buttonContainer.style.zIndex = '9999'; // Garante que está acima de outros elementos

        buttonContainer.appendChild(button);

        // Adiciona o botão ao corpo da página
        document.body.appendChild(buttonContainer);
    };
    document.head.appendChild(script);
};
