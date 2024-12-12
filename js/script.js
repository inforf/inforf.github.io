window.onload = function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
        var button = document.createElement('button');
        button.innerText = '';
        button.classList.add('pedidoOperador', 'js-shortcut-blank');
        button.style.width = '100px';
        button.style.height = '120px';
        button.style.backgroundColor = 'green';
        button.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        button.style.position = 'absolute';
        button.style.border = 'none';
        button.style.cursor = 'pointer';

        var decoration = document.createElement('div');
        decoration.style.width = '20px';
        decoration.style.height = '20px';
        decoration.style.backgroundColor = 'red';
        decoration.style.borderRadius = '50%';
        decoration.style.position = 'absolute';
        decoration.style.top = '-10px';
        decoration.style.left = 'calc(50% - 10px)';

        var trunk = document.createElement('div');
        trunk.style.width = '20px';
        trunk.style.height = '30px';
        trunk.style.backgroundColor = '#8B4513';
        trunk.style.position = 'absolute';
        trunk.style.bottom = '-30px';
        trunk.style.left = 'calc(50% - 10px)';

        button.appendChild(decoration);
        button.appendChild(trunk);

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
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.right = '10px';
        buttonContainer.style.top = '50%';
        buttonContainer.style.transform = 'translateY(-50%)';
        buttonContainer.style.zIndex = '9999';

        buttonContainer.appendChild(button);
        document.body.appendChild(buttonContainer);
    };
    document.head.appendChild(script);
};
