<div id="home" class="content">   
  <div class="sub-section-alt">
    <h1><span class="alt">Left</span> Logic</h1>  
    <p>Left Logic is one of the few web-development agencies that actively define the Internet, instead of the other way around.</p>
    <p>We are front end development specialist. Our work is influenced by You. Your needs and the needs of your clients drive our design and build process, ensuring your website is finely tuned to your business conditions.  We achieve this by adopting a different perspective, using logical principles that apply from the left as well as the right.</p> 
    <p>We offer training, workshops and seminars, and regularly speak at conferences both in the UK and abroad.</p>
  </div><!-- /sub-section-alt -->
  
  <div class="portfolio">
    <h1>Recent Client Work</h1>
    <div class="medium">
      <?php foreach ($recent as $project) : ?>
      <section>
        <img src="<?=$project['img']?>" width="186" height="186" alt="<?=$project['client']?>">
        <div>
          <h2><?=$project['title']?></h2>
          <h3>Client: <?=$project['client']?></h3>
          <?php if (isset($project['url'])) : ?><h3><a href="<?=$project['url']?>">Live project</a></h3><?php endif ?>
        </div>
      </section>
      <?php endforeach ?>
    </div><!-- /portfolio-three -->
  </div><!-- /portfolio -->
</div><!-- /content -->