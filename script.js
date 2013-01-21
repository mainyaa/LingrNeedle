$(function(){
  var prevHiddenState = false;

  function onShowPage() {
    $('.active .say_form textarea').focus();
  }
  function handleVisibilityChange() {
    if (!document.webkitHidden && prevHiddenState) {
      onShowPage();
    }
    prevHiddenState = document.webkitHidden;
  }

  document.addEventListener("webkitvisibilitychange", handleVisibilityChange, false);

});
