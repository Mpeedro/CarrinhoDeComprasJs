document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('.item');
    let soma = 0;

    elementos.forEach(elemento => {
   
        let preco = parseFloat(elemento.getAttribute('data-price'));
        if (!isNaN(preco)) {
            soma += preco;
        }
    });

    const totalElemento = document.getElementById('total-price');
    

    totalElemento.textContent = soma.toFixed(2);
});
