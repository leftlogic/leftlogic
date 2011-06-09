  </aside>
  
  <footer>
    <?php echo isset($motif) && $motif ? '<div id="motif"></div>' : ''; ?>
    <div class="fat-footer">
    <?php /* 
    <section>
      <h2>Left <span class="alt">Logic</span></h2>
      <ul>
        <li><a href="">Consultancy</a></li>
        <li><a href="">Remy Sharp</a></li>
        <li><a href="/portfolio/testimonials">Testimonials</a></li>
        <li><a href="/portfolio/clientlist">Client List</a></li>
      </ul>
    </section>
      
      <section>
        <h2>Development</h2>
        <ul>
          <li><a href="">Front-End Design</a></li>
          <li><a href="">jQuery &amp; Javascript</a></li>
          <li><a href="">Mobile Apps</a></li>
          <li><a href="">R&amp;D Lab</a></li>
        </ul>
      </section>
      
      <section>
        <h2 class="alt">Training</h2>
        <ul>
          <li><a href="">Staff Workshop</a></li>
          <li><a href="">Seminar Delivery</a></li>
          <li><a href="">Availability Calendar</a></li>
          <li><a href="">Public Speaking</a></li>
        </ul>
      </section>
    */ ?>
      
      <section class="vcard">
        <h2 class="alt">Call <strong>+44 (0) 1273 557744</strong></h2>
        <p>9.30am - 5.30pm Monday-Friday</p>
        <br/>
        <p class="fn org">Left Logic <abbr>Ltd.</abbr></p>
        <p class="adr"><span class="street">44 Burstead Close</span>, <span class="locality">Brighton</span>, <span class="postal-code">BN1 7HT</span></p>
        <?php /* <a class="alt" href="http://h2vx.com/vcf/referer">vCard Download</a><a href="">Location Map</a> */ ?>
      </section>
      
    </div>
    <div class="legal">
      <p><abbr title="Copyright">&copy;</abbr> <?=date('Y', time())?> Left Logic <abbr>Ltd.</abbr> All rights reserved. Registered Company <abbr title="number">No.</abbr> 05926047</p>
    </div>
  </footer>
  
</div><!-- /wrapper -->
<script src="/js/leftlogic.js"></script>
<script> 
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1656750-2']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
})();
</script> 
</body>
</html>