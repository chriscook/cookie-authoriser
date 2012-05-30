Cookie Authoriser
=============

Version 1.1
-----------

### Introduction

These two scripts have been produced to give developers an easy way to make their websites compliant with [recent changes to the laws regarding cookie usage in the EU](http://www.ico.gov.uk/for_organisations/privacy_and_electronic_communications/the_guide/cookies.aspx). There are two options, explicit consent and implied consent- each use is detailed below.

### Explicit consent version

 `cookieAuth-ec.js` works by asking the user whether the website can set cookies, and offers an explaination as to what they will be used for. It also offers the user the opportunity to hide the banner, warning them that this in itself will set one cookie, but not allow others to be set.

#### How to use it

1. Add `cookieAuth-ec.min.js` to your project.
2. Use the `isAllowed()` function to determine whether or not permission to set cookies has been granted, for example:

```javascript
	if (isAllowed()) {
		// set cookies here
	}
```

A demo is available in demo-ec.html.

If you have some non-Javascript code setting cookies, you'll need to check whether a cookie called `ckau-ec` is set to `true` before setting cookies.

#### Customisation

To make deployment as easy as possible, the text for the message is embedded within the JavaScript file. You can edit this manually to add links to explanatory documents or your privacy policy.

For CSS purposes, the banner has an ID of `ckau-ec`, and it contains two `p` elements and two `a` elements (by default). It has no default styling set.

### Implied consent version

`cookieAuth-ic.js` works by telling the user that the website sets cookies, and offers them a link to read more. The banner can be dismissed by the user by clicking a small cross.

#### How to use it

Just add `cookieAuth-ic.min.js` to your project, and the banner will appear. A demo is available in demo-ic.html.

#### Customisation

To make deployment as easy as possible, the text for the message is embedded within the JavaScript file. You can edit this manually to add links to explanatory documents or your privacy policy.

For CSS purposes, the banner has an ID of `ckau-ic`, and it contains an `a` element (a link to your policy) and a `span` element (the button to dismiss the bar). It has no default styling set.

### Incorporating with larger codebases

This script was designed so that it could be dropped into any page and work with minimal effort and overhead, and no dependencies. For this reason it includes Dustin Diaz's [domready](https://github.com/ded/domready) script. You may want to extract the contents of this function within `cookieAuth.js`, and add it to the document ready function of your own code if your page already contains some JavaScript.

### Compatibility

Tested on:
+ Internet Explorer 7, 8, 9
+ Firefox
+ Chrome
+ Opera
+ Safari

### Author and acknowledgements

+ Written by [Chris Cook](http://chris-cook.co.uk)
+ Utilises [domready by Dustin Diaz](https://github.com/ded/domready)
