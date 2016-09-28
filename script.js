$(document).ready(function(){

	$("#n-pais").bind('keyup mouseup', function (){
		var tamFilho = parseInt(document.getElementById("n-filhos").value, 10);
		var tamPai = parseInt(document.getElementById("n-pais").value, 10);
		var tamKit = (tamPai+tamFilho);
		$(".n-personalizado").html(tamKit);
		//check new values
		var valorNovoFixado = parseInt(document.getElementById("tracejado").value, 10);
		var valorNovo = parseInt(document.getElementById("valor").value, 10);
		valorNovo = (250 * (tamKit - 2) + 447).toFixed(2);
		valorNovoFixado = (250 * (tamKit - 2) + 599).toFixed(2);
		$("#valor").html(valorNovo);
		$("#tsd").html(valorNovoFixado);

	
	});
	$("#n-filhos").bind('keyup mouseup', function (){
		var tamFilho = parseInt(document.getElementById("n-filhos").value, 10);
		var tamPai = parseInt(document.getElementById("n-pais").value, 10);
		var tamKit = (tamPai+tamFilho);
		$(".n-personalizado").html(tamKit);
			//check new values
		var valorNovoFixado = parseInt(document.getElementById("tracejado").value, 10);
		var valorNovo = parseInt(document.getElementById("valor").value, 10);
		valorNovo = (250 * (tamKit - 2) + 447).toFixed(2);
		valorNovoFixado = (250 * (tamKit - 2) + 599).toFixed(2);
		$("#valor").html(valorNovo);
		$("#tsd").html(valorNovoFixado);

	});

});