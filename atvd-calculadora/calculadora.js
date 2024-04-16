function calcular(){
    var priNum= parseFloat(document.getElementById('priNum').value);
    var segNum= parseFloat(document.getElementById('segNum').value);
    var operacao= document.getElementById('operacao').value;
    var resultado;

    switch (operacao) {
        case 'adicao':
            resultado = priNum + segNum
            break;
        case 'subtracao':
            resultado = priNum - segNum
            break;
        case 'multiplicacao':
            resultado = priNum * segNum
            break;
        case 'divisao':
            if (segNum===0) {
                alert('Não é possível dividir um número por 0');
                break;
            }else {
                resultado = priNum / segNum;
                break;
            }
        default:
            alert('Escolha uma opção válida');
            break;
    }
    var result = document.getElementById('mostrarResultado');
    result.innerHTML = resultado;
}