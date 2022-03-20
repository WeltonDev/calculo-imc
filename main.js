let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');

let textPeso = document.querySelector('#textPeso');
let textAltura = document.querySelector('#textAltura');
let result = document.querySelector('#result');
let description = document.querySelector('#description');
let tratamento = document.querySelector('#tratamento');

let sombra = document.querySelector('.container');

function change() {
    textPeso.textContent = `Peso ${peso.value} kg`;
    textAltura.textContent = `Altura ${altura.value} cm`;

    let imc = (peso.value / ((altura.value * altura.value) / 100) * 100).toFixed(1);
    let classificacao = [
        {
            nivel: 'Subpeso',
            orientacao: 'Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico',
        },
        {
            nivel: 'Peso Normal',
            orientacao: 'Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.',
        },
        {
            nivel: 'Sobrepeso',
            orientacao: 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.'
        },
        {
            nivel: 'Obsidade Grau I',
            orientacao: 'Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você.'
        },
        {
            nivel: 'Obsidade Grau II',
            orientacao: 'Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.'
        },
        {
            nivel: 'Obsidade Mórbida',
            orientacao: 'Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.'
        }
    ]

    result.textContent = `O seu IMC é ${imc}`;

    if (imc <= 18.5) {
        description.innerHTML = classificacao[0].nivel;
        tratamento.innerHTML = classificacao[0].orientacao;
        result.style.color = "#3fe3ee";
        sombra.style.boxShadow = "20px 20px 60px #3fe3ee";
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        description.innerHTML = classificacao[1].nivel;
        tratamento.innerHTML = classificacao[1].orientacao;
        result.style.color = "#00e083";
        sombra.style.boxShadow = "20px 20px 60px #00e083";

    }
    else if (imc >= 25 && imc <= 29.9) {
        description.innerHTML = classificacao[2].nivel;
        tratamento.innerHTML = classificacao[2].orientacao;
        result.style.color = "#ffc164";
        sombra.style.boxShadow = "20px 20px 60px #ffc164";

    }
    else if (imc >= 30 && imc <= 34.9) {
        description.innerHTML = classificacao[3].nivel;
        tratamento.innerHTML = classificacao[3].orientacao;
        result.style.color = "#e07700";
        sombra.style.boxShadow = "20px 20px 60px #e07700";

    }
    else if (imc >= 35 && imc <= 39.9) {
        description.innerHTML = classificacao[4].nivel;
        tratamento.innerHTML = classificacao[4].orientacao;
        result.style.color = "#e00f00";
        sombra.style.boxShadow = "20px 20px 60px #e00f00";

    }
    else {
        description.innerHTML = classificacao[5].nivel;
        tratamento.innerHTML = classificacao[5].orientacao;
        result.style.color = "#6b0902";
        sombra.style.boxShadow = "20px 20px 60px #6b0902";

    }
}

