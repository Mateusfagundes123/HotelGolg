function NomeHospede(){
    var nomeCampo = document.getElementById("nome").value;
    var quuantidadePessoas = document.getElementById("qtdPessoas").value;
    var quantidadeDias = document.getElementById("qtdDias").value;
    var erros = [];

        if (nomeCampo.length < 4) {
            erros.push("O nome do hóspede deve ter pelo menos 4 caracteres.");
        }
        if (quuantidadePessoas < 1 || quuantidadePessoas > 4) {
            erros.push("Quantidade de pessoas deve ser entre 1 e 4.");
        }
        if (quantidadeDias < 1 || quantidadeDias > 7) {
            erros.push("Quantidade de dias deve ser entre 1 e 7.");
        }
        if (erros.length > 0) {
            window.alert("Por favor, corrija os seguintes erros:\n" + erros.join("\n"));
        }
    }
    
    function calculodaReservas() {
          var QtdPessoas = document.getElementById("qtdPessoas").value;
          var QtdDias = document.getElementById("qtdDias").value;
          var tipodeaco = document.getElementById("tipodeaco");
          var valortotal;
          var tipoSelecionado = tipodeaco.options[tipodeaco.selectedIndex].value;

          if (tipoSelecionado === "VMar") {
              valortotal = QtdDias * 357;
          }if (tipoSelecionado === "VJardim") {
              valortotal = QtdDias * 294;
          }else if(tipoSelecionado === "Luxo"){
            valortotal = QtdDias * 378;
          }
          document.querySelector('.valordasreservas').innerHTML = "Valor reservas: R$" + valortotal+",00";
  }

  function vhamaasfuncoes(){
    NomeHospede()
    calculodaReservas()
  }
  function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("qtdPessoas").value = "";
  document.getElementById("qtdDias").value = "";
  document.getElementById("tipodeaco").selectedIndex = 0;
  document.querySelector('.valordasreservas').innerHTML = "Valor reservas: ";
}


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn i');
    const navUl = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navUl.classList.toggle('active');
        
    });
});
