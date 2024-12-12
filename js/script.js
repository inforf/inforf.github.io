var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
script.onload = function () {
   
    Swal.fire({
        title: "🎄 Feliz Natal! 🎅",
        text: "Que seu Natal seja repleto de alegria, amor e paz!",
        imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20241025/pngtree-merry-christmas-2024-image_16452006.jpg", 
        imageWidth: 300,
        imageHeight: 400,
        background: "#ffe7d1",
        color: "#d10000",
        confirmButtonText: "🎁 Obrigado!",
        footer: "<a href='https://pt.wikipedia.org/wiki/Natal' style='color:#d10000'>Saiba mais sobre o Natal</a>"
    });
};
document.head.appendChild(script);
