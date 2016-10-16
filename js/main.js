function conceptClick()
{
	removeCenter(0);
	removeActives();
	
	$('div.concept').addClass('concept-active');
	fadeout();
	window.history.pushState({"href":"concept"}, null, '#concept');
}

function programClick()
{
	removeCenter(1);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"program"}, null, '#program');
}


function locationClick()
{
	removeCenter(2);
	removeActives();
	
	$('div.location').addClass('location-active');
	fadeout();
	window.history.pushState({"href":"location"}, null, '#location');
}

function informationClick()
{
	removeCenter(3);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"information"}, null, '#information');
}

function galleryClick()
{
	removeCenter(4);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"gallery"}, null, '#gallery');
}

function ticketsClick()
{
	removeCenter(5);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
	window.history.pushState({"href":"tickets"}, null, '#tickets');
}

function dancefloorClick()
{
	removeCenter(6);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"dancefloor"}, null, '#dancefloor');
}

function chilloutClick()
{
	removeCenter(7);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"chillout"}, null, '#chillout');
}

function goaClick()
{
	removeCenter(8);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"goa"}, null, '#goa');
}

function zenbuspaceClick()
{
	removeCenter(9);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"zenbuspace"}, null, '#zenbuspace');
}

function zambukidsClick()
{
	removeCenter(10);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"zambukids"}, null, '#zambukids');
}

function afterpartyClick()
{
	removeCenter(11);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"afterparty"}, null, '#afterparty');
}

function usefulClick()
{
	removeCenter(12);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"useful"}, null, '#useful');
}

function parkingCampingClick()
{
	removeCenter(13);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"parkingCamping"}, null, '#parkingCamping');
}

function participationClick()
{
	removeCenter(14);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"participation"}, null, '#participation');
}

function historyClick()
{
	removeCenter(15);
	removeActives();
	
	$('div.information').addClass('information-active');
	fadeout();
	window.history.pushState({"href":"history"}, null, '#history');
}

function retroClick()
{
	removeCenter(16);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"retro"}, null, '#retro');
}

function editionClick()
{
	removeCenter(17);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"edition"}, null, '#edition');
}

function emelClick()
{
	removeCenter(18);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"emel"}, null, '#emel');
}

function activationClick()
{
	removeCenter(19);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"activation"}, null, '#activation');
}

function landClick()
{
	removeCenter(20);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"land"}, null, '#land');
}

function zambuClick()
{
	removeCenter(21);
	removeActives();
	
	$('div.gallery').addClass('gallery-active');
	fadeout();
	window.history.pushState({"href":"zambu"}, null, '#zambu');
}

function buyClick()
{
	removeCenter(22);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
	window.history.pushState({"href":"buy"}, null, '#buy');
}

function ticketsInfoClick()
{
	removeCenter(23);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
	window.history.pushState({"href":"ticketsInfo"}, null, '#ticketsInfo');
}

function termsClick()
{
	removeCenter(24);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
	window.history.pushState({"href":"terms"}, null, '#terms');
}

function ambassadorClick()
{
	removeCenter(25);
	removeActives();
	
	$('div.tickets').addClass('tickets-active');
	fadeout();
	window.history.pushState({"href":"ambassador"}, null, '#ambassador');
}

function beatClick()
{
	removeCenter(26);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"beat"}, null, '#beat');
}

function eatClick()
{
	removeCenter(27);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"eat"}, null, '#eat');
}

function mirandaClick()
{
	removeCenter(28);
	removeActives();
	
	$('div.program').addClass('program-active');
	fadeout();
	window.history.pushState({"href":"miranda"}, null, '#miranda');
}

function removeCenter(nextID) 
{
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-program',
						 'div.titulo-location',
						 'div.titulo-information',
						 'div.titulo-gallery',
						 'div.titulo-tickets',
						 'div.titulo-dancefloor', 
						 'div.titulo-chillout',
						 'div.titulo-goa',
						 'div.titulo-zenbuspace',
						 'div.titulo-zambukids',
						 'div.titulo-afterparty',
						 'div.titulo-useful',
						 'div.titulo-parkingCamping',
						 'div.titulo-participation',
						 'div.titulo-history',
						 'div.titulo-retro',
						 'div.titulo-edition',
						 'div.titulo-emel',
						 'div.titulo-activation',
						 'div.titulo-land',
						 'div.titulo-zambu',
						 'div.titulo-buy',
						 'div.titulo-ticketsInfo',
						 'div.titulo-terms',
						 'div.titulo-ambassador',
						 'div.titulo-beat',
						 'div.titulo-eat',
						 'div.titulo-miranda'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-program',
						'div.textArea-location',
						'div.textArea-information',
						'div.textArea-gallery',
						'div.textArea-tickets',
						'div.textArea-dancefloor', 
						'div.textArea-chillout',
						'div.textArea-goa',
						'div.textArea-zenbuspace',
						'div.textArea-zambukids',
						'div.textArea-afterparty',
						'div.textArea-useful',
						'div.textArea-parkingCamping',
						'div.textArea-participation',
						'div.textArea-history',
						'div.textArea-retro',
						'div.textArea-edition',
						'div.textArea-emel',
						'div.textArea-activation',
						'div.textArea-land',
						'div.textArea-zambu',
						'div.textArea-buy',
						'div.textArea-ticketsInfo',
						'div.textArea-terms',
						'div.textArea-ambassador',
						'div.textArea-beat',
						'div.textArea-eat',
						'div.textArea-miranda'];
	
	if(nextID <= 25)
		$('div.artistsCross').css('opacity', '0');
	
	for(var i = 0; i < allTextAreas.length; i++)
	{
		if(nextID === i)
		{
			$('div.blackShadow').css('display', 'inline-block');
			$(allTextAreas[i]).css('display', 'inline-block');
			$(allTitleAreas[i]).css('display', 'inline-block');
			
		
			SetTopAndHeight(nextID, allTitleAreas[i], allTextAreas[i]);
			
			setTimeout(function() { 
				$('div.blackShadow').css('opacity', '100');
				$(allTextAreas[nextID]).css('opacity', '100');
				$(allTitleAreas[nextID]).css('opacity', '100');
				if(nextID > 25){
					$('div.artistsCross').css('opacity', '100');
				}
			}, 200);
			continue;
		}
		$(allTextAreas[i]).css('opacity', '0');
		$(allTitleAreas[i]).css('opacity', '0');
	}
	setTimeout(function() {
		removeDisplay(nextID);
	}, 1000)
}

function SetTopAndHeight(nextID, titleName, textName) 
{
	var windowHeight = $(window).outerHeight();
	var countdownHeight = $('div.countdown').outerHeight();
	var titleHeight = $('div.titulo-concept').outerHeight();
	var menuSocialHeight = $('div.divMenuSocial').outerHeight();
	
	if(nextID > 25){
		$('div.artistsCross').css('display', 'inline-block');
		$('div.artistsCross').css('top', countdownHeight + 40 + "px");
		$(textName).css('top', countdownHeight + 40 + "px");
		$(textName).css('height', (windowHeight - 60 - countdownHeight - menuSocialHeight) + "px");
	}
	else{
		$(titleName).css('top', countdownHeight + 40 + "px");
		$(textName).css('top', countdownHeight + 40 + titleHeight + 25 + "px");
		$(textName).css('height', (windowHeight - 85 - countdownHeight - titleHeight - menuSocialHeight) + "px");
	}
	
	$('div.blackShadow').css('top', countdownHeight + 20 + "px");
	$('div.blackShadow').css('height', (windowHeight - 20 - countdownHeight - menuSocialHeight) + "px");
}
function removeDisplay(nextID)
{
	var allTitleAreas = ['div.titulo-concept',
						 'div.titulo-program',
						 'div.titulo-location',
						 'div.titulo-information',
						 'div.titulo-gallery',
						 'div.titulo-tickets',
						 'div.titulo-dancefloor', 
						 'div.titulo-chillout',
						 'div.titulo-goa',
						 'div.titulo-zenbuspace',
						 'div.titulo-zambukids',
						 'div.titulo-afterparty',
						 'div.titulo-useful',
						 'div.titulo-parkingCamping',
						 'div.titulo-participation',
						 'div.titulo-history',
						 'div.titulo-retro',
						 'div.titulo-edition',
						 'div.titulo-emel',
						 'div.titulo-activation',
						 'div.titulo-land',
						 'div.titulo-zambu',
						 'div.titulo-buy',
						 'div.titulo-ticketsInfo',
						 'div.titulo-terms',
						 'div.titulo-ambassador',
						 'div.titulo-beat',
						 'div.titulo-eat',
						 'div.titulo-miranda'];
						
	var allTextAreas = ['div.textArea-concept', 
						'div.textArea-program',
						'div.textArea-location',
						'div.textArea-information',
						'div.textArea-gallery',
						'div.textArea-tickets',
						'div.textArea-dancefloor', 
						'div.textArea-chillout',
						'div.textArea-goa',
						'div.textArea-zenbuspace',
						'div.textArea-zambukids',
						'div.textArea-afterparty',
						'div.textArea-useful',
						'div.textArea-parkingCamping',
						'div.textArea-participation',
						'div.textArea-history',
						'div.textArea-retro',
						'div.textArea-edition',
						'div.textArea-emel',
						'div.textArea-activation',
						'div.textArea-land',
						'div.textArea-zambu',
						'div.textArea-buy',
						'div.textArea-ticketsInfo',
						'div.textArea-terms',
						'div.textArea-ambassador',
						'div.textArea-beat',
						'div.textArea-eat',
						'div.textArea-miranda'];
	
	var contdownHeight = $('div.countdown').height();
	var titleHeight = $('div.titulo-concept').height();
	
	for(var allIdx = 0; allIdx < allTextAreas.length; allIdx++){
		if(nextID == allIdx)
			continue;
		$(allTextAreas[allIdx]).css('display', 'none');
		$(allTitleAreas[allIdx]).css('display', 'none');
	}
	if(nextID <= 25)
		$('div.artistsCross').css('display', 'none');
}

function removeActives(){
	$('div.concept').removeClass('concept-active');
	$('div.location').removeClass('location-active');
	$('div.gallery').removeClass('gallery-active');
	$('div.information').removeClass('information-active');
	$('div.program').removeClass('program-active');
	$('div.tickets').removeClass('tickets-active');
}

function countdownClick()
{
	if($('img.grow').length === 1){
		$("div.znaSymbol").removeClass('turnToZNALogo');
		$('img.mandala').removeClass("grow");
		$('div.moonSymbol').removeClass('goDownRight grow');
		$('div.sunSymbol').removeClass('goDownLeft grow');
		$('img.arvore').removeClass("turnTransparent");
		$('div.countdown').removeClass("turnTransparent");
		$("div.znaSymbol").removeAttr("style");
		$("div.znaSymbol").off('click');
		$('div.blackShadow').css('opacity', '0');
		removeActives();
		removeCenter(-1);
		$('div.conceptSymbol, div.locationSymbol, div.programSymbol').removeClass('goLeft');
		$('div.informationSymbol, div.gallerySymbol, div.ticketsSymbol').removeClass('goRight');
		
		$('div.dataText, div.localText').addClass("turnTransparent");
		countdown();
		window.history.pushState({"href":""}, null, '#');
	}
}

function fadeout(){
	if($('img.grow').length === 0)
	{
		$("div.znaSymbol").addClass('turnToZNALogo');
		var countdownPosition = $('div.countdown').position();
		$("div.znaSymbol").css('top', countdownPosition.top);
		$("div.znaSymbol").css('left', countdownPosition.left + 20);
		$("div.znaSymbol").on('click', countdownClick);
		
		$('div.dataText, div.localText').removeClass("turnTransparent");
		$('div.moonSymbol').addClass('goDownRight grow');
		$('div.sunSymbol').addClass('goDownLeft grow');
		$('img.mandala').addClass("grow");
		$('img.arvore').addClass("turnTransparent");
		$('div.countdown').addClass("turnTransparent");
		$('div.conceptSymbol, div.locationSymbol, div.programSymbol').addClass('goLeft');
		$('div.informationSymbol, div.gallerySymbol, div.ticketsSymbol').addClass('goRight');
	}
};

function countdown(){
	if($('img.grow').length === 0){	
		var time = getTimeRemaining();
		$("div.countdown").text( (time.days < 10 ? "0" :"") + time.days+ "." + (time.hours < 10 ? "0" : "") + time.hours + ":" + 
								 (time.minutes < 10 ? "0" :"") + time.minutes + ":" + (time.seconds < 10 ? "0" :"") + time.seconds);
								 
		var milliseconds = 1000 - new Date().getMilliseconds();
		setTimeout(countdown, milliseconds);
	}
}

function onLoadedPage(){
	$('div.concept').on({
		'mouseover': function() {
			$('div.conceptSymbol').addClass('conceptSymbolHover');
		},
		'mouseout': function() {
			$('div.conceptSymbol').removeClass('conceptSymbolHover');
		}
	});

	$('div.conceptSymbol').on({
		'mouseover': function() {
			$('div.concept').addClass('conceptHover');
		},
		'mouseout': function() {
			$('div.concept').removeClass('conceptHover');
		}
	});

	$('div.information').on({
		'mouseover': function() {
			$('div.informationSymbol').addClass('informationSymbolHover');
		},
		'mouseout': function() {
			$('div.informationSymbol').removeClass('informationSymbolHover');
		}
	});

	$('div.informationSymbol').on({
		'mouseover': function() {
			$('div.information').addClass('informationHover');
		},
		'mouseout': function() {
			$('div.information').removeClass('informationHover');
		}
	});

	$('div.gallery').on({
		'mouseover': function() {
			$('div.gallerySymbol').addClass('gallerySymbolHover');
		},
		'mouseout': function() {
			$('div.gallerySymbol').removeClass('gallerySymbolHover');
		}
	});

	$('div.gallerySymbol').on({
		'mouseover': function() {
			$('div.gallery').addClass('galleryHover');
		},
		'mouseout': function() {
			$('div.gallery').removeClass('galleryHover');
		}
	});

	$('div.location').on({
		'mouseover': function() {
			$('div.locationSymbol').addClass('locationSymbolHover');
		},
		'mouseout': function() {
			$('div.locationSymbol').removeClass('locationSymbolHover');
		}
	});

	$('div.locationSymbol').on({
		'mouseover': function() {
			$('div.location').addClass('locationHover');
		},
		'mouseout': function() {
			$('div.location').removeClass('locationHover');
		}
	});

	$('div.program').on({
		'mouseover': function() {
			$('div.programSymbol').addClass('programSymbolHover');
		},
		'mouseout': function() {
			$('div.programSymbol').removeClass('programSymbolHover');
		}
	});

	$('div.programSymbol').on({
		'mouseover': function() {
			$('div.program').addClass('programHover');
		},
		'mouseout': function() {
			$('div.program').removeClass('programHover');
		}
	});

	$('div.tickets').on({
		'mouseover': function() {
			$('div.ticketsSymbol').addClass('ticketsSymbolHover');
		},
		'mouseout': function() {
			$('div.ticketsSymbol').removeClass('ticketsSymbolHover');
		}
	});

	$('div.ticketsSymbol').on({
		'mouseover': function() {
			$('div.tickets').addClass('ticketsHover');
		},
		'mouseout': function() {
			$('div.tickets').removeClass('ticketsHover');
		}
	});
	
	$(window).resize(function() {
		if($('img.grow').length === 1)
		{
			var countdownPosition = $('div.countdown').position();
			$("div.znaSymbol").css('top', countdownPosition.top);
			$("div.znaSymbol").css('left', countdownPosition.left + 20);
		}
	});
	
	
	var nicesx = $("div.textArea-concept").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-program").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-location").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-information").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-gallery").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-tickets").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesx = $("div.textArea-chillout").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-dancefloor").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-goa").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-zenbuspace").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-zambukids").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-afterparty").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-useful").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-parkingCamping").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-participation").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-history").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-retro").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-edition").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-emel").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-activation").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-land").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-zambu").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-buy").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-ticketsInfo").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-terms").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-ambassador").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-beat").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-eat").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	var nicesxs = $("div.textArea-miranda").niceScroll({touchbehavior:false,cursorcolor:"#FFFFF",cursoropacitymax:0.6,cursorwidth:8,autohidemode:false});
	//.cursor.css({"background-image":"url(img/mac6scroll.png)"}); // MAC like scrollbar
	
	if(isIE()){
		$("h3.titulo-concept, h3.titulo-program, h3.titulo-information, h3.titulo-gallery, h3.titulo-tickets, h3.titulo-location, h3.titulo-dancefloor, h3.titulo-chillout, h3.titulo-goa, h3.titulo-zenbuspace, h3.titulo-zambukids, h3.titulo-useful, h3.titulo-parkingCamping, h3.titulo-afterparty, h3.titulo-participation, h3.titulo-history")
	.css("font-size", "150%");
	}
	countdown();
	initializaPhoto();
	setTimeout( function() {
		var thisRef = window.location.href;
		if(thisRef.includes("#")){
			var splittedUrl = thisRef.split('#');
			if(splittedUrl.length < 2)
				return;
			
			clickInCorrectTab(splittedUrl[1]);
		}else{
			window.history.pushState({"href":""}, null, '#');
		}
	}, 400);
}

window.onpopstate = function(event) {
	clickInCorrectTab(event.state.href);
};

function getTimeRemaining(){
  var t = new Date(2017, 7, 22, 21, 0, 0, 0) - new Date();
  if(t < 0){
	  seconds = 0;
	  minutes = 0;
	  hours = 0;
	  days = 0;
  }
  else{
	  var seconds = Math.floor( (t/1000) % 60 );
	  var minutes = Math.floor( (t/1000/60) % 60 );
	  var hours = Math.floor( (t/(1000*60*60)) % 24 );
	  var days = Math.floor( t/(1000*60*60*24) );
  }
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function isIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return true;
    }

    // other browser
    return false;
}

function clickInCorrectTab(name){
	switch(name){
		case 'concept':
			conceptClick();
			break;
		case 'program':
			programClick();
			break;
		case 'location':
			locationClick();
			break;
		case 'information':
			informationClick();
			break;
		case 'gallery':
			galleryClick();
			break;
		case 'tickets':
			ticketsClick();
			break;
		case 'dancefloor':
			dancefloorClick();
			break;
		case 'chillout':
			chilloutClick();
			break;
		case 'goa':
			goaClick();
			break;
		case 'afterparty':
			afterpartyClick();
			break;
		case 'zenbuspace':
			zenbuspaceClick();
			break;
		case 'zambukids':
			zambukidsClick();
			break;
		case 'useful':
			usefulClick();
			break;
		case 'parkingCamping':
			parkingCampingClick();
			break;
		case 'participation':
			participationClick();
			break;
		case 'history':
			historyClick();
			break;
		case 'retro':
			retroClick();
			break;
		case 'edition':
			editionClick();
			break;
		case 'emel':
			emelClick();
			break;
		case 'activation':
			activationClick();
			break;
		case 'land':
			landClick();
			break;
		case 'zambu':
			zambuClick();
			break;
		case 'buy':
			buyClick();
			break;
		case 'ticketsInfo':
			ticketsInfoClick();
			break;
		case 'terms':
			termsClick();
			break;
		case 'ambassador':
			ambassadorClick();
			break;
		case 'beat':
			beatClick();
			break;
		case 'eat':
			eatClick();
			break;
		case 'miranda':
			mirandaClick();
			break;
	}
}

function initializaPhoto() {

	var initPhotoSwipeFromDOM = function(gallerySelector) {

		var parseThumbnailElements = function(el) {
		    var thumbElements = el.childNodes,
		        numNodes = thumbElements.length,
		        items = [],
		        el,
		        childElements,
		        thumbnailEl,
		        size,
		        item;

		    for(var i = 0; i < numNodes; i++) {
		        el = thumbElements[i];

		        // include only element nodes 
		        if(el.nodeType !== 1) {
		          continue;
		        }

		        childElements = el.children;

		        size = el.getAttribute('data-size').split('x');

		        // create slide object
		        item = {
					src: el.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10),
					author: el.getAttribute('data-author')
		        };

		        item.el = el; // save link to element for getThumbBoundsFn

		        if(childElements.length > 0) {
		          item.msrc = childElements[0].getAttribute('src'); // thumbnail url
		          if(childElements.length > 1) {
		              item.title = childElements[1].innerHTML; // caption (contents of figure)
		          }
		        }


				var mediumSrc = el.getAttribute('data-med');
	          	if(mediumSrc) {
	            	size = el.getAttribute('data-med-size').split('x');
	            	// "medium-sized" image
	            	item.m = {
	              		src: mediumSrc,
	              		w: parseInt(size[0], 10),
	              		h: parseInt(size[1], 10)
	            	};
	          	}
	          	// original image
	          	item.o = {
	          		src: item.src,
	          		w: item.w,
	          		h: item.h
	          	};

		        items.push(item);
		    }

		    return items;
		};

		// find nearest parent element
		var closest = function closest(el, fn) {
		    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};

		var onThumbnailsClick = function(e) {
		    e = e || window.event;
		    e.preventDefault ? e.preventDefault() : e.returnValue = false;

		    var eTarget = e.target || e.srcElement;

		    var clickedListItem = closest(eTarget, function(el) {
		        return el.tagName === 'A';
		    });

		    if(!clickedListItem) {
		        return;
		    }

		    var clickedGallery = clickedListItem.parentNode;

		    var childNodes = clickedListItem.parentNode.childNodes,
		        numChildNodes = childNodes.length,
		        nodeIndex = 0,
		        index;

		    for (var i = 0; i < numChildNodes; i++) {
		        if(childNodes[i].nodeType !== 1) { 
		            continue; 
		        }

		        if(childNodes[i] === clickedListItem) {
		            index = nodeIndex;
		            break;
		        }
		        nodeIndex++;
		    }

		    if(index >= 0) {
		        openPhotoSwipe( index, clickedGallery );
		    }
		    return false;
		};

		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
		    params = {};

		    if(hash.length < 5) { // pid=1
		        return params;
		    }

		    var vars = hash.split('&');
		    for (var i = 0; i < vars.length; i++) {
		        if(!vars[i]) {
		            continue;
		        }
		        var pair = vars[i].split('=');  
		        if(pair.length < 2) {
		            continue;
		        }           
		        params[pair[0]] = pair[1];
		    }

		    if(params.gid) {
		    	params.gid = parseInt(params.gid, 10);
		    }

		    return params;
		};

		var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
		    var pswpElement = document.querySelectorAll('.pswp')[0],
		        gallery,
		        options,
		        items;

			items = parseThumbnailElements(galleryElement);

		    // define options (if needed)
		    options = {

		        galleryUID: galleryElement.getAttribute('data-pswp-uid'),

		        getThumbBoundsFn: function(index) {
		            // See Options->getThumbBoundsFn section of docs for more info
		            var thumbnail = items[index].el.children[0],
		                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
		                rect = thumbnail.getBoundingClientRect(); 

		            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
		        },

		        addCaptionHTMLFn: function(item, captionEl, isFake) {
					if(!item.title) {
						captionEl.children[0].innerText = '';
						return false;
					}
					captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
					return true;
		        }
				
		    };


		    if(fromURL) {
		    	if(options.galleryPIDs) {
		    		// parse real index when custom PIDs are used 
		    		// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
		    		for(var j = 0; j < items.length; j++) {
		    			if(items[j].pid == index) {
		    				options.index = j;
		    				break;
		    			}
		    		}
			    } else {
			    	options.index = parseInt(index, 10) - 1;
			    }
		    } else {
		    	options.index = parseInt(index, 10);
		    }

		    // exit if index not found
		    if( isNaN(options.index) ) {
		    	return;
		    }


			options.mainClass = 'pswp--minimal--dark';
			options.barsSize = {top:0,bottom:0};
			options.captionEl = true;
			options.fullscreenEl = false;
			options.shareEl = false;
			options.bgOpacity = 0.85;
			options.tapToClose = true;
			options.tapToToggleControls = false;

		    if(disableAnimation) {
		        options.showAnimationDuration = 0;
		    }

		    // Pass data to PhotoSwipe and initialize it
		    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

		    // see: http://photoswipe.com/documentation/responsive-images.html
			var realViewportWidth,
			    useLargeImages = false,
			    firstResize = true,
			    imageSrcWillChange;

			gallery.listen('beforeResize', function() {

				var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
				dpiRatio = Math.min(dpiRatio, 2.5);
			    realViewportWidth = gallery.viewportSize.x * dpiRatio;


			    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
			    	if(!useLargeImages) {
			    		useLargeImages = true;
			        	imageSrcWillChange = true;
			    	}
			        
			    } else {
			    	if(useLargeImages) {
			    		useLargeImages = false;
			        	imageSrcWillChange = true;
			    	}
			    }

			    if(imageSrcWillChange && !firstResize) {
			        gallery.invalidateCurrItems();
			    }

			    if(firstResize) {
			        firstResize = false;
			    }

			    imageSrcWillChange = false;

			});

			gallery.listen('gettingData', function(index, item) {
			    if( useLargeImages ) {
			        item.src = item.o.src;
			        item.w = item.o.w;
			        item.h = item.o.h;
			    } else {
			        item.src = item.m.src;
			        item.w = item.m.w;
			        item.h = item.m.h;
			    }
			});

		    gallery.init();
		};

		// select all gallery elements
		var galleryElements = document.querySelectorAll( gallerySelector );
		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i+1);
			galleryElements[i].onclick = onThumbnailsClick;
		}

		// Parse URL and open gallery if it contains #&pid=3&gid=1
		var hashData = photoswipeParseHash();
		if(hashData.pid && hashData.gid) {
			openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
		}
	};

	initPhotoSwipeFromDOM('.edition-gallery');
	initPhotoSwipeFromDOM('.retro-gallery');
	initPhotoSwipeFromDOM('.activation-gallery');
	initPhotoSwipeFromDOM('.emel-gallery');

}
