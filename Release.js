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
	var $listIssues = document.querySelector('.release-report-issues');
	var $issues = $listIssues.querySelectorAll('tr');
	var render = function(key, summary) {
		return '- [' + key + '](https://jussibr.atlassian.net/browse/' + key + ') - ' + summary;
	};

	var result = '';

	$issues.forEach(function($issue) {
		var key = $issue.querySelector('.issue-key').textContent,
		summary = $issue.querySelector('.issue-summary').textContent;

		result += render(key, summary) + '\n';
	});

	document.addEventListener('copy', function(event) {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData('text/plain', result);
		}
	});

	document.execCommand('copy');
})();


// Bookmarklet
javascript:void%20function(){(function(){var%20e=document.querySelector(%22.release-report-issues%22),t=e.querySelectorAll(%22tr%22),n=function(e,t){return%22-%20[%22+e+%22](https://jussibr.atlassian.net/browse/%22+e+%22)%20-%20%22+t},r=%22%22;t.forEach(function(e){var%20t=e.querySelector(%22.issue-key%22).textContent,o=e.querySelector(%22.issue-summary%22).textContent;r+=n(t,o)+%22\n%22}),document.addEventListener(%22copy%22,function(e){e.preventDefault(),e.clipboardData%26%26e.clipboardData.setData(%22text/plain%22,r)}),document.execCommand(%22copy%22)})()}();