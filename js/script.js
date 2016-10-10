    /*
     *
     * Plug-ins: jQuery Validate, jQuery 
     * Easing
     */


    $(document).ready(function() {

        $("#n-pais").bind('keyup mouseup', function() {
            var tamFilho = document.getElementById("n-filhos");
            var tamPai = document.getElementById("n-pais");
            var tamKit = (parseInt(tamPai.value, 10) + parseInt(tamFilho.value, 10));
            // $(".n-personalizado").html(tamKit);
            //check new values
            var valorNovoFixado = parseInt(document.getElementById("tracejado").value, 10);
            var valorNovo = parseInt(document.getElementById("valor").value, 10);
            valorNovo = (250 * (tamKit - 2) + 447).toFixed(2);
            valorNovoFixado = (250 * (tamKit - 2) + 599).toFixed(2);
            $("#valor").html(valorNovo);
            $("#tsd").html(valorNovoFixado);

            var input = document.getElementById('n-pais');

            input.addEventListener('change', function(e) {
                var num = parseInt(this.value, 10);

                if (isNaN(num)) {
                    this.value = "";
                    return;
                }
                if (tamPai.value > 3) {
                    tamPai.value = 1;
                }
                if (tamPai.value > 1) {
                    tamFilho.value = 1;
                }
                tamKit = (parseInt(tamPai.value, 10) + parseInt(tamFilho.value, 10));


                var valorNovoFixado = parseInt(document.getElementById("tracejado").value, 10);
                var valorNovo = parseInt(document.getElementById("valor").value, 10);
                $(".n-personalizado").html(tamKit);
                console.log("o tamanho do kit é " + tamKit);
                if (tamPai.value == 1 && tamFilho.value == 1) {
                    $('.personalizado img').fadeOut(1000, function() {
                        $('.personalizado img').attr("src", "http://dev.testedna.com.br/wp-content/uploads/2016/09/Teste-DNA-de-Paternidade-Duo.png");
                        $('.personalizado img').fadeIn(1500);
                    });
                }
                if (tamPai.value == 2 && tamFilho.value == 1) {
                    $('.personalizado img').fadeOut(1000, function() {
                        $('.personalizado img').attr("src", "http://dev.testedna.com.br/wp-content/uploads/2016/09/Teste-DNA-de-Paternidade-Duo-P2.png");
                        $('.personalizado img').fadeIn(1500);
                    });
                }
                if (tamPai.value == 3 && tamFilho.value == 1) {
                    $('.personalizado img').fadeOut(1000, function() {
                        $('.personalizado img').attr("src", "http://dev.testedna.com.br/wp-content/uploads/2016/09/Teste-DNA-de-Paternidade-Duo-P3.png");
                        $('.personalizado img').fadeIn(1500);
                    });
                }
                valorNovo = (250 * (tamKit - 2) + 447).toFixed(2);
                valorNovoFixado = (250 * (tamKit - 2) + 599).toFixed(2);
                $("#valor").html(valorNovo);
                $("#tsd").html(valorNovoFixado);
                $(".n-personalizado").html(tamKit);
            });
        });
        $("#n-filhos").bind('keyup mouseup', function() {
            var tamFilho = document.getElementById("n-filhos");
            var tamPai = document.getElementById("n-pais");
            var tamKit = (parseInt(tamPai.value, 10) + parseInt(tamFilho.value, 10));
            // $(".n-personalizado").html(tamKit);
            //check new values
            var valorNovoFixado = parseInt(document.getElementById("tracejado").value, 10);
            var valorNovo = parseInt(document.getElementById("valor").value, 10);
            valorNovo = (250 * (tamKit - 2) + 447).toFixed(2);
            valorNovoFixado = (250 * (tamKit - 2) + 599).toFixed(2);
            $("#valor").html(valorNovo);
            $("#tsd").html(valorNovoFixado);

            var input = document.getElementById('n-filhos');

            input.addEventListener('change', function(e) {
                var num = parseInt(this.value, 10);

                if (isNaN(num)) {
                    this.value = "";
                    return;
                }
                if (tamFilho.value > 3) {
                    tamFilho.value = 1;
                }
                if (tamFilho.value > 1) {
                    tamPai.value = Math.max(1, 1);
                }
                tamKit = (parseInt(tamPai.value, 10) + parseInt(tamFilho.value, 10));


                if (tamPai.value == 1 && tamFilho.value == 1) {
                    $('.personalizado img').fadeOut(1000, function() {
                        $('.personalizado img').attr("src", "http://dev.testedna.com.br/wp-content/uploads/2016/09/Teste-DNA-de-Paternidade-Duo.png");
                        $('.personalizado img').fadeIn(1500);
                    });
                }
                if (tamPai.value == 1 && tamFilho.value == 2) {
                    $('.personalizado img').fadeOut(1000, function() {
                        $('.personalizado img').attr("src", "http://dev.testedna.com.br/wp-content/uploads/2016/09/Teste-DNA-de-Paternidade-Duo-F2.png");
                        $('.personalizado img').fadeIn(1500);
                    });
                }
                if (tamPai.value == 1 && tamFilho.value == 3) {
                    $('.personalizado img').fadeOut(1000, function() {
                        $('.personalizado img').attr("src", "http://dev.testedna.com.br/wp-content/uploads/2016/09/Teste-DNA-de-Paternidade-Duo-F3.png");
                        $('.personalizado img').fadeIn(1500);
                    });
                }
                valorNovo = (250 * (tamKit - 2) + 447).toFixed(2);
                valorNovoFixado = (250 * (tamKit - 2) + 599).toFixed(2);
                $("#valor").html(valorNovo);
                $("#tsd").html(valorNovoFixado);
                $(".n-personalizado").html(tamKit);
            });
        });

        //Fim do tratamento dos boxes de compra 


        var fieldsetEndereco2 = "";
        fieldsetEndereco2 += "        <fieldset id=\"endereco2\">";
        fieldsetEndereco2 += "          <h2 class=\"fs-title\">Segundo Endereço<\/h2>";
        fieldsetEndereco2 += "          <h3 class=\"fs-subtitle\"><i class=\"fa fa-info-circle font-big\" aria-hidden=\"true\"><\/i>Você pode optar por receber os kits de coletas em endereços diferentes<\/h3>";
        fieldsetEndereco2 += "          <div class=\"controller\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <p> O que deseja enviar para esse endereço? <\/p>";
        fieldsetEndereco2 += "            <ul>";
        fieldsetEndereco2 += "              <li>";
        fieldsetEndereco2 += "                <input type=\"radio\" id=\"kit01-2\" name=\"kit01\">";
        fieldsetEndereco2 += "                <label for=\"kit01-2\">Kit 01: Suposta Mãe<\/label>";
        fieldsetEndereco2 += "                ";
        fieldsetEndereco2 += "                <div class=\"check\"><\/div>";
        fieldsetEndereco2 += "              <\/li>";
        fieldsetEndereco2 += "              <li>";
        fieldsetEndereco2 += "                <input type=\"radio\" id=\"kit02-2\" name=\"kit02\">";
        fieldsetEndereco2 += "                <label for=\"kit02-2\">Kit 02: Suposto Filho<\/label>";
        fieldsetEndereco2 += "                ";
        fieldsetEndereco2 += "                <div class=\"check\"><div class=\"inside\"><\/div><\/div>";
        fieldsetEndereco2 += "              <\/li>    ";
        fieldsetEndereco2 += "              <li>";
        fieldsetEndereco2 += "                <input type=\"radio\" id=\"kit03-2\" name=\"kit03\">";
        fieldsetEndereco2 += "                <label for=\"kit03-2\">Kit 03: Suposto Pai<\/label>";
        fieldsetEndereco2 += "                <div class=\"check\"><div class=\"inside\"><\/div><\/div>";
        fieldsetEndereco2 += "              <\/li>";
        fieldsetEndereco2 += "              <li class=\"hide\">";
        fieldsetEndereco2 += "                <input type=\"radio\" id=\"kit04-2\" name=\"kit04\">";
        fieldsetEndereco2 += "                <label for=\"kit04-2\">Kit 04: Suposto Pai<\/label>";
        fieldsetEndereco2 += "                <div class=\"check\"><div class=\"inside\"><\/div><\/div>";
        fieldsetEndereco2 += "              <\/li>";
        fieldsetEndereco2 += "              <li class=\"hide\">";
        fieldsetEndereco2 += "                <input type=\"radio\" id=\"kit05-1\" name=\"kit05\">";
        fieldsetEndereco2 += "                <label for=\"kit05-2\">Kit 05: Suposto Pai<\/label>";
        fieldsetEndereco2 += "                <div class=\"check\"><div class=\"inside\"><\/div><\/div>";
        fieldsetEndereco2 += "              <\/li>";
        fieldsetEndereco2 += "            <\/ul>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <div class=\"form-item \" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"remetente2\">Remetente<\/label>";
        fieldsetEndereco2 += "            <input id=\"remetente2\" class=\"form-text hs-input\" name=\"remetente2\" required=\"required\" size=\"60\" maxlength=\"128\" type=\"text\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Não é aceito valores em branco\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <div class=\"form-item\" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"cep2\">CEP<\/label>";
        fieldsetEndereco2 += "            <input id=\"cep2\" class=\"form-text hs-input\" name=\"cep2\" required=\"required\" size=\"60\" maxlength=\"128\" type=\"number\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Por favor insira um número válido\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <div class=\"form-item\" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"rua2\">Rua\/Av.:<\/label>";
        fieldsetEndereco2 += "            <input id=\"rua2\" class=\"form-text hs-input\" name=\"rua2\" required=\"required\" size=\"60\" maxlength=\"128\" type=\"text\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Por favor insira um endereço válido\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <div class=\"form-item\" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"numero-complemento2\">Número e complemento<\/label>";
        fieldsetEndereco2 += "            <input id=\"numero-complemento2\" class=\"form-text hs-input\" name=\"numero-complemento2\" required=\"required\" size=\"60\" maxlength=\"128\" type=\"text\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Por favor insira um valor válido\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <div class=\"form-item\" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"bairro2\">Bairro<\/label>";
        fieldsetEndereco2 += "            <input id=\"bairro2\" class=\"form-text hs-input\" name=\"bairro2\" required=\"required\" size=\"60\" maxlength=\"128\" type=\"text\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Por favor insira um bairro\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <div class=\"form-item\" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"cidade2\">Cidade<\/label>";
        fieldsetEndereco2 += "            <input id=\"cidade2\" class=\"form-text hs-input\" name=\"cidade2\" required=\"required\" size=\"60\" maxlength=\"128\" type=\"text\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Por favor insira uma cidade válida\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <select name=\"UF2\" id=\"UF2\" required>"
        fieldsetEndereco2 += "              <option value=\"AC\">Acre<\/option>";
        fieldsetEndereco2 += "              <option value=\"AL\">Alagoas<\/option>";
        fieldsetEndereco2 += "              <option value=\"AP\">Amapá<\/option>";
        fieldsetEndereco2 += "              <option value=\"AM\">Amazonas<\/option>";
        fieldsetEndereco2 += "              <option value=\"BA\">Bahia<\/option>";
        fieldsetEndereco2 += "              <option value=\"CE\">Ceará<\/option>";
        fieldsetEndereco2 += "              <option value=\"DF\">Distrito Federal<\/option>";
        fieldsetEndereco2 += "              <option value=\"ES\">Espírito Santo<\/option>";
        fieldsetEndereco2 += "              <option value=\"GO\">Goiás<\/option>";
        fieldsetEndereco2 += "              <option value=\"MA\">Maranhão<\/option>";
        fieldsetEndereco2 += "              <option value=\"MT\">Mato Grosso<\/option>";
        fieldsetEndereco2 += "              <option value=\"MS\">Mato Grosso do Sul<\/option>";
        fieldsetEndereco2 += "              <option value=\"MG\">Minas Gerais<\/option>";
        fieldsetEndereco2 += "              <option value=\"PA\">Pará<\/option>";
        fieldsetEndereco2 += "              <option value=\"PB\">Paraíba<\/option>";
        fieldsetEndereco2 += "              <option value=\"PR\">Paraná<\/option>";
        fieldsetEndereco2 += "              <option value=\"PE\">Pernambuco<\/option>";
        fieldsetEndereco2 += "              <option value=\"PI\">Piauí<\/option>";
        fieldsetEndereco2 += "              <option value=\"RJ\">Rio de Janeiro<\/option>";
        fieldsetEndereco2 += "              <option value=\"RN\">Rio Grande do Norte<\/option>";
        fieldsetEndereco2 += "              <option value=\"RS\">Rio Grande do Sul<\/option>";
        fieldsetEndereco2 += "              <option value=\"RO\">Rondônia<\/option>";
        fieldsetEndereco2 += "              <option value=\"RR\">Roraima<\/option>";
        fieldsetEndereco2 += "              <option value=\"SC\">Santa Catarina<\/option>";
        fieldsetEndereco2 += "              <option value=\"SP\">São Paulo<\/option>";
        fieldsetEndereco2 += "              <option value=\"SE\">Sergipe<\/option>";
        fieldsetEndereco2 += "              <option value=\"TO\">Tocantins<\/option>";
        fieldsetEndereco2 += "           <\/select>";
        fieldsetEndereco2 += "          <div class=\"form-item\" id=\"\">";
        fieldsetEndereco2 += "            ";
        fieldsetEndereco2 += "            <label for=\"telefone2\">Telefone<\/label>";
        fieldsetEndereco2 += "            <input id=\"telefone2\" class=\"form-text hs-input\" name=\"telefone2\" required=\"required\" size=\"11\" maxlength=\"128\" type=\"text\" value=\"\" placeholder=\"\" data-rule-required=\"true\" data-msg-required=\"Insira um telefone\">";
        fieldsetEndereco2 += "            <span class=\"error1\" style=\"display: none;\">";
        fieldsetEndereco2 += "              <i class=\"error-log fa fa-exclamation-triangle\"><\/i>";
        fieldsetEndereco2 += "            <\/span>";
        fieldsetEndereco2 += "          <\/div>";
        fieldsetEndereco2 += "          <input type=\"button\" data-page=\"2\" name=\"previous\" class=\"previous action-button\" value=\"Anterior\" \/>";
        fieldsetEndereco2 += "          <input type=\"button\" data-page=\"4\" name=\"next\" class=\"next action-button\" value=\"Proximo\" \/>";
        fieldsetEndereco2 += "        <\/fieldset>";

        var current_fs, next_fs, previous_fs;
        var left, opacity, scale;
        var animating;

        $(".next-1").click(function() {

            $(".steps").validate({
                errorClass: 'invalid',
                errorElement: 'span',
                rules: {
                    password: {
                        minlength: 6,
                        maxlength: 12,
                    },
                    conf_password: {
                        minlength: 6,
                        maxlength: 12,
                        equalTo: "#password"
                    },
                    telefone1: {
                        number: true
                    },
                    telefone2:{
                        number: true
                    },
                    cep1:{
                        maxlength:8
                    },
                    cep2:{
                        maxlength:8
                    }
                },
                messages: {
                    email: {
                        email: " Por favor entre com um formato válido de e-mail",
                    },
                    password: {
                        minlength: "Por favor entre com no mínimo 6 caracteres",
                        maxlength: "Limite de 12 caracteres",
                    },
                    conf_password: {
                        equalTo: "As senhas são diferentes",
                        minlength: "Por favor entre com no mínimo 6 caracteres",
                        maxlength: "Limite de 12 caracteres",
                    },
                    telefone1: {
                        number: "Por favor insira um número de telefone",
                    },
                    cep1:{
                        number:"Por favor insira um número válido",
                        maxlength:"Limite de 8 caracteres",
                    },
                    cep2:{
                        number:"Por favor insira um número válido",
                        maxlength:"Limite de 8 caracteres",
                    },
                    telefone2:{
                        maxlength:"Por favor insira um número de telefone",
                    },
                },
                errorPlacement: function(error, element) {
                    error.insertAfter(element.next('span').children());
                },
                highlight: function(element) {
                    $(element).next('span').show();
                },
                unhighlight: function(element) {
                    $(element).next('span').hide();
                }

            });
        });


        $(".next-1").click(function() {
            $("#dados-pessoais").validate({

                errorClass: 'invalid',
                errorElement: 'span',
                errorPlacement: function(error, element) {
                    error.insertAfter(element.next('span').children());
                },
                highlight: function(element) {
                    $(element).next('span').show();
                },
                unhighlight: function(element) {
                    $(element).next('span').hide();
                }
            });

        });


        $(".novo-endereco").click(function() {
            var endereco1 = $("#progressbar").find(".endereco1");
            if ($(".novo-endereco").text() == "Novo Endereço") {
                endereco1.text("endereço 1");
                $("#endereco .fs-title").text("Endereço Principal");
                $("<li class='endereco2'>Endereço 2</li>").insertAfter(endereco1);
                $(fieldsetEndereco2).insertAfter("#endereco");
                $(".novo-endereco").html("Desfazer");
                previous_fs = $("#endereco");
                next_fs = $("#pagamento");
            } else {
                $(".endereco2").remove();
                $("#endereco2").remove();
                endereco1.text("endereço");
                $("#endereco .fs-title").text("Endereço");
                $(".novo-endereco").html("<i class='fa fa-plus font-big' aria-hidden='true'></i>Novo Endereço");
                // $("#endereco2").hide();

            }
        });
        $(document).on ("click", ".novo-endereco", function() {
            $(this).addClass("ativo");
            if ($(this).hasClass("ativo")) {
                $(this).children("i").toggleClass("fa-circle-o fa-check-circle")
            }
        });
        $(document).on("click", ".next", function() {
            $(".steps").validate({
                errorClass: 'invalid',
                errorElement: 'span',
                errorPlacement: function(error, element) {
                    error.insertAfter(element.next('span').children());
                },
                highlight: function(element) {
                    $(element).next('span').show();
                },
                unhighlight: function(element) {
                    $(element).next('span').hide();
                }
            });
            if ((!$('.steps').valid())) {
                return true;
            }
            if (animating) return false;
            animating = true;
            current_fs = $(this).parent();

            next_fs = $(this).parent().next();
            console.log(next_fs);
            // }
            console.log(next_fs);
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutExpo'
            });
        });
        $(".submit").click(function() {
            $(".steps").validate({
                errorClass: 'invalid',
                errorElement: 'span',
                errorPlacement: function(error, element) {
                    error.insertAfter(element.next('span').children());
                },
                highlight: function(element) {
                    $(element).next('span').show();
                },
                unhighlight: function(element) {
                    $(element).next('span').hide();
                }
            });
            if ((!$('.steps').valid())) {
                return false;
            }
            if (animating) return false;
            animating = true;
            current_fs = $(this).parent();

            next_fs = $(this).parent().next();

            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutExpo'
            });
        });
        $(document).on("click", ".previous", function() {
            if (animating) return false;
            animating = true;
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            previous_fs.show();
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now, mx) {
                    scale = 0.8 + (1 - now) * 0.2;
                    left = ((1 - now) * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'left': left
                    });
                    previous_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutExpo'
            });
        });
    });