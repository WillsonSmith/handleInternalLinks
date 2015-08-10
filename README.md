#handleInternalLinks
This is a small bit of javascript to handle all internal links.
You can use it to perform another function on these links by passing it a callback, or alternatively you can pass it `null`
to just add an `internal` attribute to all internal links.

For convenience, both the `.coffee`, and `.js` files have been included.

To use, either `require` it, or include it on your page. It is set up to use `module.exports` if available.
From here, assign it to a variable either with a callback, or not.
```
var containerLinksHandler = handleInternalLinks(document.getElementById("container"), function(e) {
  e.preventDefault();
  var link = e.target;
  alert(link.href);
});

var bodyLinksHandler = handleInternalLinks(document.getElementById("container"), null);
```
Initializing will automatically add an `internal` attribute to any internal link,
if you add a link to the page after this, you can call `.refreshLinks()`
to set the attribute again. example:

```
var newAnchor = document.createElement("a");
newAnchor.href = "../internal";
newAnchor.textContent = "this link was added after init and modified via the \".refreshLinks()\" method "
document.getElementById("container").appendChild(newAnchor);
bodyLinksHandler.refreshLinks();
```
for convenience, there is also a method `.currentLinks()` which will return a static array of all current links.

##tests
Tests are written using [Jest](https://facebook.github.io/jest/) by Facebook.

Note: tests may not run with io.js
