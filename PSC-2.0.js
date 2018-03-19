/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
(function(){
	var reporter     = document.querySelector('#reporter-val span').getAttribute('rel');
	var assignee     = document.querySelector('#assignee-val span').getAttribute('rel');
	var collapsedCom = document.querySelector('.collapsed-comments');
	var authorsList  = [ 'marcos_s_melo', 'ursula.marinho', 'carol.barrios', 'marcelo.pavone' ];
	var commentField = document.querySelector('#comment');
	var commentText  = commentField.value;
	var allAuthors   = '';

	// Caso a task tenha comentários antigos encolhidos.
	if ( collapsedCom ) {
		collapsedCom.click();
	}

	// Pega todos os autores
	function getAuthors() {
		var commentAuthors = document.querySelectorAll('.action-details a');

		// Verifica se o demandante não está na lista default e adiciona
		if ( authorsList.indexOf( reporter ) == -1 ) {
			authorsList.push( reporter );
		}

		// Percorre a lista de todos os autores
		for (var i = 0; i < commentAuthors.length; i++) {
			var author = commentAuthors[i].getAttribute('rel');

			// Verifica se os autores e o responsável pela task já estão na lista
			if ( authorsList.indexOf( author ) == -1 && author !== assignee ) {
				authorsList.push( author );
			}
		}

		commentTemplate();
	}

	// Cria o template que será usado no comentário
	function commentTemplate() {
		// Percorre a lista atualizada e conferida de autores únicos
		for (var i = 0; i < authorsList.length; i++) {
			var element = authorsList[i];

			// Cria o template para a marcação de pessoas
			allAuthors += ' [~' + element + '] ';
		}
	}

	// Esperando os comentários carregarem
	setTimeout(function() {
		getAuthors();

		// Atualiza o campo de comentário com as pessoas selecionadas
		commentField.value = commentText + '\n' + allAuthors + ' PSC';

	}, 2500);

})();

// Bookmarklet
javascript:void%20function(){(function(){function%20e(){var%20e=document.querySelectorAll(%22.action-details%20a%22);-1==u.indexOf(r)%26%26u.push(r);for(var%20n=0;n%3Ce.length;n++){var%20a=e[n].getAttribute(%22rel%22);-1==u.indexOf(a)%26%26a!==o%26%26u.push(a)}t()}function%20t(){for(var%20e=0;e%3Cu.length;e++){var%20t=u[e];l+=%22%20[~%22+t+%22]%20%22}}var%20r=document.querySelector(%22%23reporter-val%20span%22).getAttribute(%22rel%22),o=document.querySelector(%22%23assignee-val%20span%22).getAttribute(%22rel%22),n=document.querySelector(%22.collapsed-comments%22),u=[%22marcos_s_melo%22,%22ursula.marinho%22,%22carol.barrios%22,%22marcelo.pavone%22],a=document.querySelector(%22%23comment%22),c=a.value,l=%22%22;n%26%26n.click(),setTimeout(function(){e(),a.value=c+%22\n%22+l+%22%20PSC%22},2500)})()}();