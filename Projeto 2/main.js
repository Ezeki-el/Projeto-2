const form = document.getElementById('for-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += '<td>${inputNomeAtividade.value}</td>';
    linha += '<td>${inputNotaAtividade.value}</td>';

    alert('Atividade: ${inputNomeAtividade.valie} - Nota: ${inputNotaAtividade.value}');
});