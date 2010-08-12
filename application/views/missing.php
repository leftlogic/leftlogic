<div id="missing" class="content">   
  <section class="sub-section-alt">
    <h1>Couldn't find: <?=$originalURL?>!</h1>
    <p>Nope, looking around and couldn't find what you were looking for.</p>
    <p>If it wasn't important, how about you play in this box I've left you:</p>
    <div id="play"></div>
<?php
/*
    <div id="others">
      <?php if (file_exists($file)) : ?>
      <img src="<?=$file?>" />
      <?php endif ?>
    </div>
    <form id="submit" action="/missing/submit" method="post">
      <input type="hidden" name="data" value="" id="data">
    </form>
    <script>
    (function () {
      var field = document.getElementById('data');
      var i = new Image();
      window.onunload = function () {
        field.value = document.getElementById('play').firstChild.toDataURL('image/png');
        field.form.submit();
        // alert('ok');
      };
    })();
    </script>
*/
?>
  </section>
</div>