// script.js

// Declare as variáveis aqui
const imageUrls = [
    'img/pizza.webp',
    'img/pizza2.webp',
    // Adicione mais URLs de imagens conforme necessário
];

let currentImageIndex = 0;

// Função para alternar a imagem
function changeImage() {
    const pizzaImage = document.getElementById('pizza-image');
    pizzaImage.src = imageUrls[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Chame a função uma vez para iniciar a troca de imagens imediatamente
changeImage();

// Define um intervalo para trocar a imagem a cada 3 segundos (3000 milissegundos)
setInterval(changeImage, 3000);

// script.js
const thumbnails = document.querySelectorAll('.thumbnails li');
const largeImage = document.getElementById('large-image');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Altera a imagem em tamanho grande para a imagem da miniatura clicada
        largeImage.src = `img/large${index + 1}.jpg`;
    });
});

// Defina um array com os títulos e textos das diferentes seções.
const sections = [
    { title: "História", text: "A Delícias da Pizza nasceu de uma paixão compartilhada por um grupo de amigos, que sempre acreditaram que uma boa pizza pode unir as pessoas e criar momentos memoráveis. Fundada em 2010, nossa pizzaria começou como um pequeno negócio familiar em um cantinho acolhedor da cidade, e desde então, temos trabalhado incansavelmente para criar pizzas que conquistam o coração dos nossos clientes." },
    { title: "Missão", text: "Nossa missão é proporcionar experiências gastronômicas incríveis por meio das melhores pizzas da cidade. Acreditamos que a qualidade é a chave para o sucesso, e usamos apenas os ingredientes mais frescos e de alta qualidade para criar nossas deliciosas pizzas. Queremos que cada cliente que experimente nossas pizzas sinta-se satisfeito e feliz." },
    { title: "Nossas Pizzas", text: "Na Pizzaria Nuvem, acreditamos que a autenticidade é essencial. Nossos pizzaiolos talentosos seguem receitas tradicionais italianas e têm um profundo conhecimento da arte de fazer pizza. Oferecemos uma ampla variedade de sabores e opções para atender a todos os gostos, desde as clássicas margheritas até combinações únicas de ingredientes. Seja você um amante de queijo, um devorador de carne, um vegetariano ou alguém que gosta de experimentar algo novo, temos uma pizza especial para você." },
    { title: "Ingredientes Frescos", text: "A qualidade dos ingredientes é o que nos diferencia. Trabalhamos em estreita colaboração com fornecedores locais para garantir que todos os ingredientes sejam frescos e da mais alta qualidade. Nossas massas são preparadas diariamente, e nossos molhos são feitos com tomates maduros e ervas frescas. Acreditamos que quando você usa os melhores ingredientes, o resultado final é uma pizza que encanta os sentidos." }
  ];
  
  // Selecione os elementos HTML que você deseja atualizar.
  const aboutSection = document.querySelector('.about');
  const sectionTitle = aboutSection.querySelector('.section-title');
  const sectionText = aboutSection.querySelector('.section-text');
  
  let currentIndex = 0;
  
  function changeSectionText() {
    // Atualize o título e o texto da seção "about" com os valores do array.
    sectionTitle.textContent = sections[currentIndex].title;
    sectionText.textContent = sections[currentIndex].text;
  
    // Atualize o índice para exibir o próximo título e texto na próxima vez.
    currentIndex = (currentIndex + 1) % sections.length;
  }
  
  // Chame a função para exibir o primeiro título e texto imediatamente.
  changeSectionText();
  
  // Agende a troca de título e texto a cada 3 segundos.
  setInterval(changeSectionText, 3000);
 

// Formulario script
 let formulario = document.getElementById("submit");

  formulario.addEventListener("click", ()=> {
    alert("Pizza na Nuvem agradece seu contato. Responderemos em breve no seu email.")
 });
