/*!
  Author     : Douglas "Amarelo" Lopes
  Author URI : http://douglasamarelo.com/
  Version    : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
(function() {
	var reporter     = document.querySelector('#reporter-val span').getAttribute('rel');
	var mySelf       = window.JIRA.Users.LoggedInUser.userName()
	var collapsedCom = document.querySelector('.collapsed-comments');
	var authorsList  = [ 'marcos_s_melo', 'ursula.marinho', 'stephani.galvani', 'ricardo.teixeira' ];
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
		for (var i = 0, len = commentAuthors.length; i < len; i++) {
			var author = commentAuthors[i].getAttribute('rel');

			// Verifica se os autores e o responsável pela task já estão na lista
			if ( authorsList.indexOf( author ) == -1 && author !== mySelf ) {
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
javascript:void%20function(){(function(){function%20e(){var%20e=document.querySelectorAll(%22.action-details%20a%22);-1==a.indexOf(t)%26%26a.push(t);for(var%20o=0,u=e.length;u%3Eo;o++){var%20c=e[o].getAttribute(%22rel%22);-1==a.indexOf(c)%26%26c!==n%26%26a.push(c)}r()}function%20r(){for(var%20e=0;e%3Ca.length;e++){var%20r=a[e];i+=%22%20[~%22+r+%22]%20%22}}var%20t=document.querySelector(%22%23reporter-val%20span%22).getAttribute(%22rel%22),n=window.JIRA.Users.LoggedInUser.userName(),o=document.querySelector(%22.collapsed-comments%22),a=[%22marcos_s_melo%22,%22ursula.marinho%22,%22stephani.galvani%22,%22ricardo.teixeira%22],u=document.querySelector(%22%23comment%22),c=u.value,i=%22%22;o%26%26o.click(),setTimeout(function(){e(),u.value=c+%22\n%22+i+%22%20PSC%22},2500)})()}();