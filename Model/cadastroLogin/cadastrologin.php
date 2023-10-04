<?php
    require_once '../config.php';

    // Iniciar a sessão
session_start(); 

// Limpara o buffer de redirecionamento
ob_start();
    
    header('Content-type: application/json');
    $nome = $_POST['nome'];
    $password = $_POST['password'];
  
    mysqli_select_db($con,$dbname);
   
    $sql_login ="insert into login (login, senha) values ('$nome' , '$password')";
    
    if ($con->query($sql_login) === TRUE) {
      $data = array('status' => 'CADASTRADO com sucesso');
    } else {
      $data = array('status' => 'error', 'mensagem' => $con->error);
    }
  
   
    echo json_encode($data);

    $con->close();

?>