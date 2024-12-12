window.onload = function() {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
        var button = document.createElement('button');
        button.innerText = 'Clique aqui';
        button.classList.add('pedidoOperador', 'btn', 'btn-success', 'js-shortcut-blank');
        button.style.fontSize = '16px';
        button.style.padding = '10px 10px';
        button.style.margin = '20px';
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
        buttonContainer.style.justifyContent = 'flex-end';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.height = '100%';
        buttonContainer.style.width = 'auto'; 
        buttonContainer.style.marginTop = '20px';
        buttonContainer.style.position = 'relative'; 
        buttonContainer.style.zIndex = '9999'; 

        buttonContainer.appendChild(button);

        var checkElementExist = setInterval(function() {
            var targetElement = document.querySelector('div.row.menu-container-navegacao-links');
            
            if (targetElement) {
                targetElement.style.display = 'flex';  
                targetElement.style.justifyContent = 'flex-start'; 
                targetElement.style.alignItems = 'center';  
                targetElement.style.position = 'relative'; 
                targetElement.style.zIndex = '1'; 

                targetElement.appendChild(buttonContainer);
                clearInterval(checkElementExist);
            }
        }, 100);
    };
    document.head.appendChild(script);
};
