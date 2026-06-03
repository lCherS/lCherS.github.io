document.addEventListener('DOMContentLoaded', () => {
    // 1. Geração dos elementos gráficos de fundo (Bolhas flutuantes)
    const bgContainer = document.getElementById('bg-elements');
    const colors = [
        'rgba(59, 130, 246, 0.15)', // Azul primário
        'rgba(147, 197, 253, 0.15)', // Azul claro
        'rgba(167, 139, 250, 0.1)'   // Roxo suave
    ];

    // Cria 6 formas flutuantes dinamicamente
    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        
        // Tamanhos, posições e atrasos de animação aleatórios
        const size = Math.random() * 300 + 100; // Entre 100px e 400px
        const posX = Math.random() * 100; // 0% a 100% da tela
        const posY = Math.random() * 100; 
        const delay = Math.random() * 5; // Atraso na animação
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Aplicando estilos
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${posX}vw`;
        shape.style.top = `${posY}vh`;
        shape.style.background = `linear-gradient(135deg, ${color}, transparent)`;
        shape.style.animationDelay = `${delay}s`;
        shape.style.animationDuration = `${Math.random() * 10 + 10}s`; // Entre 10s e 20s

        bgContainer.appendChild(shape);
    }
});
