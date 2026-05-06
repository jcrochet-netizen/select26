/* Afrik-Foot 26 selector — parent-side iframe auto-resizer */
(function(){
  if (window.__af26ResizerInit) return;
  window.__af26ResizerInit = true;
  window.addEventListener('message', function(e){
    var d = e.data;
    if (d && d.af26 === 'resize' && typeof d.height === 'number') {
      var iframes = document.querySelectorAll('iframe[src*="jcrochet-netizen.github.io/select26"]');
      for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.height = (d.height + 20) + 'px';
      }
    }
  });
})();
