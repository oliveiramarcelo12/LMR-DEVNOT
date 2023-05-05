let HT; //horas trabalhadas
let VH; //valor hora
let PD; //percentual de desconto
let TD; //total de desconto
let SB; //salario bruto
let SL; //salario liquido

HT = prompt('Digite as Horas Trabalhadas' ,  'Informe Aqui.');
VH = prompt('Entre com o valor da hora' , 'Informe Aqui.');
PD= prompt('Informe o Percentual de desconto:', 'Em porcentagem');
SB= parseFloat(HT)*parseFloat(VH);
TD= parseFloat(PD)*SB/100;
SL=SB-TD;
document.write('Salario =',SL);