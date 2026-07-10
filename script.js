const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: [
        {
            texto:"Alternativa 1", 
            afirmacao: "afirmacao"
        },
        {
             texto:"Alternativa 2", 
            afirmacao: "afirmacao"
        }
    ]
    },
      {
    enunciado: "Pergunta 2",
    alternativas: [
    {
            texto:"Alternativa 1", 
            afirmacao: "afirmacao"
        },
        {
             texto:"Alternativa 2", 
            afirmacao: "afirmacao"
        }
    ]
    },
    {
    enunciado: "Pergunta 2",
    alternativas: [
    {
            texto:"Alternativa 1", 
            afirmacao: "afirmacao"
        },
        {
             texto:"Alternativa 2", 
            afirmacao: "afirmacao"
        }
    ]
    },
    {
    enunciado: "Pergunta 2",
    alternativas: [
    {
            texto:"Alternativa 1", 
            afirmacao: "afirmacao"
        },
        {
             texto:"Alternativa 2", 
            afirmacao: "afirmacao"
        }
    ]
    },
    {
    enunciado: "Pergunta 2",
    alternativas: [
    {
            texto:"Alternativa 1", 
            afirmacao: "afirmacao"
        },
        {
             texto:"Alternativa 2", 
            afirmacao: "afirmacao"
        }
    ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}

function mostraAlternativa(){
   for(const alternativa of perguntaAtual.alternativa) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", function(){
        atual++;
        mostraPergunta();
    })
    caixaAlternativas.appendChild(botaoAlternativa);
   }
}

mostraPergunta();

