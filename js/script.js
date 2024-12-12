nterwindow.onload = function() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
        var button = document.createElement('button');
        button.innerText = 'Clique aqui';
        button.classList.add('pedidoOperador', 'btn', 'btn-success', 'js-shortcut-blank');
        button.style.fontSize = '16px';
        button.style.padding = '10px 10px';
        button.style.marginTop = '10px';
        button.style.marginRight = '20px';  
        button.style.position = 'center';
        button.style.width = 'auto';
        button.style.display = 'inline-block';

        button.onclick = function() {
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
        buttonContainer.classList.add('navbar-header');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'flex-start'; 
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.marginLeft = 'auto';  
        buttonContainer.style.marginTop = '20px';
        buttonContainer.style.paddingRight = '20px';  
        buttonContainer.appendChild(button);

        var checkElementExist = setInterval(function() {
            var targetElement = document.querySelector('div.row:nth-child(2)');
            
            if (targetElement) {
                targetElement.style.display = 'flex';
                targetElement.style.justifyContent = 'flex-end';
                targetElement.style.alignItems = 'center';  
                targetElement.style.position = 'relative';

                targetElement.appendChild(buttonContainer);
                clearInterval(checkElementExist);
            }
        }, 100);
    };
    document.head.appendChild(script);
};
