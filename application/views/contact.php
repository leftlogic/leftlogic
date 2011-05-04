<div class="content">   
  <section class="sub-section-alt">
    <h1>Contact Us</h1>  
    <p>Regardless of whether your project is big or small, if you want your website to feature the most sublime user experience possible then drop us a line to hire us.</p>   
    <p class="availability">Currently taking bookings for start of September and onwards.</p>
  </section><!-- /sub-section-alt -->

  <section class="sub-section">
    
    <?php echo $server_message; ?>
    
    <?php //echo validation_errors(); ?>
    
    <form action="/contact" method="post">

        <div class="first">
          <label for="fName">Name:</label>
          <input class="text-input" type="text" required name="name" value="<?=$name?>" id="fName">
          <em></em>
        </div>

        <div>
          <label for="fEmail">Email:</label>
          <input class="text-input" type="email" required name="email" value="<?=$email?>" id="fEmail">
          <em></em>
        </div>
        
        <div>
          <label for="fHeard">How did you hear about Left Logic?</label>
          <select id="fHeard" name="heard">
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
          <textarea required id="fMessage" name="message" rows="8" cols="40" class="wide"><?=$message?></textarea><em></em>
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
     <img class="fournminusthree" src="/images/client-logos/google.png" width="120" height="60" alt="Google"><img src="/images/client-logos/bbc.png" width="120" height="60" alt="BBC"><img src="/images/client-logos/fellow.png" width="120" height="60" alt="Fellow"><img class="fournminusthree" src="/images/client-logos/formula.png" width="120" height="60" alt="Formula"><img src="/images/client-logos/milo-2.png" width="120" height="60" alt="Milo"><img src="/images/client-logos/molecular.png" width="120" height="60" alt="Molecular"><img src="/images/client-logos/steel.png" width="120" height="60" alt="Steel"><img src="/images/client-logos/torchbox.png" width="120" height="60" alt="Torchbox"></p>
  </section><!-- /sub-section-alt -->
</div><!-- /content -->
