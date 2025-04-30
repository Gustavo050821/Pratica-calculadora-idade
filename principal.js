const formulario = document.querySelector("form");
const campoDia = document.getElementById("day");
const campoMes = document.getElementById("month");
const campoAno = document.getElementById("year");
const resultadoAnos = document.querySelector(".year");
const resultadoMeses = document.querySelector(".month");
const resultadoDias = document.querySelector(".day");
const spanDeErro = document.querySelectorAll('span')
const inputs = document.querySelectorAll('input')


  /*  spanDeErro.forEach(span){
      spanDeErro.classList.remove('hide')
      spanDeErro.classList.add('hide')
    }*/


formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  calcularIdade();
});


function calcularIdade() {


  const dia = parseInt(campoDia.value);
  const mes = parseInt(campoMes.value);
  const ano = parseInt(campoAno.value);
  const hoje = new Date();
  let dataNasc = new Date(ano, mes - 1, dia)

  /*if(isNaN(dia) || isNaN(mes) || isNaN(ano)){
    
  }*/

    /*spanDeErro.forEach(span){
      spanDeErro.classList.remove('hide')
      spanDeErro.classList.add('hide')
    }*/


  if(isNaN(dia)){
    let cob = document.querySelectorAll(".field-required");
    cob[0].classList.remove("hide");
    
  }else{
    let cob = document.querySelectorAll(".field-required");
    cob[0].classList.remove("hide");
    cob[0].classList.add("hide");
  }


  if(isNaN(mes)){
    let cob = document.querySelectorAll(".field-required");
    cob[1].classList.remove("hide");
    
  }else{
    let cob = document.querySelectorAll(".field-required");
    cob[1].classList.remove("hide");
    cob[1].classList.add("hide");
  }

  if(isNaN(ano)){
    let cob = document.querySelectorAll(".field-required");
    cob[2].classList.remove("hide");
    return
  }else{
    let cob = document.querySelectorAll(".field-required");
    cob[2].classList.remove("hide");
    cob[2].classList.add("hide");
  }

 if(dia < 1 || dia > 31){
   let valinfo = document.querySelectorAll(".valid-info");
   valinfo[0].classList.remove("hide")
   return;
  } else{
    let valinfo = document.querySelectorAll(".valid-info");
   valinfo[0].classList.remove("hide")
   valinfo[0].classList.add("hide")
  }
  
  if(mes < 1 || mes > 12){
    let valinfo = document.querySelectorAll(".valid-info");
    valinfo[1].classList.remove("hide");
    return;
  } else{
    let valinfo = document.querySelectorAll(".valid-info");
   valinfo[1].classList.remove("hide")
   valinfo[1].classList.add("hide")
  }
  
  if (dataNasc > hoje || ano <1910) {
    let valinfo = document.querySelectorAll(".valid-info");
    valinfo[2].classList.remove("hide");
    return
  }else{
    let valinfo = document.querySelectorAll(".valid-info");
   valinfo[2].classList.remove("hide")
   valinfo[2].classList.add("hide")
  }
  
  const diasNoMes = new Date(ano, mes, 0).getDate();
  if (dia > diasNoMes) {
    alert("O dia inserido não existe neste mês.");
    return;
  }
  
  const nascimento = new Date(ano, mes - 1, dia);
  let anos = hoje.getFullYear() - nascimento.getFullYear();
  let meses = hoje.getMonth() - nascimento.getMonth();
  let dias = hoje.getDate() - nascimento.getDate();

  if (dias < 0) {
    meses--;
    dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
  }
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  resultadoAnos.textContent = anos;
  resultadoMeses.textContent = meses;
  resultadoDias.textContent = dias;
}
