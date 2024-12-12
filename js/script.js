window.onload = function() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
        var button = document.createElement('button');
        button.innerText = 'Boas festas!';
        button.classList.add('pedidoOperador', 'btn', 'btn-success', 'js-shortcut-blank');
        button.style.fontSize = '16px';
        button.style.padding = '10px 20px';
        button.style.marginTop = '10px';
        button.style.position = 'relative';
        button.style.width = 'auto';
        button.style.display = 'inline-block';
        button.style.marginBottom = '20px';

        button.onclick = function() {
            Swal.fire({
                title: "🎄 Feliz Natal e um Próspero Ano Novo! 🎆",
                text: "Desejamos que este Natal seja repleto de amor, alegria e união, e que o ano novo traga novas conquistas e realizações para você e sua família!",
                imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20241025/pngtree-merry-christmas-2024-image_16452006.jpg",
                imageWidth: 300,
                imageHeight: 400,
                background: "#ffe7d1",
                color: "#d10000",
                confirmButtonText: "🎁 Obrigado!"
                
            });
        };

        var buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.classList.add('navbar-header');
        //buttonContainer.style.justifyContent = 'center';
       // buttonContainer.style.alignItems = 'center';
        buttonContainer.style.height = '100%';
        buttonContainer.style.width = '100%';
        //buttonContainer.style.marginTop = '20px';

        buttonContainer.appendChild(button);

        var checkElementExist = setInterval(function() {
            var targetElement = document.querySelector('div.row:nth-child(2)');
            
            if (targetElement) {
                targetElement.style.display = 'flex';
                buttonContainer.style.justifyContent = 'flex-end'
                targetElement.style.alignItems = 'center';  
                targetElement.style.position = 'relative';

                targetElement.appendChild(buttonContainer);
                clearInterval(checkElementExist);
            }
        }, 100);
    };
    document.head.appendChild(script);
};
