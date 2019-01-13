# TweetDeck_MoveLastColumnToFirstColumn

TweetDeck Bookmarklet.

```javascript
javascript:(
    function(){
      var container = document.getElementById("container");
      container.lastElementChild.insertBefore(container.lastElementChild.lastElementChild, container.lastElementChild.firstChild);
    }
  )();
```

<a href="javascript:(function(){ var container = document.getElementById('container');container.lastElementChild.insertBefore(container.lastElementChild.lastElementChild,container.lastElementChild.firstChild);})();">This link is a source code above. If you right-click this link and copy link address. and save this link to book mark.</a>

This is a <a href="http://en.wikipedia.org/wiki/Bookmarklet">bookmarklet(Wikipedia)</a> 
you can use to move last column to first column in TweetDeck.

