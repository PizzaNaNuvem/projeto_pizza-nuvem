// script.js

// Declaração das variáveis
const imageUrls = [
    'img/pizza.webp',
    'img/pizza2.webp',
];

let currentImageIndex = 0;

// Função para alternar a imagem
function changeImage() {
    const pizzaImage = document.getElementById('pizza-image');
    pizzaImage.src = imageUrls[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

if (document.getElementById('pizza-image')) {
    changeImage();
    setInterval(changeImage, 3000);
}


const thumbnails = document.querySelectorAll('.thumbnails li');
const largeImage = document.getElementById('large-image');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Altera a imagem em tamanho grande para a imagem da miniatura clicada
        largeImage.src = `img/large${index + 1}.jpg`;
    });
});

// Array com os títulos e textos das diferentes seções.
const sections = [
    { title: "História", text: "A Pizzaria da Nuvem nasceu de uma paixão compartilhada por um grupo de amigos desenvolvedores, que sempre acreditaram que uma boa pizza pode unir as pessoas e criar momentos memoráveis. Fundada em 2023, nossa pizzaria começou como um pequeno negócio familiar em um cantinho acolhedor da cidade, e desde então, temos trabalhado incansavelmente para criar pizzas que conquistam o coração dos nossos clientes." },
    { title: "Missão", text: "Nossa missão é proporcionar experiências gastronômicas incríveis por meio das melhores pizzas da cidade. Acreditamos que a qualidade é a chave para o sucesso, e usamos apenas os ingredientes mais frescos e de alta qualidade para criar nossas deliciosas pizzas. Queremos que cada cliente que experimente nossas pizzas sinta-se satisfeito e feliz." },
    { title: "Nossas Pizzas", text: "Na Pizzaria da Nuvem, acreditamos que a autenticidade é essencial. Nossos pizzaiolos talentosos seguem receitas tradicionais italianas e têm um profundo conhecimento da arte de fazer pizza. Oferecemos uma ampla variedade de sabores e opções para atender a todos os gostos, desde as clássicas margheritas até combinações únicas de ingredientes. Seja você um amante de queijo, um devorador de carne, um vegetariano ou alguém que gosta de experimentar algo novo, temos uma pizza especial para você." },
    { title: "Ingredientes Frescos", text: "A qualidade dos ingredientes é o que nos diferencia. Trabalhamos em estreita colaboração com fornecedores locais para garantir que todos os ingredientes sejam frescos e da mais alta qualidade. Nossas massas são preparadas diariamente, e nossos molhos são feitos com tomates maduros e ervas frescas. Acreditamos que quando você usa os melhores ingredientes, o resultado final é uma pizza que encanta os sentidos." }
  ];
// == Validação FORM == 
let inputCorreto = {
    nomeCompleto: false,
    email: false,
    assunto: false,
    telefone: false,
    mensagem: false
}

// Validação - Nome
const nomeCompleto = document.getElementById("nomeCompleto")
nomeCompleto.addEventListener("change", (e) => {
    let valorNome = e.target.value;
    if (valorNome.trim() !== '') {
        inputCorreto.nomeCompleto = true;
    } else {
        inputCorreto.nomeCompleto = false;
        alert("Por favor, preencha o campo Nome Completo.");
    }
})

// Validação - Email
const email = document.getElementById("email")
email.addEventListener("change", (e) => {
    let valorEmail = e.target.value;
    if (valorEmail.match(/^\S+@\S+\.\S+$/)) {
        inputCorreto.email = true;
    } else {
        inputCorreto.email = false;
        alert("Por favor, insira um endereço de e-mail válido.");
    }
})

// Validação - Assunto
const assunto = document.getElementById("assunto")
assunto.addEventListener("change", (e) => {
    let valorAssunto = e.target.value;
    if (valorAssunto.trim() !== '') {
        inputCorreto.assunto = true;
    } else {
        inputCorreto.assunto = false;
        alert("Por favor, preencha o campo Assunto.");
    }
})

// Validação - Telefone
const telefone = document.getElementById("telefone")
telefone.addEventListener("change", (e) => {
    let valorTelefone = e.target.value;
    if (valorTelefone.trim() !== '') {
        inputCorreto.telefone = true;
    } else {
        inputCorreto.telefone = false;
        alert("Por favor, preencha o campo Telefone.");
    }
})

const mensagem = document.getElementById("mensagem")
mensagem.addEventListener("change", (e) => {
    let valorMsg = e.target.value;
    if (valorMsg.trim() !== '') {
        inputCorreto.mensagem = true;
    } else {
        inputCorreto.mensagem = false;
        alert("Por favor, preencha o campo Mensagem.");
    }
})

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
    if (Object.values(inputCorreto).every(value => value)) {
        alert("Email enviado, entraremos em contato em breve!");
    } else {
        e.preventDefault();
    }
})
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


 
// Menu mobile
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "icon/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "icon/close.png";
    }

}