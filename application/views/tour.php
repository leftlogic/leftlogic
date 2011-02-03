<div class="content" id="tour">   
  <section class="sub-section-alt">
    <h1>The Big <span class="alt">Workshop</span> Tour</h1>  
    <p>Remy Sharp is planning to travel across the country to run the workshops you want, where you want.</p>
    <p>This is just phase 1: find out if you're interested. We're planning to run full-day workshops during May for around £200 per person.</p>
    <p>If you're interested, let us know where we should go, and what we should run and we'll email you as soon as tickets are released, or you can <a href="http://twitter.com/rem">follow @rem</a> where tickets will also be announced.</p>
    <p><strong>Deadline to register your interest is: Friday 25th Feburary.</strong></p>
    <form method="post" action="/tour/signup" id="tourinterest">
      <fieldset>
        <legend><strong>1.</strong> Which workshop?</legend>
        <p>Let us know which workshops you'd be interested in attending:</p>
        <div class="checkboxOptions">
          <label><input type="checkbox" name="workshop[]" value="html5" /> HTML5 APIs</label>
          <label><input type="checkbox" name="workshop[]" value="j4d" /> jQuery For Designers</label>
          <label><input type="checkbox" name="workshop[]" value="node" /> Node.js</label>
        </div>
        <p>For more information on some of the workshops, see our <a href="/training">training</a> page for details.</p>
    </fieldset>

    <fieldset>
      <legend><strong>2.</strong> Where would you be willing to travel to?</legend>
      <p>Select from our pre-selected cities or drop a pin on the map:</p>
      <div class="checkboxOptions">
        <label><input type="checkbox" name="preselected[]" value="birmingham" /> Birmingham</label>
        <label><input type="checkbox" name="preselected[]" value="brighton" /> Brighton</label>
        <label><input type="checkbox" name="preselected[]" value="bristol" /> Bristol</label>
        <label><input type="checkbox" name="preselected[]" value="dundee" /> Dundee</label>
        <label><input type="checkbox" name="preselected[]" value="london" /> London</label>
        <label><input type="checkbox" name="preselected[]" value="manchester" /> Manchester</label>
        <label><input type="checkbox" name="preselected[]" value="nottingham" /> Nottingham</label>
      </div>
      <div id="tour-map"></div>
    </fieldset>

    <fieldset>
      <legend><strong>3.</strong> Register your interest</legend>
      <label for="email">Email:</label>
      <input class="text-input" type="email" name="email" value="" id="email" required /><em></em>

      <div>
        <label class="small">
          <input type="checkbox" name="venue"/>
          If you can provide offices or a venue we can run the workshop from,
          check this box, and we will offer you a free ticket if the venue is used.
        </label>
      </p>

      <div>
        <input type="hidden" name="locations" id="tour-locations"/>
        <input type="hidden" name="action" value="send" />
        <input class="button" type="submit" value="Submit"/>
      </div>

    </fieldset>

    </form>
  </section>
</div>
<script src="http://www.google.com/jsapi"></script>
<script src="/js/markerclusterer.js"></script>
<script>
var markersData = <?=$markersData?>;
</script>
<script src="/js/tour.js"></script>