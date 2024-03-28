function calcularMedia() {
    
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);
  
    const notas = [nota1, nota2, nota3];
    const media = calcularMediaDasNotas(notas);
  
    document.getElementById('resultado').innerText = `A média das notas é: ${media}`;
  }
  
  const calcularMediaDasNotas = notas => {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
  };