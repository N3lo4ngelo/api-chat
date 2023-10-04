<?php
    require_once '../config.php';
    
    header('Content-type: application/json');
    $codPedido = $_POST['codPedido'];
    $data = $_POST['data'];
    $turno = $_POST['turno'];
    $turma = $_POST['turma'];
    $devolucao = $_POST['devolucao'];
    $entregador = $_POST['entregador'];
    $solicitante = $_POST['solicitante'];
  
    mysqli_select_db($con,$dbname);
   
    $sql_Pedidos ="insert into pedidos (idPedidos, data, turno, turma, devolucao, Entregue_Funcionario_cod_matricula, Solicitado_Funcionario_cod_matricula) values ('$codPedido' , '$data' , '$turno' , '$turma' , '$devolucao' , '$entregador' , '$solicitante')";

    if ($con->query($sql_Pedidos) === TRUE) {
      $data = array('status' => 'Inserido com sucesso');
    } else {
      $data = array('status' => 'error', 'mensagem' => $con->error);
    }
  
   
    echo json_encode($data);

    $con->close();

?>