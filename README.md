# TweetDeck_MoveLastColumnToFirstColumn

TweetDeck Bookmarklet.

```javascript
javascript:( function(){ var container_child = document.getElementById("container").firstElementChild; container_child.insertBefore(container_child.lastElementChild, container_child.firstChild); var column_navi_grandson= document.getElementById("column-navigator").firstElementChild.firstElementChild; column_navi_grandson.insertBefore(column_navi_grandson.lastElementChild, column_navi_grandson.firstChild); } )();
```

This is a <a href="http://en.wikipedia.org/wiki/Bookmarklet">bookmarklet(Wikipedia)</a> 
you can use to move last column to first column in TweetDeck.

