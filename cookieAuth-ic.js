(function () {

	// https://github.com/ded/domready
	!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("domready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}});

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

	domready(function () {
		if (!getCookie()) {
			document.body.innerHTML = '<div id="ckau-ic">By continuing to use this website, you agree to our use of cookies - <a href="cookies.html">more information</a><span>&nbsp;&times;&nbsp;</span></div>' + document.body.innerHTML;
			var banner = document.getElementById('ckau-ic');
			if (banner.addEventListener) {
				banner.addEventListener('click', clickHandler);
			} else if (banner.attachEvent) {
				banner.attachEvent('onclick', clickHandler);
			}
		}
	});

})();
