<?php
    require_once '../config.php';
    header("Content-Type: application/json");

    $dados =[];

    mysqli_select_db($con,$dbname);

    //join para selecionar todas as info do Pedido
    
	$query = "SELECT ped.idPedidos, ped.data, tu.nome_turno, ped.turma, ped.devolucao FROM pedidos as ped
	                INNER JOIN turno as tu ON tu.idturno = ped.turno
                        INNER JOIN funcionario as f
                            ON ped.Entregue_Funcionario_cod_matricula = f.cod_matricula and ped.Solicitado_Funcionario_cod_matricula = f.cod_matricula";
                               
                            

	$resultado = mysqli_query($con,$query);
    
	if(mysqli_num_rows($resultado) > 0){

        while($row = mysqli_fetch_array($resultado)){
            
            array_push($dados,$row["idPedidos"]);
            array_push($dados,$row["data"]);
            array_push($dados,$row["nome_turno"]);
            array_push($dados,$row["turma"]);
            array_push($dados,$row["devolucao"]);
            // array_push($dados,$row["Entregue_Funcionario_cod_matricula"]);
            // array_push($dados,$row["Solicitado_Funcionario_cod_matricula"]);
            
        }
      
        
    }else if(mysqli_num_rows($resultado) == 0){        
        $dados["status"] = "Sem registro";
    }else{
        $dados["status"] = "error";
    }
 
    echo json_encode($dados);

    mysqli_close($con);

?>