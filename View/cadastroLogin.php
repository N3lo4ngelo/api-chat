<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="imagens/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/geral.css">
    <link rel="stylesheet" href="css/styleIndex.css">
    <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
    <!-- icones: -->
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <title>Login || Lendme</title>
</head>

<body>

    <section class="box forms">

        <div id="logo">
            <img src="imagens/logo.png" alt="" class="img_logo">
        </div>

        <div class="form login">
            <div class="form-conteudo">
                <header>
                    <h1>Cadastrar Novo Usuário</h1>
                </header>

                <form method="post" action="cadastroLogin" id="loginForm">
                    <div class="dados input-dados">
                        <input type="text" placeholder="Digite um Nome" class="input" id="nome" required>
                    </div>

                    <div class="dados input-dados">
                        <input type="password" placeholder="Digite uma Senha" class="password" id="password" required>
                    </div>

                    <button id="signIn" type="submit" class="sign btn-login">Cadastrar</button>

                </form>
                <div class="form-link3">
                    <a href="../index.php">Faça o Login</a>
                </div>

            </div>

        </div>

    </section>

    <script src="../Controller/cadastroLogin/cadastroLogin.js"></script>

</body>

</html>