/*!
  Author      : Douglas "Amarelo" Lopes
  Author URI  : http://douglasamarelo.com/
  Version     : 1.3.0
*/

// - https://code.tutsplus.com/tutorials/create-bookmarklets-the-right-way--net-18154
// - http://mrcoles.com/bookmarklet/
// - http://bookmarklets.org/maker/

// Script
// Script
(function(){
	var $issues = document.querySelectorAll('.ghx-swimlane .ghx-column:nth-last-child(2) .ghx-issue');
	var render = function(key, summary) {
		return '- [' + key + '](https://jussibr.atlassian.net/browse/' + key + ') - ' + summary;
	};
	var result = '';
	var handleCopy = function(event) {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData('text/plain', result);
		}
	};

	$issues.forEach(function($issue) {
		var key = $issue.getAttribute('data-issue-key'),
		summary = $issue.querySelector('.ghx-summary').getAttribute('data-tooltip');

		result += render(key, summary) + '\n';
	});

	console.log(result);

	document.addEventListener('copy', handleCopy);
	document.execCommand('copy');
	document.removeEventListener('copy', handleCopy);
})();


// Bookmarklet
javascript:void%20function(){(function(){var%20t=document.querySelectorAll(%22.ghx-swimlane%20.ghx-column:nth-last-child(2)%20.ghx-issue%22),e=function(t,e){return%22-%20[%22+t+%22](https://jussibr.atlassian.net/browse/%22+t+%22)%20-%20%22+e},n=%22%22,o=function(t){t.preventDefault(),t.clipboardData%26%26t.clipboardData.setData(%22text/plain%22,n)};t.forEach(function(t){var%20o=t.getAttribute(%22data-issue-key%22),a=t.querySelector(%22.ghx-summary%22).getAttribute(%22data-tooltip%22);n+=e(o,a)+%22\n%22}),console.log(n),document.addEventListener(%22copy%22,o),document.execCommand(%22copy%22),document.removeEventListener(%22copy%22,o)})()}();