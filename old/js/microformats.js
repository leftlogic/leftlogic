/*
  @author: remy sharp
  @info: http://leftlogic.com/lounge/articles/microformats_bookmarklet/
  @date: 2007-10-22
  @license: Creative Commons License - ShareAlike http://creativecommons.org/licenses/by-sa/3.0/

  Load by (using graceful wait for prerequsite library):
javascript:(function(){function%20l(u,i,t,b){var%20d=document;if(!d.getElementById(i)){var s=d.createElement('script');s.src=u;s.id=i;d.body.appendChild(s)}s=setInterval(function(){u=0;try{u=t.call()}catch(i){}if(u){clearInterval(s);b.call()}},200)}l('http://leftlogic.com/js/microformats.js','MF_loader',function(){return!!(typeof MicroformatsBookmarklet=='function')}, function(){MicroformatsBookmarklet()})})();
*/
function MicroformatsBookmarklet() {
    // load jQuery if isn't not there in the first place.
    function lateLoader(u,i,t,b){
        var d=document;
        if(!d.getElementById(i)){
            var s=d.createElement('script');
            s.src=u;
            s.id=i;
            d.body.appendChild(s);
        }

        var timer=setInterval(function(){
            var ok=false;
            try{
                ok=t.call();
            }catch(i){}
            
            if (ok){
                clearInterval(timer);
                b.call();
            }
        },10);
    }
    
    if (!!!(typeof jQuery=='function') && !window.loadingJQ) {
        window.loadingJQ = true;
        lateLoader('http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js','MF_jq',function(){
            return!!(typeof jQuery=='function');
        }, MicroformatsBookmarklet);
        return false;
    } else if (!!!(typeof jQuery=='function')) {
        return false;
    } 
    
    var jqe = null;
    var run_once = 0;
    var found = 0;
    var photoguid = 0;
    var photocomplete = [];
    var nl = '%0D%0A'; // %0D%0A = nl! yay!
    var server = 'http://leftlogic.com';
    var msie = /*@cc_on!@*/0;

    var shim = server + '/images/shim.gif';
    var mf_logo = server + '/images/microformats.jpg';

    var btnDn = server + '/images/close-down.gif';
    var btnUp = server + '/images/close-up.gif';
    var vcard_image = server + '/images/vcard.gif';
    var ical_image = server + '/images/ical.gif';

    try {
        delete window.loadingJQ;
    } catch (jqe) {
        window.loadingJQ = null;
    }
        
    $j = jQuery.noConflict();

    function loadMFTB() {
    	removeOverlay();
    	$j('body').append('<div id="MF_box"><img class="MF_logo" src="' + mf_logo + '" height="47" width="46" /><img title="Close window" id="MF_btnClose" style="cursor: pointer;" alt=" " src="' + btnUp + '" height="14" width="14" /><p class="MF_heading">Microformats found at:</' + 'p><p class="MF_path">' + location.protocol + '//' + location.hostname + '</' + 'p><div id="MF_microformats"></' + 'div></' + 'div>');
    	if (!$j.browser.safari) $j('#MF_box').hide();
        $j('body').append('<div id="MF_overlay"></div>');
        
        try {
         $j(window).scroll(positionMicroformatBox);
        } catch (e) {
         // move window on scroll disabled
        }

    	$j('#MF_overlay').click(removeOverlay);
    	$j('#MF_btnClose').hover(function (){
    	    $j(this).attr('src', btnDn);
    	}, function (){
    	    $j(this).attr('src', btnUp);
    	}).click(removeOverlay);
    }
    
    // only in a function to help manage the styles - IE needs them
    // applied directly to the elements
    function styles() {
        var mfo = $j('#MF_overlay').css({
            'position': 'absolute',
            'zIndex': '9998',
            'width': '100%',
            'height': '100%',
            'top': '0',
            'left': '0',
            'minHeight': '100%',
            'backgroundColor': '#000',
            // 'opacity': 60,
            'filter': 'alpha(opacity=60)'
            // '-moz-opacity': 
        }).css('opacity', 0.6);
        overlaySize();
        
        $j('#MF_box').css({
            'padding': '0 10px',
            'position': 'absolute',
            'background': '#ccc',
            'backgroundImage': 'url(' + shim + ')',
            'borderRadius': '10px',
            'zIndex': '9999',
            'color': '#000',
            'border': '4px solid #525252',
            'textAlign': 'left'
        });
        
        $j('#MF_microformats').css({ 
            'width': '340px',
            'clear': 'left',
            'overflow': 'auto',
            'height': '200px',
            'margin': '20px 10px',
            'backgroundColor': '#fff'
        });
        
        $j('#MF_box P').css({ 'fontFamily': '"Lucida Grande","Lucida Sans Unicode",geneva,verdana,sans-serif!important', 'padding': 0 });
        $j('#MF_box P.MF_heading').css({ 'fontSize': '1.4em', 'margin': '10px', 'marginBottom': 0 });
        $j('#MF_box P.MF_path').css({ 'marginTop': '5px', 'fontSize': '1em' }); 
        $j('#MF_box DIV.MF_card').css({'margin': '5px', 'paddingBottom': '10px', 'borderBottom': '1px #ccc solid', 'paddingLeft': '25px' });
        $j('#MF_box P.MF_header').css({ 'fontSize': '1.2em', 'padding': '0 10px 4px 10px', 'margin': 0 });
        $j('#MF_box P.MF_detail').css({ 'fontSize': '9px', 'color': '#666', 'paddingLeft': '10px', 'margin': 0, 'overflow': 'hidden' });
        $j('#MF_box IMG.MF_logo').css({ 'height': '47px', 'width': '46px', 'float': 'left', 'margin': '13px 10px' });
        $j('#MF_btnClose').css({ 'float': 'right', 'margin': '10px 7px 0 0', 'padding': '3px', 'border': 0 });
        $j('#MF_box DIV.MF_vcard').css({ 'background': 'url(' + vcard_image + ') no-repeat top left'});
    	$j('#MF_box DIV.MF_vevent').css({ 'background': 'url(' + ical_image + ') no-repeat top left' });
    	
    }

    // Special mention to Cody Lindley (http://codylindley.com/Javascript/257/thickbox-one-box-to-rule-them-all)
    // as the overlay code is mostly taken from his ThickBox 2.0 for jQuery.
    function overlaySize() {
    	if (window.innerHeight&&window.scrollMaxY) {	
    		yScroll = window.innerHeight + window.scrollMaxY;
    	} else if (document.body.scrollHeight > document.body.offsetHeight) {
    		yScroll = document.body.scrollHeight;
    	} else {
    		yScroll = document.body.offsetHeight;
      	}
    	$j('#MF_overlay').css('height',yScroll +'px');
    }

    function removeOverlay() {
    	$j('#MF_box').remove();
    	$j('#MF_overlay').remove();
    	$j('#MF_jq').remove();
        $j('#MF_loader').remove();
        
    }

    function getPageScrollTop() {
    	var yScrolltop;
    	if (self.pageYOffset) {
    		yScrolltop = self.pageYOffset;
    	} else if (document.documentElement&&document.documentElement.scrollTop) {
    		yScrolltop = document.documentElement.scrollTop;
    	} else if (document.body) {
    		yScrolltop = document.body.scrollTop;
    	}
    	arrayPageScroll = new Array('',yScrolltop);
    	return arrayPageScroll;
    }

    function getPageSize() {
    	var de = document.documentElement;
    	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
    	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;

    	arrayPageSize = new Array(w,h);
    	return arrayPageSize;
    }	

    function positionMicroformatBox() {
    	var pagesize = getPageSize();	
    	var arrayPageScroll = getPageScrollTop();

    	$j('#MF_box').css({width:'360px',left: ((pagesize[0] - 360)/2)+'px', top: (arrayPageScroll[1] + 25)+'px'});
    	overlaySize();
    }

    var hCard = function(hc) {
    	found++; // flag we've got one
    	var hCard = {}, keys = [], i, kv, n;

    	keys = ['fn', 'n', 'org', 'title', 'role', 'note', 'family-name', 'given-name', 'additional-name', 'honorific-prefix', 'honorific-suffix', 'nickname', 'category', 'note'];
    	for (i = 0; i < keys.length; i++) {
    	    kv = $j('.' + keys[i], hc)
    		if (kv.length) {
    		    hCard[keys[i]] = cleanString(kv[0].title ? kv[0].title : kv.text(), true);
    		}
    	}

    	// collect adr manually
    	if ($j('.adr', hc).length) {
    		keys = ['post-office-box', 'extended-address', 'street-address', 'locality', 'region', 'postal-code', 'country-name'];

    		for (i = 0; i < keys.length; i++) {
    		    kv = $j('.' + keys[i], hc);
    			if (kv.length) hCard[keys[i]] = cleanString(kv.text());
    			hCard.adr = 1;
    		}
    	}

    	hCard.tel = {};
    	$j('.tel', hc).each(function() {
    		var t = $j('.type', this); // should also check the class of $j(this)
    		if (!t.length) t = $j(this);

    		if (t.length && t.attr('title')) {
    		    t = t.attr('title'); // non-standard...?
    		} else if (t.text()) {
    		    t = t.text();
    		} else {
    		    t = 'Work';
    		}

    		var v = $j('.value', this).text();
    		if (!v) v = $j(this).text();

    		hCard.tel[t] = v;
    	});

    	// attribute based values
    	if ($j('.url', hc).length) hCard.url = $j('.url', hc).attr('href');
    	if ($j('.email', hc).length) hCard.email = $j('.email', hc).attr('href');
    	if ($j('.bday', hc).length) hCard.bday = $j('.bday', hc).attr('title');

    	// clean up
    	if (hCard.email) hCard.email = cleanEmail(hCard.email);
    	if (hCard.url) hCard.url = cleanURL(hCard.url);

    	if (hCard.note) hCard.note = hCard.note.replace(/\n/g, '\\n');
    	var note = 'Source: ' + location.hostname;
    	if (hCard.note) {
    	    hCard.note += '\\n' + note;
    	} else {
    	    hCard.note = note;  
    	} 

    	if (!hCard.fn && hCard.org) hCard.fn = hCard.org;
    	
    	/** 
    	* going against this - because if only fn is provided as 'Remy Sharp',
    	* then n becomes 'Remy' which will be the only field I see in the contact
    	* imported.  Therefore, copying the fn directly across.
    	*/ 
    	// http://microformats.org/wiki/hcard#Implied_.22n.22_Optimization
    	if (!hCard.n) n = hCard.fn;

    	this.log = function () {
    		console.log('hCard', hCard.fn, hCard.email, hCard.url, hCard.n);
    	};

    	this.show = function() {
    	     // damn google maps for adding hCards with fns
    	    if (!hCard.fn) {
    	        found--;
    	        return;
    	    }
    		var html = '<div class="MF_card MF_vcard">';
    		html += '<p class="MF_header"><a href="' + this.asDownload() + '" title="Add to address book">' + hCard.fn + '</a></p>';
    		if (hCard.email) html += '<p class="MF_detail">' + hCard.email + '</p>';
    		if (hCard.url) html += '<p class="MF_detail">' + hCard.url + '</p>';
    		if (hCard.org) html += '<p class="MF_detail">' + hCard.org + '</p>';
    		html += '</div>';
    		$j('#MF_microformats').append(html);
    	};

    	this.asDownload = function() {
    	    var keys = [], i, parts;
    		var vcard = 'data:text/vcard;utf-8,BEGIN:VCARD' + nl;

    		if (hCard['family-name']) hCard.n = hCard['family-name'];
    		if (hCard['given-name']) {
    			if (hCard.n) hCard.n += ';';
    			hCard.n += hCard['given-name'];
    		}

    		if (hCard.adr) {
    			keys = ['post-office-box', 'extended-address', 'street-address', 'locality', 'region', 'postal-code', 'country-name'];
    			hCard.adr = '';
    			for (i = 0; i < keys.length; i++) {
    				if (hCard[keys[i]]) {
    					hCard.adr += hCard[keys[i]];
    				}
    				hCard.adr += ';';
    			}
    		}

    		if (!hCard.n) {				
    			if (!hCard.n && hCard.fn && (hCard.fn.split(' ').length == 2)) {
    				parts = hCard.fn.split(' ');
    				parts = parts.reverse();
    				hCard.n = parts.join(';');
    			}
    		}

    		keys = ['fn', 'n' , 'org', 'title', 'role', 'note', 'nickname', 'adr', 'email', 'photo', 'url', 'bday'];
    		for (i = 0; i < keys.length; i++) {
    			if (hCard[keys[i]]) vcard += keys[i].toUpperCase() + ':' + encodeURIComponent(hCard[keys[i]]) + nl;
    		}

    		for (i in hCard.tel) {
    			vcard += 'TEL;' + i.toUpperCase() + ':' + hCard.tel[i] + nl;
    		}

    		vcard += 'END:VCARD';
    		return vcard;
    	};

    	return this;
    };

    var hCalendar = function(ve) {
    	found++;
    	var hCal = {}, keys = [], i, kv;

    	keys = ['summary', 'location', 'description', 'attendee', 'contact', 'organizer'] ;
    	for (i = 0; i < keys.length; i++) {
    	    kv = $j('.' + keys[i], ve);
    		if (kv.length) hCal[keys[i]] = cleanString(kv.text(), true);
    	}

    	// collect adr manually
    	if ($j('.adr', ve).length) {
    		keys = ['post-office-box', 'extended-address', 'street-address', 'locality', 'region', 'postal-code', 'country-name'];
    		for (i = 0; i < keys.length; i++) {
                kv = $j('.' + keys[i], ve);
    			if (kv.length) hCal[keys[i]] = cleanString(kv.text());
    			hCal.adr = 1;
    		}
    	}

    	keys = ['dtstart', 'dtend', 'duration'];
    	for (i = 0; i < keys.length; i++) {
    	    kv = $j('.' + keys[i], ve);
    		if (kv.length) hCal[keys[i]] = kv.attr('title');
    	}

    	// how wasteful am I?!
    	if (hCal.dtstart) hCal.dtstart_raw = new cleanDateTime(hCal.dtstart);
    	if (hCal.dtstart_raw) hCal.dtstart = hCal.dtstart_raw.formatted();
    	if (hCal.dtstart_raw) hCal.dtstart_str = hCal.dtstart_raw.toString();
    	if (hCal.dtend) hCal.dtend_raw = new cleanDateTime(hCal.dtend);
    	if (hCal.dtend_raw) hCal.dtend = hCal.dtend_raw.formatted();
    	if (hCal.dtend_raw) hCal.dtend_str = hCal.dtend_raw.toString();

    	if ($j('.url', ve).length) hCal.url = $j('.url', ve).attr('href');
    	if (hCal.url) hCal.url = cleanURL(hCal.url);

    	if (hCal.description) hCal.description = hCal.description.replace(/\n/g, '\\n');

    	var note = 'Source: ' + location.hostname;
    	if (hCal.description) hCal.description += '\n' + note;
    	else hCal.description = note;

    	this.show = function() {
    		var html = '<div class="MF_card MF_vevent">';
    		html += '<p class="MF_header"><a href="' + this.vCalendar() + '" title="Add to calendar">' + hCal.summary + '</a></p>';
    		if (hCal.location) html += '<p class="MF_detail">' + hCal.location + '</p>';
    		if (hCal.dtstart) html += '<p class="MF_detail">' + hCal.dtstart_str + '</p>';

    		html += '</div>';
    		$j('#MF_microformats').append(html);
    	};

    	this.vCalendar = function() {
    	    var keys = [], i;
    		var vcal = 'data:text/calendar;utf-8,';
    		vcal += 'BEGIN:VCALENDAR' + nl + 'VERSION:2.0' + nl + 'BEGIN:VEVENT' + nl;

    		if (hCal.adr) {
    			keys = ['post-office-box', 'extended-address', 'street-address', 'locality', 'region', 'postal-code', 'country-name'];
    			hCal.location = '';
    			for (i = 0; i < keys.length; i++) {
    				if (hCal[keys[i]]) { 
    					if (keys[i] == 'locality') hCal.location += '\n';
    					hCal.location += hCal[keys[i]] + ' ';
    				}
    			}
    		}

    		keys = ['summary', 'location', 'description', 'attendee', 'contact', 'organizer', 'dtstart', 'dtend', 'duration', 'note'];

    		for (i = 0; i < keys.length; i++) {
    			if (hCal[keys[i]]) vcal += keys[i].toUpperCase() + ':' + encodeURIComponent(hCal[keys[i]]) + nl;
    		}

    		vcal += 'END:VEVENT' + nl + 'END:VCALENDAR';
    		return vcal;
    	};

    	return this;
    };

    function cleanEmail(e) {
    	e = e.replace('mailto:', '');
    	return e.replace(/\?.*$j/, '');
    }

    function cleanURL(u) {
    	if (!u.match(/^http/)) {
    		if (u.match(/^\//))	u = location.protocol + '//' + location.hostname + u;
    		else {
    			var parts = location.pathname.split('/');
    			parts.pop();
    			var p = parts.join('/');
    			u = location.protocol + '//' + location.hostname + p + '/' + u;
    		}
    	}
    	return u;		
    }

    function cleanString(s, stripNL) {
    	s = s.replace(/^\s+/, '');
    	s = s.replace(/\s+$j/, '');
    	s = s.replace(/( )+/g, ' ');
    	return stripNL ? s.replace(/\n/g, ' ') : s.replace(/\n/g, '\\n'); // plain text!
    }

    function emptyCheck() {
    	if (!found) {
    		var html = '<div class="MF_card">';
    		html += '<p class="MF_header">No microformats could be found.</p>';
    		html += '</div>';
    		$j('#MF_microformats').append(html);
    	}
    }

    function ie_microformat() {
        // context is A element
        var f = null;
        f = document.getElementById('_mf_iframe');
        if (f) {
            document.body.removeChild(f);
        }
        f = document.createElement('iframe');
        f.style.position = 'absolute';
        f.style.left = '-1000px';
        f.style.width = '10px';
        f.id = "_mf_iframe";
        document.body.appendChild(f);
        // should I recollect?
        f = document.getElementById('_mf_iframe');
        f.src = server + '/save-microformats.html?' + this.href.substr(this.href.indexOf('BEGIN')) + '#' + this.innerHTML;
        return false;
    }
    
    var cleanDateTime = function(t) {
    	// 20060913T1400-0700
    	// 2006-09-13T14:00-07:00

    	var pad = function(s) {
    		if (s.length == 1) s = '0' + s;
    		return s;
    	};

    	var num = function(str, s, e) {
    		return parseInt(str.substr(s, e), 10);
    	};

    	// strip formatting - currently doesn't support 2006-W05
    	var endpos = t.indexOf('T');
    	if (endpos == -1) endpos = t.length;

    	var dstr = t.substr(0, endpos).replace(/\-/g, '');
    	var tstr;

    	if (endpos != t.length) tstr = t.substr(endpos+1).replace(/:/g, '');
    	else tstr = '1200';

    	t = dstr + 'T' + tstr;

    	var d = new Date();
    	d.setFullYear(num(dstr, 0, 4), num(dstr, 4, 2) - 1, num(dstr, 6, 2));
    	d.setHours(num(t, 9, 2), num(t, 11, 2), 0); //  + offset
    	var m = d.getMilliseconds();

    	var offset = num(t, 14, 2) * 60 + num(t, 16, 2); // damn this is noddy.
    	if (isNaN(offset) == false) {
    		if (t.substr(13, 1) != '-') offset *= -1;
    		m = m + (offset * 60 * 1000);
    	}

    	d.setMilliseconds(m);

    	this.formatted = function(){
    		var s = d.getFullYear().toString();
    		s += pad((d.getMonth()+1).toString());
    		s += pad(d.getDate().toString()) + 'T';
    		s += pad(d.getHours().toString());
    		s += pad(d.getMinutes().toString());
    		s += pad(d.getSeconds().toString());
    		if (offset) s += 'Z';
    		return s;
    	};

    	this.toString = function() {
    		return d.toString();
    	};

    	return this;
    };
    
    function import_microformat(type, method, context) {
        if (!context) context = document;
        $j('.' + type, context).each(function(){ method(this).show(); }); 
        $j('iframe', context).each(function () {
            try {
                var f = this.contentWindow.document || this.contentDocument;
                import_microformat(type, method, f);
            } catch (e) {} // can't see inside the iframe - so skip it
        });        
    }

    loadMFTB();
    import_microformat('vcard', hCard);
    import_microformat('vevent', hCalendar);
    emptyCheck();
    styles();
    if (msie && found) {
        $j('#MF_box A').click(ie_microformat);
    }
    positionMicroformatBox();
    $j('#MF_box').fadeIn(600);
}
