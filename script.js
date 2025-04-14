function darOrientacao() {
    const movimentacao = document.getElementById('movimentacao').value.toLowerCase();
    let resultado = '';

    // Exemplos de regras de movimentação
    if (movimentacao.includes('alta')) {
        resultado = 'sem cancelamento 33 dias';
    } else if (movimentacao.includes('mesmo documento')) {
        resultado = 'cancelamento e ativação em 33 dias.';
    } else if (movimentacao.includes('reconsideração')) {
        resultado = 'Reconsideração de linha cancelada a mais de 33 dias remunera como uma nova alta no valor do plano reconsiderado, o mesmo que consta no carrinho. Porém reconsideração de linha suspensa não é remunerado.';
    } else if (movimentacao.includes('alta') && movimentacao.includes('flexibilização')) {
        resultado = 'Pode ser realizado uma nova alta em um movimento de flexibilização apenas se a linha que o cliente já possui na base siga com o mesmo plano ou sofra um downgrade.';
    } else {
        resultado = 'Desculpe, não entendi a movimentação. Tente descrever de outra forma.';
    }

    document.getElementById('resultado').textContent = resultado;
}
