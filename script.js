function darOrientacao() {
    const movimentacao = document.getElementById('movimentacao').value.toLowerCase();
    let resultado = '';

    // Exemplos de regras de movimentação
    if (movimentacao.includes('alta')) {
        resultado = 'sem cancelamento 33 dias';
    } else if (movimentacao.includes('mesmo documento')) {
        resultado = 'cancelamento e ativação em 33 dias.';
    } else if (movimentacao.includes('para a esquerda')) {
        resultado = 'Mova-se 1 passo para a esquerda.';
    } else if (movimentacao.includes('para a direita')) {
        resultado = 'Mova-se 1 passo para a direita.';
    } else {
        resultado = 'Desculpe, não entendi a movimentação. Tente descrever de outra forma.';
    }

    document.getElementById('resultado').textContent = resultado;
}