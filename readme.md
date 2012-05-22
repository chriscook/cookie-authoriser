Cookie Authoriser
=============

Version 1.0
-----------

### Introduction

__Cookie Authoriser__ is a tiny script with no dependencies that gives the user the opportunity allow or deny the website to set further cookies. It has been created in order to provide an easy way for developers to comply with [recent changes to the laws regarding cookie usage in the EU](http://www.ico.gov.uk/for_organisations/privacy_and_electronic_communications/the_guide/cookies.aspx). It works by asking the user whether the website can set cookies, and offers an explaination as to what they will be used for. It also offers the user the opportunity to hide the banner, warning them that this in itself will set one cookie, but not allow others to be set.

### How to use it

1. Add `cookieAuth.min.js` to your project.
2. Use the `isAllowed()` function to determine whether or not permission to set cookies has been granted, for example:

	if (isAllowed()) {
		// set cookies here
	}

A demo is available in demo.html.

This script was designed so that it could be dropped into any page and work with minimal effort and overhead, and no dependencies. For this reason it includes Dustin Diaz's [domready](https://github.com/ded/domready) script. You may want to extract the contents of this function within `cookieAuth.js`, and add it to the document ready function of your own code if your page already contains some JavaScript.

### Customisation

To make deployment as easy as possible, the text for the message is embedded within the JavaScript file. You can edit this manually to add links to explanatory documents or your privacy policy.

For CSS purposes, the banner has an ID of `ckau`, and it contains two `p` elements and two `a` elements (by default). It has no default styling set.

### Compatibility

+ Internet Explorer 6, 7, 8, 9
+ Firefox
+ Chrome
+ Opera
+ Safari

### Author and acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
+ Utilises [domready by Dustin Diaz](https://github.com/ded/domready)
