
// Função para redirecionar para o WhatsApp com mensagem sobre o produto
function redirectToWhatsApp(productName) {
    const phoneNumber = "5571981326546"; // Substitua pelo número real
    const message = `Olá, gostaria de adquirir o produto: ${productName}. Poderia me informar mais detalhes?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Adiciona smooth scrolling para todos os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona classe ativa ao item do menu conforme scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ...existing code...
document.querySelectorAll('.product-img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function (e) {
        e.stopPropagation();
        document.getElementById('zoomImg').src = this.src;
        document.getElementById('zoomModal').style.display = 'block';
    });
});

function closeZoomModal() {
    document.getElementById('zoomModal').style.display = 'none';
}

// Fecha o modal ao clicar no X
document.querySelector('.zoom-close').onclick = closeZoomModal;

// Fecha o modal ao apertar ESC
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closeZoomModal();
});
