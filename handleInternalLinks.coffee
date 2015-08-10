root = exports ? this
handleInternalLinks = (container, callback) ->
  containerLinks = container.getElementsByTagName("a")

  linkHasInternalAttribute = (link) ->
    link.hasAttribute("internal")

  isLocalPath = (path) ->
    regexMatch = new RegExp(location.host)
    path.match(regexMatch)

  setInternalLinkAttribute = (links) ->
    for link in links
      link.setAttribute("internal", "") if isLocalPath(link.href)
    links

  handleInternalAnchorClicks = (event) ->
    target = event.target
    if target.tagName == "A" and linkHasInternalAttribute(target)
      callback(event)

  ((container, links)->
    setInternalLinkAttribute(links)
    container.addEventListener("click", handleInternalAnchorClicks)
  )(container, containerLinks)

  {
    refreshLinks: () -> setInternalLinkAttribute(containerLinks)
    currentLinks: () -> [].slice.call(containerLinks)
  }

root.handleInternalLinks = handleInternalLinks
