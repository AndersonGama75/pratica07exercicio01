function resultado (ln) {

	//var xy = ln;

	if (ln == 'ln1' || ln == 'ln2' || ln == 'ln3' || ln == 'ln4' || ln == 'ln5') {   // Controlando se o usuário clicou diretamente na tabela ou usou a caixa de diálogo.
	
		if (ln == 'ln1') {   // Controlando qual linha da tabela foi clicada pelo usuário.
			
			var linha = document.getElementById("ln1");
			var colunas = linha.getElementsByTagName('td');
			var nomeAluno = colunas[0].firstChild.nodeValue;
			var nomeMaiusc = nomeAluno;
			nomeAluno = nomeAluno.toLowerCase();
		}	else if (ln == 'ln2') {

				var linha = document.getElementById("ln2");
				var colunas = linha.getElementsByTagName('td');
				var nomeAluno = colunas[0].firstChild.nodeValue;
				var nomeMaiusc = nomeAluno;
				nomeAluno = nomeAluno.toLowerCase();
			}	else if (ln == 'ln3') {
					var linha = document.getElementById("ln3");
					var colunas = linha.getElementsByTagName('td');
					var nomeAluno = colunas[0].firstChild.nodeValue;
					var nomeMaiusc = nomeAluno;
					nomeAluno = nomeAluno.toLowerCase();
				}	else if (ln == 'ln4') {
						var linha = document.getElementById("ln4");
						var colunas = linha.getElementsByTagName('td');
						var nomeAluno = colunas[0].firstChild.nodeValue;
						var nomeMaiusc = nomeAluno;
						nomeAluno = nomeAluno.toLowerCase();
					}	else if (ln == 'ln5') {
							var linha = document.getElementById("ln5");
							var colunas = linha.getElementsByTagName('td');
							var nomeAluno = colunas[0].firstChild.nodeValue;
							var nomeMaiusc = nomeAluno;
							nomeAluno = nomeAluno.toLowerCase();
						}
	}	else {
			var nomeAluno = document.getElementById("nome").value.toLowerCase();
						
			function capitalize(string) {   // funcao capitalize() >> torna a primeira letra maiúscula.
			    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
			}
			
			var nomeMaiusc = capitalize(nomeAluno);   // Atribuindo à variável 'nomeMaiusc'o valor da chamada da função capitalize().

		}

	


	// Trabalhando a média atualizada.
	var corpo = document.getElementById("tabela");
	var notas = corpo.getElementsByTagName("td");

	var media = 0;
	var numNotas = 0;
	var temp = 0;

	for (i = 10; i < notas.length; i += 6) {
		temp = notas[i].firstChild.nodeValue;   // Recolhendo as notas numa variável temporária para fazer o parseFloat().
		temp = parseFloat(temp);
		media += temp;   // Somando cada valor númerico à variável 'media'.
		temp = 0;
		numNotas += 1;   // Registrando a quantidade de notas obtidas.

	}

	media /= numNotas;
	document.getElementById("mediaPost").innerHTML = media;   // Transportando a média atualizada para a célula correspondente.

	
	
	
	
	//var xy = colunas[0].firstChild.nodeValue;
	//console.log(nomeAluno);
	
	/*if (nomeAluno == 'gisele') {
		alert("GISELE Ok!");
	}	else {
			alert("desconhecido!");
		}*/
	
		
	/*for (j = 0; j < nomeAluno.length; j++) {
		console.log(nomeAluno[j]);
	}*/
	
	

	switch (nomeAluno) {
		case 'ana':
			var linha = document.getElementById("ln1");
			var colunas = linha.getElementsByTagName('td');
			var nt = colunas[4].firstChild.nodeValue;
			var ft = colunas[5].firstChild.nodeValue;

			if (nt >= 70 && ft < 3) {
				alert(nomeMaiusc + " foi Aprovado(a) - Nota final: " + nt + "; Faltas: " + ft);
			}	else if (nt >= 70 && ft >= 3) {
					alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir nota suficiente sua frequência é insuficiente - Nota: " + nt + "; Faltas: " + ft);
				}	else if (nt < 70 && ft < 3) {
						alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir frequência suficiente sua nota é insuficiente - Nota: " + nt + "; Faltas: " + ft);
					}	else {
							alert(nomeMaiusc + " foi Reprovado(a) pois não obteve nem nota e nem frequência suficientes - Nota: " + nt + "; Faltas: " + ft);
						}
		break;
		case 'gisele':
			var linha = document.getElementById("ln2");
			var colunas = linha.getElementsByTagName('td');
			var nt = colunas[4].firstChild.nodeValue;
			var ft = colunas[5].firstChild.nodeValue;

			if (nt >= 70 && ft < 3) {
				alert(nomeMaiusc + " foi Aprovado(a) - Nota final: " + nt + "; Faltas: " + ft);
			}	else if (nt >= 70 && ft >= 3) {
					alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir nota suficiente\nsua frequência é insuficiente - Nota: " + nt + "; Faltas: " + ft);
				}	else if (nt < 70 && ft < 3) {
						alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir frequência suficiente\nsua nota é insuficiente - Nota: " + nt + "; Faltas: " + ft);
					}	else {
							alert(nomeMaiusc + " foi Reprovado(a) pois não obteve nem nota e nem frequência suficientes\nNota: " + nt + "; Faltas: " + ft);
						}
		break;
		case 'jane':
			var linha = document.getElementById("ln3");
			var colunas = linha.getElementsByTagName('td');
			var nt = colunas[4].firstChild.nodeValue;
			var ft = colunas[5].firstChild.nodeValue;

			if (nt >= 70 && ft < 3) {
				alert(nomeMaiusc + " foi Aprovado(a) - Nota final: " + nt + "; Faltas: " + ft);
			}	else if (nt >= 70 && ft >= 3) {
					alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir nota suficiente\nsua frequência é insuficiente - Nota: " + nt + "; Faltas: " + ft);
				}	else if (nt < 70 && ft < 3) {
						alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir frequência suficiente\nsua nota é insuficiente - Nota: " + nt + "; Faltas: " + ft);
					}	else {
							alert(nomeMaiusc + " foi Reprovado(a) pois não obteve nem nota e nem frequência suficientes\nNota: " + nt + "; Faltas: " + ft);
						}
		break;
		case 'jorge':
			var linha = document.getElementById("ln4");
			var colunas = linha.getElementsByTagName('td');
			var nt = colunas[4].firstChild.nodeValue;
			var ft = colunas[5].firstChild.nodeValue;

			if (nt >= 70 && ft < 3) {
				alert(nomeMaiusc + " foi Aprovado(a) - Nota final: " + nt + "; Faltas: " + ft);
			}	else if (nt >= 70 && ft >= 3) {
					alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir nota suficiente\nsua frequência é insuficiente - Nota: " + nt + "; Faltas: " + ft);
				}	else if (nt < 70 && ft < 3) {
						alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir frequência suficiente\nsua nota é insuficiente - Nota: " + nt + "; Faltas: " + ft);
					}	else {
							alert(nomeMaiusc + " foi Reprovado(a) pois não obteve nem nota e nem frequência suficientes\nNota: " + nt + "; Faltas: " + ft);
						}
		break;
		case 'marina':
			var linha = document.getElementById("ln5");
			var colunas = linha.getElementsByTagName('td');
			var nt = colunas[4].firstChild.nodeValue;
			var ft = colunas[5].firstChild.nodeValue;

			if (nt >= 70 && ft < 3) {
				alert(nomeMaiusc + " foi Aprovado(a) Nota final: " + nt + "; Faltas: " + ft);
			}	else if (nt >= 70 && ft >= 3) {
					alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir nota suficiente\nsua frequência é insuficiente - Nota: " + nt + "; Faltas: " + ft);
				}	else if (nt < 70 && ft < 3) {
						alert(nomeMaiusc + " foi Reprovado(a) pois apesar de possuir frequência suficiente\nsua nota é insuficiente - Nota: " + nt + "; Faltas: " + ft);
					}	else {
							alert(nomeMaiusc + " foi Reprovado(a) pois não obteve nem nota e nem frequência suficientes\nNota: " + nt + "; Faltas: " + ft);
						}
		break;
		default:
			alert("Aluno desconhecido!");
	}
	
	/* for (i = 0; i < colunas.length; i++)	{
		
		alert("conteudo da coluna " + i + " -> " + colunas[i].firstChild.nodeValue);
	} */



}






document.addEventListener('keydown', function (event) {   // função que chama a função 'resultado()' ao clicar ENTER; É necessário acrescentar type="text/javascript" no <script> do HTML.
    if (event.keyCode !== 13) return
    resultado();
});