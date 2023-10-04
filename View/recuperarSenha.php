<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="imagens/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="css/geral.css">
    <link rel="stylesheet" href="css/styleIndex.css">
    <title>Recuperação de Senha || Lendme</title>
</head>

<body>


    <section class="box forms">

        <div id="logo">
            <img src="imagens/logo.png" alt="" class="img_logo">
        </div>

        <div class="form login">
            <div class="form-conteudo">
                <header>
                    <h1>Recuperação de Senha</h1>
                    <div id="mensagem"><span class="confirmacao"></span></div>
                    <h3>Para recuperar a sua senha, informe seu endereço de e-mail que nós enviaremos um código para
                        autenticar a sua alteração de senha.</h3>
                </header>

                <form action="#">
                    <div class="dados input-dados">
                        <input type="text" placeholder="Informe seu e-mail ou usuário" class="input">
                    </div>

                    <div class="form-link">
                        <a href="../index.php" class="canc-pass">Voltar para o Login</a>
                    </div>

                    <button id="signIn" type="submit" class="sign btn-login">Enviar</button>
                </form>

            </div>

        </div>

    </section>

    <script src="../js/script.js" defer></script>

</body>

</html>