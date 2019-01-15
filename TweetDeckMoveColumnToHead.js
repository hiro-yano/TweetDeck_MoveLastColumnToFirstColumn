javascript:(
    function(){
      var container_child = document.getElementById("container").firstElementChild;
      container_child.insertBefore(container_child.lastElementChild, container_child.firstChild);
      var column_navi_grandson= document.getElementById("column-navigator").firstElementChild.firstElementChild;
      column_navi_grandson.insertBefore(column_navi_grandson.lastElementChild, column_navi_grandson.firstChild);
    }
  )();