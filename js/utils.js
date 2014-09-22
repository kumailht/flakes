var globals = {
	ie: (function(){
		var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');
		
		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);
		
		return v > 4 ? v : undef;
	}())
};
var Utils = {
	isMobileDevice: function() {
		return (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent);
	}
};
