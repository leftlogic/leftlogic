<div class="content">   
  <section class="sub-section-alt">
    <h1>Microformats Bookmarklet</h1>
    <p>Inspired by <a href="http://www.hicksdesign.co.uk">John Hicks</a> <a href="http://microformats.org">microformats</a> <a href="http://www.hicksdesign.co.uk/journal/a-proposal-for-a-safari-microformats-plugin">Safari mock</a>, it was quickly apparent that this (or a version of this) functionality was possible through a bookmarklet.</p> 
 
    <p><a class="more" id="more-7"></a></p> 
 
    <h2 id="bookmarklet">Bookmarklet</h2> 
 
    <p>To use the bookmarklet, drag the link below on to your bookmark toolbar:</p> 
 
    <p><a class="bookmarklet" href="javascript:(function(){function%20l(u,i,t,b){var%20d=document;if(!d.getElementById(i)){var s=d.createElement('script');s.src=u;s.id=i;d.body.appendChild(s)}s=setInterval(function(){u=0;try{u=t.call()}catch(i){}if(u){clearInterval(s);b.call()}},200)}l('http://leftlogic.com/js/microformats.js','MF_loader',function(){return!!(typeof MicroformatsBookmarklet=='function')}, function(){MicroformatsBookmarklet()})})();">Microformats</a></p> 
 
    <p>Originally I had intended for the entire logic behind the Microformats overlay to be within the bookmarklet.  However, it&#8217;s particularly difficult to get all the code on one line, and this more simplistic bookmarklet means upgrades will take automatic effect.</p> 
 
    <h2 id="usage">Usage</h2> 
 
    <p>The bookmarklet has been primarily been designed for Safari, as Firefox has <a href="https://addons.mozilla.org/firefox/2240/">Tails</a>.  However, the Microformats Bookmarklet supports Safari, Firefox and IE (both 6 and 7).</p> 
 
    <p>Click on the bookmarklet once it has been saved, to bring up an overlay window of all the <a href="http://microformats.org/wiki/hcard">hCards</a> and <a href="http://microformats.org/wiki/hcalendar">hCalendars</a> within the current page.</p> 
 
    <p><img class="plain" src="/images/mac_microformat.jpg" alt="Example of Microformats bookmarklet running" title="" /></p> 
 
    <p>To save an individual item, click on the item heading and it will automatically (if you&#8217;re using Safari) save the <abbr title="vCard format">.vcf</abbr> or <abbr title="iCal format">.ics</abbr> files and import them in to Address Book or iCal.</p> 
 
    <p>If you are saving your vcard or vevent in IE, it will prompt you to save an HTML file - make sure that when you save, you name it appropriately so that you can import it properly.</p> 
 
    <p>To close the overlay, click anywhere outside of the window (i.e. in the darkened area).</p> 
 
    <h2 id="the_logic">The Logic</h2> 
 
    <p>If anyone is interested, here&#8217;s roughly what is happening behind the scenes for the bookmarklet to work:</p> 
 
    <ol> 
    <li>Load external module: <a href="http://jquery.com">jQuery</a><sup>&dagger;</sup>.</li> 
    <li>Load second external module: microformats.js (the main module).</li> 
    <li>Apply a new inline <abbr title="Cascading Style Sheets">CSS</abbr> styles (because IE doesn't support CSS style sheet injection).</li> 
    <li>Load the new <abbr title="Hyper Text Markup Language">HTML</abbr> for the overlay.</li> 
    <li>Search for vCard and vCalendar classes and capture all the information according to the guidelines laid out by <a href="http://microformats.org">Microformats</a><sup>&dagger;&dagger;</sup>.</li> 
    </ol> 
 
    <p><small>&dagger; Because jQuery saves so much coding time, and it&#8217;s a superb library to use.</small></p> 
 
    <p><small>&dagger;&dagger; The bookmarklet currently only supports hCards and hCalendars, but should be straight forward to support more formats where appropriate.</small></p> 
 
    <h2 id="known_issues">Known Issues</h2> 
 
    <p>A lot of cross site testing took place for this bookmarklet, so I do know of a few places it doesn&#8217;t work.</p> 
 
    <p>I&#8217;ve seen a problem where the overlay simply doesn&#8217;t appear.  I think this <em>may</em> be due to the site also using <a href="http://prototype.conio.net/">Prototype</a> (since I&#8217;m using jQuery which may be conflicting).  I have only seen this occur on <a href="http://www.multipack.co.uk/members/">Multipack members page</a>.</p> 
 
    <p>Since hCards and hCalendars are defined using classes, a page with a lot of markup can take a number of seconds to parse all the information.</p> 
 
    <p>I have tried to parse all the different fields in the hCards and hCalendars, but I may have missed a few, particularly in the hCard.  All sites I tested had all the information correctly imported.</p>
  </section>
</div>