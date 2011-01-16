<div class="content">   
  <section class="sub-section-alt">
    <h1>The Big <span class="alt">Workshop</span> Tour</h1>  
    <p>I'm running a series of rad workshops that are going to be totally cowabunger.</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore 
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <form method="post" action="/tour/signup">
      <h2>Where are you willing to travel to?</h2>
      <p>Drop a pin on the city or town you would most like to see a workshop take place:</p>
      <div id="tour-map"></div>
      <input type="hidden" name="locations" id="tour-locations"/>
      
      <p>Or select from this list of the most popular cities:</p>
      <fieldset>
        <label><input type="checkbox" name="manc" /> Manchester</label>
        <label><input type="checkbox" name="birm" /> Birmingham</label>
        <label><input type="checkbox" name="lndn" /> London</label>
      </fieldset><br />
      
      <h2>Register your interest</h2>
      <p>Let us know which workshops you would like to attend:</p>
      <fieldset>
        <label><input type="checkbox" name="html" /> HTML5</label>
        <label><input type="checkbox" name="jquery" /> jQuery For Designers</label>
        <label><input type="checkbox" name="node" /> Node.js</label>
      </fieldset>
      
      <p>If you would like to be contacted when we announce the final line-up of workshops leave us your email address</p>
      <label for="email">Email</label>
      <input type="email" name="email" value="" id="email" />
      
      <div>
        <label class="small">
          <input type="checkbox" name="venue"/>
          If you can provide offices or a venue we can run the workshop from,
          check this box, and we will offer you a free ticket if the venue os used.
        </label>
      </p>
      
      <div>
        <input class="button" type="submit" value="Submit"/>
      </div>
    </form>
  </section>
</div>