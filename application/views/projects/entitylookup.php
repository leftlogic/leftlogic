<div class="content" id="entitylookup">
  <section class="sub-section-alt">
    <h1>HTML Entity Character Lookup</h1> 
    <p>Using <abbr title="Hyper Text Markup Languge">HTML</abbr> entities is the right way to ensure all the characters on your page are <a href="http://validator.w3.org/check/referrer">validated</a>.  However, often finding the right entity code requires scanning through 250 rows of characters.</p> 

    <p><a class="more" id="more-12"></a></p> 

    <p>This lookup allows you to quickly find the entity based on how it looks, e.g. like an <a href="?q=&lt;" rel="&lt;" class="lookupExample">&lt;</a> or the letter <a href="?q=c" rel="c" class="lookupExample">c</a>.</p> 

    <h2 id="html_entity_lookup">HTML Entity Lookup</h2> 

    <form action="" id="lookupForm"> 
    <fieldset> 
    <legend>Lookup</legend> 
    <div class="floatL"> 
      <label for="s">HTML entities like, space separate for more:</label> 
      <input type="text" name="s" value="" id="s" style="width: 320px;" /> 
    </div> 
    <fieldset class="floatR"> 
      <legend>Options</legend> 
      <input type="checkbox" name="compressChk" value="" id="compress" /> <label class="inline" for="compress">Small output</label> 
      <div class="clear"></div> 
      <input type="checkbox" name="extendedChk" value="" id="extended" /> <label class="inline" title="Include extended character sets in search" for="extended">Incl. extended</label> 
      <!-- <label for="related" class="inline">Show related symbols?</label>
      <input type="checkbox" name="relatedChk" value="" id="related" /> --> 
    </fieldset> 
    <div class="clear"></div> 
    </fieldset> 
    </form> 

    <div id="results"></div> 

    <script src="/js/jquery.min.js"></script>
    <script src="/js/entity-lookup/entities.js"></script> 
    <script src="/js/entity-lookup/entity.data.js"></script> 
    <script src="/js/highlightFade.js"></script> 
    <script src="/js/entity-lookup/entity-lookup.js"></script> 

    <h2 id="widget">Dashboard Widget</h2> 

    <p><img src="/images/entity-lookup.jpg" height="215" width="284" style="float: right; padding: 0 0 2px 10px;" alt="Dashboard Widget Screenshot" title="HTML entity lookup widget" class="simple" /></p> 

    <p>The HTML entity lookup is also available as a <a href="http://www.apple.com/macosx/dashboard/">Dashboard</a> widget.</p> 

    <p>The widget works in the same way the web version does, and does not require an Internet connection to function.</p> 

    <p>Clicking on the particular row will copy the html entity code to the clipboard.</p> 

    <p><a href="/downloads/entities.zip">Download the dashboard Entity Lookup widget</a></p> 

    <div class="clear"></div> 

    <h2 id="features">Features</h2> 

    <ul> 
    <li>Search for entity characters based on how they look (taken from the <a href="http://www.w3.org/TR/html401/sgml/entities.html">W3C list of entities</a>)</li> 
    <li>Switch between standard and compressed views</li> 
    <li>Copy the HTML entity to the clipboard</li> 
    <li>Add your own keyword terms and characters to entities</li> 
    <li>Settings stored in a browser cookie</li> 
    <li>Available to be <a class="searchPluginLink" href="/downloads/html-character-codes.xml">installed as a search plugin</a></li> 
    <li>Available as a <a href="http://www.yining.org/2007/07/26/html-entity-char-lookup-firefox-extension/">Firefox plugin</a> - thanks to Yining</li> 
    </ul> 

    <script> 
    $('a.searchPluginLink').click(function () {
        try {
            window.external.AddSearchProvider('http://leftlogic.com/downloads/html-character-codes.xml');
        } catch (e) {
            alert("You need to be using IE7 or Firefox2 to add a search engine\r\nYou can also install search plugins by using the drop down menu to the right of the search box.");
        }
        return false;
    });
    </script> 

    <p>To reset the keywords, clear your cookies for this page and the default keyword dictionary.</p> 

    <h2 id="howitworks">How it Works</h2> 

    <p>The lookup searches the html entities for matches to the searched character based on how your character looks. For instance, the letter <a href="?q=c" rel="c" class="lookupExample">c</a> would match &copy; and &cent; entity, because of the way they look.</p> 

    <p>There's no clever logic behind this, only the most powerful computer known to man - man's own brain.</p> 

    <p>Each entity has had a list of 'like' matches added to them by hand and eye.  This is stored in a local dictionary file and loaded in during start-up (since it's so small there's no point in using an AJAX like solution).</p> 

    <p>The entity lookup also supports word searches and multiple searches space separated, such as <a rel="copy and cent" href="?q=copy%20and%20cent" class="lookupExample">copy and cent</a>.</p> 
  </section>
</div>