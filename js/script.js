    /*
     *
     * Plug-ins: jQuery Validate, jQuery 
     * Easing
     */


   jQuery(document).ready(function($) {

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

        var current_fs, next_fs, previous_fs;
        var left, opacity, scale;
        var animating;

        // $(document).on("click",".next-1",function() {

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
                    telefone2: {
                        number: true
                    },
                    cep1: {
                        maxlength: 8
                    },
                    cep2: {
                        maxlength: 8
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
                    cep1: {
                        number: "Por favor insira um número válido",
                        maxlength: "Limite de 8 caracteres",
                    },
                    cep2: {
                        number: "Por favor insira um número válido",
                        maxlength: "Limite de 8 caracteres",
                    },
                    telefone2: {
                        maxlength: "Por favor insira um número de telefone",
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
        // });


        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#bs-collapse')
            .on('show.bs.collapse', function(a) {
                $(a.target).prev('.panel-heading').addClass('active');
            })
            .on('hide.bs.collapse', function(a) {
                $(a.target).prev('.panel-heading').removeClass('active');
            });


        var k = 1;
        $(document).on("click", ".myDelete", function() {
            $(this).parents(".panel").addClass("hidden");
            k--;
        });

        $(document).on("click", ".novo-endereco", function() {
            // if ($(".panel[data-endereco=" + k + "]").is(":visible")) {
            //     if ($("#remetente" + k + "").val() == "" || $("#cep" + k + "").val() == "" || $("#bairro" + k + "").val() == "" || $("#cidade" + k + "").val() == "" || $("#telefone" + k + "").val() == "") {
            //         alert("Antes de adicionar outro endereco preencha o endereço vazio");
            //         return;
            //     }
            // }

            if ($(".panel[data-endereco=" + k + "]").next().not(":visible").length > 0) {
                $(".panel[data-endereco=" + k + "]").next().removeClass("hidden").addClass("show");
                k++;
            }
            if (k > 6) {
                k = 1;
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