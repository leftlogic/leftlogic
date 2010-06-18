<div class="content">   
  <section class="sub-section-alt">
    <h1>Hire Us</h1>  
    <p>Regardless of whether your project is big or small, if you want your website to feature the most sublime user experience possible then drop us a line.</p>   
  </section><!-- /sub-section-alt -->

  <section class="sub-section">
    
    <?php echo $server_message; ?>
    
    <?php //echo validation_errors(); ?>
    
    <form action="<?php echo current_url(); ?>" method="post">

        <div class="first">
          <label for="fName">Name:</label>
          <input class="text-input" type="text" name="fName" value="<?php echo set_value('fName'); ?>" id="fName">
        </div>

        <div>
          <label for="fEmail">Email:</label>
          <input class="text-input" type="email" name="fEmail" value="<?php echo set_value('fEmail'); ?>" id="fEmail">
        </div
        
        <div>
          <label for="fHeard">How did you hear about Left Logic?</label>
          <select id="fHeard" name="fHeard">
            <option class="unknown">-- Please let us know --</option>
            <optgroup label="Our Projects">
              <option>jQuery For Designers</option>
              <option>Snap Bird</option>
              <option>JS Bin</option>
              <option>HTML5 Demos</option>
            </optgroup>
            <optgroup label="Elsewhere">
              <option>Recommendation</option>
              <option>Twitter</option>
              <option>Full Frontal</option>
              <option>Other</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label for="fMessage">Your message:</label>
          <textarea id="fMessage" name="fMessage" rows="8" cols="40" class="wide"><?php echo set_value('fMessage'); ?></textarea>
        </div>
        
        <div>
          <input class="button" type="submit" value="Send">
          <input type="hidden" name="action" value="send">
        </div>
    </form>
  </section><!-- /sub-section -->
</div><!-- /content -->

<div class="content">  
  <section class="sub-section-alt">
    <!-- <p class="lede">We work directly for organisations or on behalf of other digital agencies, our clients include:</p> -->
    <h1>Some of our clients</h1>
    <p class="logos">
     <img class="fournminusthree" src="/images/client-logos/bbc.png" width="120" height="60" alt="BBC">
     <img src="/images/client-logos/fellow.png" width="120" height="60" alt="Fellow">
     <img src="/images/client-logos/formula.png" width="120" height="60" alt="Formula">
     <img class="fournminusthree" src="/images/client-logos/milo-2.png" width="120" height="60" alt="Milo">
     <img src="/images/client-logos/molecular.png" width="120" height="60" alt="Molecular">
     <img src="/images/client-logos/steel.png" width="120" height="60" alt="Steel">
     <img src="/images/client-logos/torchbox.png" width="120" height="60" alt="Torchbox"> 
     <img src="/images/client-logos/dharmafly.png" width="120" height="60" alt="Dharmafly">
    </p>
  </section><!-- /sub-section-alt -->
</div><!-- /content -->