javascript:(
    function(){
      var container = document.getElementById("container");
      container.lastElementChild.insertBefore(container.lastElementChild.lastElementChild, container.lastElementChild.firstChild);
    }
  )();