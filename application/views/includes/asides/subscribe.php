<section class="sticky"><div>
  <h2>Subscribe to announcements</h2>
  <form action="https://tinyletter.com/leftlogic" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/leftlogic', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
    <p><label for="tlemail">If you want to be the first to hear of upcoming training and events, subscribed to our mailing list:</label></p>
    <p><input type="text" style="width:180px" placeholder="your email" name="email" id="tlemail" /><input type="hidden" value="1" name="embed"/></p>
    <input class="block-link" type="submit" value="Subscribe" />
  </form>
</div></section>
<script>
(function () {
  if (!document.querySelector || !document.body.classList) return;

  var sticky = document.querySelector('.sticky'),
      origOffsetY = sticky.offsetTop;

  function onScroll(e) {
    window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                    sticky.classList.remove('fixed');
  }

  document.addEventListener('scroll', onScroll);
})();
</script>