const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {

        enunciado: "De acordo com a Band News FM Curitiba, mais de 30% dos jovens ainda não sabem qual profissão seguir. Você tem conhecimento de qual área deseja seguir na faculdade?",        enunciado: "a maioria das pessoas tem amizades superficiais e poucas investem seu tempo nas redes em atividades realmente importantes, e outras apenas perdem tempo nas redes, não adicionando conhecimentos nem aproveitando tudo oque a tecnologia pode nos proporcionar.",

        alternativas: [
            {

                texto: "sim",
                afirmacao: "Otimo! É preciso ter conhecimento de qual área seguir, para garantir um futuro mais próspero. ",

                texto: "você investe ou perde tempo nas redes sociais?",
                afirmacao: "eu invisto procurando e pesquisando imformações que tenho curiosidade, aprendendo novas coisas. "

            },
            {

                texto: "não",
                afirmacao: "É preciso ter conhecimento das áreas, para ver qual mais se encaixa com seu perfil, para que, assim, garanta um futuro mais próspero.",

                texto: "ou você pensa que as redes foram criadas apenas para distrações, para passar o tempo e nada mais.",
                afirmacao: "penso que as redes foram criadas apenas para distrações, e passar tempo"

            }
        ]
    },
    {

        enunciado: "Dentro dos cursos superiores, qual área mais se encaixa com você?",

        enunciado: "uma pesquisa internacional feita por um site de tecnologia mostrou que os brasileiros são praticamente recordistas em tempo conectado a telas de celulasres ou outros eletrônicos. apopulação fica em média nove horas e meia por dia.",

        alternativas: [
            {

                texto: "Área de humanas",
                afirmacao: "Existem muitos ótimos cursos na área de humanas, sendo eles: Direito, pedagogia, psicologia, jornalismo, entre outros.",

                texto: "você fica mais de 9hrs investindo seu tempo nas redes? E você acha que está certo?",
                afirmacao: "estou certo se estou aprendendo e investindo o meu tempo nisso.  "

            },
            {

                texto: "Área de exatas",
                afirmacao: "Existem muitos ótimos cursos na área de exatas, sendo eles: Engenharia, arquitetura, gestão financeira, matematica, entre outros.",

                texto: "você fica mais de 9hrs nas redes por distrações? E você acha que está certo?",
                afirmacao: "acho que estou certo pois gosto de passar meu tempo nas tecnologias"

            }
        ]
    },
    {

        enunciado: "As faculdades EAD estão ganhando cada vez mais vizibilidade no mundo atual, você teria interesse em se matricular em uma faculdade online?",

        enunciado: "",

        alternativas: [
            {
                texto: "Sim",
                afirmacao: "É uma ótima opção para quem procura conforto e praticidade."
            },
            {
                texto: "Não",
                afirmacao: "Compreendo, as faculdades presenciais trazem mais experiências, e te prepara ainda mais para um futuro na área."
            }
        ]
    },
   
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
