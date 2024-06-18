import { useEffect } from 'react';
import './slide.css';
import { Grid } from '@mui/material'

const Slide = () => {
    useEffect(() => {
        const images = [
            {
                src: 'https://media.ppa.com.br/images/medium/PPA_Cancelas_K1Jetflex_2022_03_1683028050676.webp',
                width: '150px',
                height: '150px',
                text: 'Explore a nova era da segurança com Cancela KD2.',
                title: 'Cancela KD2',
                textMarginLeft: '0px',
            },
            {
                src: 'https://media.ppa.com.br/images/medium/PPA_Fechaduras_Traver_01_2023_01_500_x_500_1680632696554.webp',
                width: '150px',
                height: '150px',
                text: 'Automatizador de última geração para portões eficientes.',
                title: 'Automatizador Deslizante',
                textMarginLeft: '-120px'
            },
            {
                src: 'https://media.ppa.com.br/images/medium/PPA_Dz-Ind-Legero_052023_1688560994542.webp',
                width: '150px',
                height: '150px',
                text: 'Fechaduras Traver: A escolha perfeita para sua casa segura.',
                title: 'Traver 90',
                textMarginLeft: '-68px'
            },
            {
                src: 'https://media.ppa.com.br/images/medium/PPA_Fechaduras_Traver_01_2023_01_500_x_500_1680632696554.webp',
                width: '150px',
                height: '150px',
                text: 'Explore a nova era da segurança com Cancela KD2.',
                title: 'Cancela KD2',
                textMarginLeft: '0px'
            },
        ];

        let currentIndex = 0;

        function showNextImage() {
            const slider = document.getElementById('image-slider');
            if (!slider) return;

            slider.innerHTML = ''; // Limpar o slider para a nova imagem e texto

            const slideContainer = document.createElement('div');
            const img = document.createElement('img');
            const currentImage = images[currentIndex];
            img.src = currentImage.src;
            img.style.width = currentImage.width;
            img.style.height = currentImage.height;

            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container'); // Adiciona classe ao contêiner de texto

            // Aplicar a margem esquerda configurada para o texto, se fornecida
            if (currentImage.textMarginLeft) {
                textContainer.style.marginLeft = currentImage.textMarginLeft;
            }

            const title = document.createElement('span');
            title.textContent = currentImage.title;
            title.classList.add('title'); // Aplica a classe 'title'

            const text = document.createElement('span');
            text.textContent = currentImage.text;
            text.classList.add('description'); // Aplica a classe 'description'

            textContainer.appendChild(title);
            textContainer.appendChild(text);

            slideContainer.appendChild(img);
            slideContainer.appendChild(textContainer);
            slider.appendChild(slideContainer);

            setTimeout(() => {
                slideContainer.style.transform = 'translateX(0)';
            }, 100);

            currentIndex = (currentIndex + 1) % images.length;
            setTimeout(showNextImage, 5000);
        }

        // Inicia a exibição das imagens quando o componente é montado
        showNextImage();
    }, []);

    return (
        <div className="slide page-header">
            <Grid item className="clip-part" style={{ position: 'relative', marginLeft: '10px' }}>
                <div className='slideRodando'>
                    <img className="background-image" src="https://st3.depositphotos.com/3591429/18431/i/450/depositphotos_184311644-stock-photo-white-background-template-copy-space.jpg" alt="Fundo" />
                    <div id="image-slider" style={{ marginLeft: '125px' }}>
                        {/* Imagens e textos serão adicionados aqui */}
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default Slide;

