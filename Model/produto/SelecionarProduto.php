<?php
    require_once '../config.php';
    header("Content-Type: application/json");

    $dados =[];

    mysqli_select_db($con,$dbname);

    //join para selecionar todas as info do Produto
    
	$query = "SELECT p.cod_patrimonio, p.nome, p.descricao, p.ocupado, p.apelido, c.nome_categoria FROM produtos as p
                  INNER JOIN categoria as c 
                     ON p.Categoria_idCategoria = c.idCategoria";
                               
                            

	$resultado = mysqli_query($con,$query);
    
	if(mysqli_num_rows($resultado) > 0){

        while($row = mysqli_fetch_array($resultado)){
            
            array_push($dados,$row["cod_patrimonio"]);
            array_push($dados,$row["nome"]);
            array_push($dados,$row["descricao"]);
            array_push($dados,$row["ocupado"]);
            array_push($dados,$row["apelido"]);
            array_push($dados,$row["nome_categoria"]);
            
        }
      
        
    }else if(mysqli_num_rows($resultado) == 0){        
        $dados["status"] = "Sem registro";
    }else{
        $dados["status"] = "error";
    }
 
    echo json_encode($dados);

    mysqli_close($con);

?>