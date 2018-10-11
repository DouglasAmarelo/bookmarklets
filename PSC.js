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
	var commentTexto = $('#comment').val();
	$('#comment').val(commentTexto + '\n [~gabriela.miliati] [~ursula.marinho] [~marcos_s_melo] [~marcelo.pavone] [~felipe.moura] PSC');
})();

// Bookmarklet
javascript:void%20function(){(function(){var%20a=$(%22%23comment%22).val();$(%22%23comment%22).val(a+%22\n%20[~gabriela.miliati]%20[~ursula.marinho]%20[~marcos_s_melo]%20[~marcelo.pavone]%20[~felipe.moura]%20PSC%22)})()}();