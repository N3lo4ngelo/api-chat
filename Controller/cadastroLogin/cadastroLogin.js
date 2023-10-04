$(document).ready(function () {
    $("#signIn").click(function () {
      var nome = $("#nome").val().trim();
      var password = $("#password").val().trim();
  
      console.log(nome, password);
  
      if (nome !== "" && password !== "") {
        $("#nome").val("");
        $("#password").val("");
  
        $.ajax({
          url: './../Model/cadastroLogin/cadastroLogin.php',
          method: 'post',
          dataType: 'json',
          data: {
            nome: nome,
            password: password,
          },
          success: function (response) {
            console.log(response);
          },
          error: function (xhr, status, error) {
           console.log(xhr.responseText);
          },
        });
      }
    });
  });
  