const form = document.getElementById('for-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += '<td>'+ inputNomeAtividade.value;
    linha += '<td>'+ inputNotaAtividade.value;
    linha += '<td>'+ inputNotaAtividade.value >= 7 ? 'imgAprovado' : 'imgReprovado';
    linha += '</tr>';

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});