<?php
    require_once '../config.php';
    header("Content-Type: application/json");

    $dados =[];

    mysqli_select_db($con,$dbname);


	$query = "SELECT idCategoria, nome_categoria FROM categoria";
	$resultado = mysqli_query($con,$query);
    
	if(mysqli_num_rows($resultado) > 0){
      
        while($row = mysqli_fetch_array($resultado)){
            
            array_push($dados, $row["idCategoria"]);
            array_push($dados, $row["nome_categoria"]);
          
        }
      
        
    }else{
        
         $dados["status"] = "error";
    }
	
    echo json_encode($dados);

    mysqli_close($con);

?>