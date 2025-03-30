
function calcularImc(){

                    //Entrada de dados (declaração de variáveis)
                    let peso = document.getElementById("peso").value;
                    let altura = document.getElementById("altura").value;

                    //Processamento
                    let imc = peso / (altura * altura);
                    let classificacao = ""; //string declarada para ser usada na saída de clssificação
    
                    if (imc < 18.5) {
                        classificacao = "Abaixo do peso";
                    } else if (imc >= 18.5 && imc < 25) {
                        classificacao = "Peso normal";
                    } else if (imc >= 25 && imc < 30) {
                        classificacao = "Sobrepeso";
                    } else if (imc >= 30 && imc < 35) {
                        classificacao = "Obesidade Grau I";
                    } else if (imc >= 35 && imc < 40) {
                        classificacao = "Obesidade Grau II";
                    } else if (imc >= 40) {
                        classificacao = "Obesidade Grau III";
                    }
                    //Saída
                    document.getElementById("imcResultado").textContent= "IMC= " + imc.toFixed(2); //toFixed apresenta apenas duas casas decimais de resultado
                    document.getElementById("classificacaoResultado").textContent = "Classificação: " + classificacao;
                    
                }