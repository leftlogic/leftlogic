<div id="missing" class="content">   
  <section class="sub-section-alt">
    <h1>Couldn't find: <?=$originalURL?>!</h1>
    <p>Nope, looking around and couldn't find what you were looking for.</p>
    <p>If it wasn't important, how about you play in this box I've left you:</p>
    <div id="play"></div>
    <?php if (count($files) && is_array($files)) : shuffle($files); ?>
    <div id="others">
      <h2>Other 404 images people have left behind:</h2>
      <?php for ($i = 0; $i < 8 && @$files[$i]; $i++) : ?><img src="/images/generated/<?=$files[$i]?>" width="64" /><?php endfor ?>
    </div>
    <?php endif ?>
    <form id="submit" action="/savepng.php" method="post">
      <input type="hidden" name="data" value="" id="data">
    </form>
  </section>
</div>