(function() {
	setTimeout(function() {
		var vtexTopBar = document.querySelector('#topbar-vtex');
		var prodBar    = document.createElement('div');
		var qaBar      = document.createElement('div');
		var $body      = document.querySelector('body');

		prodBar.setAttribute('id', 'jussi-bar-prod')
		qaBar.setAttribute('id', 'jussi-bar-qa')

		var regProd = /(compracerta\.|colaboradorwhp\.|brastemp(empresa)?\.|consul(empresa)?\.)/gmi;
		var regQA = /(qa2?\.)/gmi;

		function renderBar(ambiente, hexaColor) {
			console.log('RENDER');
			return `
				<div style="background: #${hexaColor}; padding: 1em; color: #000; font-weight: bold; border: 1px solid #000; font-size: 16px; font-family: 'Trebuchet MS', Tahoma;">
					Você está no ambiente de [ ${ambiente} ]
				</div>
			`;
		}

		// Prod
		if (window.location.host.match(regProd)) {
			console.log('PROD');
			$body.insertBefore(prodBar, vtexTopBar);
			document.querySelector('#jussi-bar-prod').innerHTML = renderBar('PRODUÇÃO', '44fb53');
		}

		// QA
		if (window.location.host.match(regQA)) {
			console.log('QA');
			$body.insertBefore(qaBar, vtexTopBar);
			document.querySelector('#jussi-bar-qa').innerHTML = renderBar('QA', 'eefb44');
		}

	}, 3000);
})();