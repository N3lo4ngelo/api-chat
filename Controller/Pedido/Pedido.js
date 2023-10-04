requisaoSelecionarPedido();

$(document).ready(function () {
  $("#cadastrar").click(function () {
      var select = document.getElementById("turno");
      var codPedido = $("#codPedido").val().trim(); 
      var data = $("#data").val().trim();
      var turno =  select.options[select.selectedIndex].value;
      var turma = $("#turma").val().trim();
      var devolucao = $("#devolucao").val().trim();
      var entregador = $("#entregador").val().trim();
      var solicitante = $("#solicitante").val().trim();
       
       console.log(codPedido, data, turno, turma, devolucao, entregador, solicitante);

      if (codPedido != "" &&
       data != "" &&
       turno != "" &&
       turma != "" &&
       devolucao != "" &&
       entregador != "" &&
       solicitante != ""
  ){
      $("#codPedido").val("");
      $("#data").val("");
      $("#turno").val("");
      $("#turma").val("");
      $("#devolucao").val("");
      $("#entregador").val("");
      $("#solicitante").val("");
       
      $.ajax({
            url: './../Model/pedido/CadastrarPedido.php',
            method: 'post',
            dataType: 'json',
            data: {
                codPedido: codPedido,
                data: data,
                turno: turno,
                turma: turma,
                devolucao: devolucao,
                entregador: entregador,
                solicitante: solicitante,
                
            },
            success: function(data) {
                
                 if(data.status != "error"){        
                    const table = document.getElementById("tableped");
                    while (table.rows.length > 1) {
                    table.deleteRow(1);
                    }
                    requisaoSelecionarPedido();
                    
                    //fechar tela modal automatico depois de cadastrar
                        fechar();
                 }else{
                    alert("Erro ao cadastrar");
                 }       
            
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                
            }
        });
     
    
    } else {
      if ($("#codPedido").val().trim() == "") {
        alert("Codigo Pedido não preenchido");
      } else if ($("#data").val().trim() == "") {
        alert("Data não preenchido");
      } else if ($("#turno").val().trim() == "") {
        alert("Turno não preenchido");
      } else if ($("#turma").val().trim() == "") {
        alert("Turma não preenchido");
      } else if ($("#devolucao").val().trim() == "") {
        alert("Devolucao não preenchido");
      } else if ($("#entregador").val().trim() == "") {
        alert("Entregador não preenchido");
      }else if ($("#solicitante").val().trim() == "") {
        alert("Solicitante não preenchido");
      }
      
    }
  });
});



//excluir 
function excluiRegistro(item, botao) {
  const rowIndex = botao.parentNode.parentNode.rowIndex;

    document.getElementById("tableped").deleteRow(rowIndex);
}


//PreencherSeletorModal
function preencherSeletor() {
    
     $.ajax({
            url: './../Model/pedido/SelecionarTruno.php',
            method: 'post',
            dataType: 'json',
      
            success: function(data) {
               
              if(data.status != "error"){      
                    
                     var _option = $("#turno");
                    for (var i = 0; i < data.length; i += 2) {
                        _option.append('<option value="' + data[i] + '">'+ data[i+1] + '</option>');  
                       
                    }
                }
            
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                console.log(error);
            }
        });

}


//SelecionarPedido
function requisaoSelecionarPedido() {

 $.ajax({
            url: './../Model/pedido/SelecionarPedido.php',
            method: 'post',
            dataType: 'json',
      
            success: function(data) {
                 console.log(data);
                if(data.status != "error"){        
                     
                     
                      preencherTabela(data);
                }
            
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                console.log(error);
            }
        });


}


//preencher a tabela, com botao excluir
function preencherTabela(data) {
    var tbody = $("#tableped");
    var n = 0;
   
    for (var i = 0; i < data.length; i += 7) {
      var tr = $("<tr>");
      
      n++;
      tr.append("<td>" + n + "</td>");
      tr.append("<td>" + data[i] + "</td>");
      tr.append("<td>" + data[i + 1] + "</td>");
      tr.append("<td>" + data[i + 2] + "</td>");
      tr.append("<td>" + data[i + 3] + "</td>");
      tr.append("<td>" + data[i + 4] + "</td>");
      tr.append("<td>" + data[i + 5] + "</td>");
      tr.append("<td>" + data[i + 6] + "</td>");
    //   tr.append('<td> <button type="button" id="alterar" onclick="acao(\'cad\')">Alterar</button> </td>');
      tr.append('<td> <button type="button" id="excluir" onclick="excluiRegistro(' + data[i] + ', this )">Excluir</button> </td>');
      tbody.append(tr);
    }
}


function excluiRegistro(codPedido,botao) {
    const rowIndex = botao.parentNode.parentNode.rowIndex;
 
    $.ajax({
        url: './../Model/pedido/DeletarPedido.php',
        method: "POST",
        data: { codPedido: codPedido},
        success: function(data){
            
            console.log(data.ped);
            if (data.status != "error") {
                document.getElementById('tableped').deleteRow(rowIndex);
                alert("Registro excluído com sucesso!");
            } else {
                alert("Erro ao excluir o registro!");
            }
        }
    });
}


// atualizar Dados do Pedido
$(document).ready(function(){
    $('#buscar').click(function() {
	var codPedido = $("#codPedidoAlt").val().trim();

	$.ajax({
		url: './../Model/pedido/SelecionarPedidoEspecifico.php',
		data: { codPedido: codPedido },
        method: 'get',
		dataType: "json",
        data:{codPedido: codPedido},
       success: function(data){
           
            if(data.status != "Sem registro"){
               
                $("#dataAlt").val(data[1]);
                $("#turmaAlt").val(data[2]);
                $("#devolucaoAlt").val(data[3]);
                $("#entregadorAlt").val(data[4]);    
                $("#solicitanteAlt").val(data[5]);             
                BuscarTruno(data[0]);
                
                

            }else{
                alert (data.comentario);
            }
			
            
		},
         error: function(xhr, status, error) {
            console.log(xhr.responseText);
            console.log(error);
                       
            }
	})
});
});
$(document).ready(function(){
    $('#alterar').click(function() {
        var select = document.getElementById("turnoAlt");
        var codPedidoAlt = $('#codPedidoAlt').val();
        var dataAlt = $('#dataAlt').val();
        var turnoAlt = select.options[select.selectedIndex].value;
        var turmaAlt =  $('#turmaAlt').val();
        var devolucaoAlt = $('#devolucaoAlt').val();
        var entregadorAlt =  $('#entregadorAlt').val();
        var solicitanteAlt =  $('#solicitanteAlt').val();

        console.log(turnoAlt);

        $.ajax({
            url: './../Model/pedido/UpdatePedido.php',
            method: 'post',
            dataType: 'json',
            data: {
                codPedido: codPedidoAlt,
                data: dataAlt,
                turno: turnoAlt,
                devolucao: devolucaoAlt,
                entregador: entregadorAlt,
                solicitante: solicitanteAlt,
            },
            success: function(data) {

                console.log(data);
                
                $('#dataAlt').val('');
                $('#turnoAlt').val('');
                $('#turmaAlt').val('');
                $('#devolucaoAlt').val('');
                $('#entregadorAlt').val('');
                $('#solicitanteAlt').val('');
          
                },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                
            }
        });
});
});


function BuscarTurno(codPedido) {
 
     $.ajax({
            url: './../Model/pedido/SelecionarTurnoEspecifico.php',
            method: 'post',
            dataType: 'json',
            data:{codPedido: codPedido},      
            success: function(data) {
              console.log(data);  
              if(data.status != "error"){  
                                     
                     var _option = $("#turnoAlt");
                    for (var i = 0; i < data.length; i += 2) {
                    
                        _option.append('<option value="  ' + data[i] + '" selected>'+ data[i+1] + '</option>');  
                       
                    }
                }
            
            },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                console.log(error);
            }
        });

}