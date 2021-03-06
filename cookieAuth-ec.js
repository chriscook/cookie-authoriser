var isAllowed = (function () {

	function setCookie(value) {
		var date = new Date(),
			expires = 'expires=';
		date.setTime(date.getTime() + 31536000000);
		expires += date.toGMTString();
		document.cookie = 'ckau-ec=' + value + '; ' + expires + '; path=/';
	}

	function getCookie() {
		var allCookies = document.cookie.split(';'),
			cookieCounter = 0,
			currentCookie = '';
		for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
			currentCookie = allCookies[cookieCounter];
			while (currentCookie.charAt(0) === ' ') {
				currentCookie = currentCookie.substring(1, currentCookie.length);
			}
			if (currentCookie.indexOf('ckau-ec=') === 0) {
				return currentCookie.substring(8, currentCookie.length);
			}
		}
		return false;
	}

	function clickHandler() {
		var ev = arguments[0] || window.event,
			buttonClicked = ev.target || ev.srcElement;
		if (buttonClicked.getAttribute('data-a') === 'y') {
			setCookie('true');
			document.location.reload();
		} else if (buttonClicked.getAttribute('data-a') === 'n') {
			setCookie('false');
			document.getElementById('ckau-ec').style.display = 'none';
		}
	}

	if (!getCookie()) {
		document.body.innerHTML = '<div id="ckau-ec"><p>We would like to store a few small cookies on your computer to help us better understand how people use this website.</p><p>If you select \'disallow\' below, we will simply store a cookie that will tell this website to remove this message.</p><a data-a="y">Allow</a>&nbsp;<a data-a="n">Disallow</a></div>' + document.body.innerHTML;
		var banner = document.getElementById('ckau-ec');
		if (banner.addEventListener) {
			banner.addEventListener('click', clickHandler);
		} else if (banner.attachEvent) {
			banner.attachEvent('onclick', clickHandler);
		}
	}

	return function () {
		return getCookie() === 'true';
	};

})();
