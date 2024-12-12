var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
script.onload = function () {
    
    var button = document.createElement('button');
    button.innerText = 'Clique para Feliz Natal!';
    button.style.fontSize = '16px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#ffe7d1';
    button.style.color = '#d10000';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

   
    button.onclick = function() {
        Swal.fire({
            title: "🎄 Feliz Natal! 🎅",
            text: "Que seu Natal seja repleto de alegria, amor e paz!",
            imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20241025/pngtree-merry-christmas-2024-image_16452006.jpg", // Link funcional para uma imagem de Natal
            imageWidth: 300,
            imageHeight: 400,
            background: "#ffe7d1",
            color: "#d10000",
            confirmButtonText: "🎁 Obrigado!",
            footer: "<a href='https://pt.wikipedia.org/wiki/Natal' style='color:#d10000'>Saiba mais sobre o Natal</a>"
        });
    };

  
    document.body.appendChild(button);
};


document.head.appendChild(script);
