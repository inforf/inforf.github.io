window.onload = function () {
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.onload = function () {
        var link = document.createElement('a');
        link.innerText = '🎄Boas Festas!🎆';
        link.href = '#';
        link.style.display = 'block';
        link.style.textAlign = 'center';
        link.style.fontSize = '20px';
        link.style.color = '#d10000';
        link.style.fontWeight = 'bold';
        link.style.marginTop = '10px';
        link.style.textDecoration = 'none';
        link.style.cursor = 'pointer';

        link.onclick = function (event) {
            event.preventDefault();
            Swal.fire({
               title: "<span style='font-size: 24px;'>🎄 Feliz Natal e um Próspero Ano Novo! 🎆</span>",
                html: "<p style='font-size: 18px;'>Desejamos que este Natal seja repleto de amor, alegria e união, e que o ano novo traga novas conquistas e realizações para você e sua família!</p>",
                imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20241025/pngtree-merry-christmas-2024-image_16452006.jpg",
                imageWidth: 400,
                imageHeight: 400,
                background: "#ffe7d1",
                color: "#d10000",
                confirmButtonText: "🎁 Obrigado!",
                width: '700px' 
            });
        };

        var targetElement = document.querySelector('#divListaLoja > div:nth-child(6)');
        if (targetElement) {
            targetElement.style.position = 'relative';
            targetElement.appendChild(link);
        } else {
            console.error("O elemento '#divListaLoja > div:nth-child(6)' não foi encontrado.");
        }
    };
    document.head.appendChild(script);
};
