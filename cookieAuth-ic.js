(function () {

	function setCookie(value) {
		var date = new Date(),
			expires = 'expires=';
		date.setTime(date.getTime() + 31536000000);
		expires += date.toGMTString();
		document.cookie = 'ckau-ic=' + value + '; ' + expires + '; path=/';
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
			if (currentCookie.indexOf('ckau-ic=') === 0) {
				return currentCookie.substring(8, currentCookie.length);
			}
		}
		return false;
	}

	function clickHandler() {
		var ev = arguments[0] || window.event,
			buttonClicked = ev.target || ev.srcElement;
		if (buttonClicked.tagName === 'SPAN' || buttonClicked.tagName === 'span') {
			setCookie('1');
			document.getElementById('ckau-ic').style.display = 'none';
		}
	}

	if (!getCookie()) {
		document.body.innerHTML = '<div id="ckau-ic">By continuing to use this website, you agree to our use of cookies - <a href="cookies.html">more information</a><span>&nbsp;&times;&nbsp;</span></div>' + document.body.innerHTML;
		var banner = document.getElementById('ckau-ic');
		if (banner.addEventListener) {
			banner.addEventListener('click', clickHandler);
		} else if (banner.attachEvent) {
			banner.attachEvent('onclick', clickHandler);
		}
	}

})();
