jest.dontMock('../handleInternalLinks');

var basicTestMarkup =
'<div id="container">' +
'<a href="/">internal</a>' +
'<a href="https://google.com">external</a>' +
'</div>';

describe('handleInternalLinks', function() {

  document.body.innerHTML = basicTestMarkup;
  var handleInternalLinks = require('../handleInternalLinks').handleInternalLinks;
  var containerLinksHandler = handleInternalLinks(document.querySelector("div"), null);

  it('adds "internal" attribute to internal links', function() {
    expect(document.getElementsByTagName("a")[0].hasAttribute("internal")).toBe(true);
  });

  it('lists current links when calling "currentLinks()"', function() {
    expect(containerLinksHandler.currentLinks().length).toEqual(2);
  });
  it('adds "internal" attribute to any new or changed links when calling "refreshLinks()"', function() {
    document.getElementsByTagName("a")[1].href = "./";
    containerLinksHandler.refreshLinks();
    expect(document.getElementsByTagName("a")[1].hasAttribute("internal")).toBe(true);
  });

});
