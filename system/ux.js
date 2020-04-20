//AOS
var $aos = $('[aos]'); var $window = $(window); function ciiv() {var wh = $window.height(); var wtp = $window.scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.addClass('anim');} else {$element.removeClass('anim');}});} $window.on('scroll resize', ciiv); $window.trigger('scroll');

//Cursor
$('body').append('<div cursor><div></div></div>');
function moveCircle(e) {TweenLite.to($('[cursor]'), 0.25, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);
$('a, button').hover(function(){$('[cursor]').css({'background-color': 'rgba(24,64,186,0.5)', 'border': 'none', 'padding': '1.175rem'});}, function(){$('[cursor]').css({'background-color': 'initial', 'border': 'solid 0.175rem white', 'padding': '1rem'});});

//Parallax
$(document).mousemove(function(e) {
	parallaxIt(e, "[img-hov]", -37.5);
	parallaxIt(e, "[img-hov=i2]", -50);
	parallaxIt(e, "[img-at]", -50);
	parallaxIt(e, "[img-at=i2]", -60);
	parallaxIt(e, "[img-at=i3]", -70);
	parallaxIt(e, "[img-at=i4]", -80);
	parallaxIt(e, "[img-at=i5]", -90);
	parallaxIt(e, "[parallax=move]", -30);
}); function parallaxIt(e, target, movement) {var $this = $("body"); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$("[parallax=angle]").each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * 100, rotationX: yPos * 100, ease: Power1.easeOut,});})});

//Nav Hide
var links = document.querySelector("[links]"); var nps = window.pageYOffset; window.onscroll = function() {var ncs = window.pageYOffset; if (nps > ncs) {links.style.top = "0.5rem";} else {links.style.top = "-4rem";} nps = ncs;}

//Nav Mob
function nav_links() {document.getElementById('nml').style = "right: 0; border-radius: initial; background-color: rgba(255,255,255,0.95);";}
function nav_close() {document.getElementById('nml').style = "right: -100vw; border-radius: 50%; background-color: rgba(24,64,186,0.75);";}

//Counter
var counter = 0; $(window).scroll(function() {var oTop = $('[counter]').offset().top - window.innerHeight; if (counter == 0 && $(window).scrollTop() > oTop) {$('[counter]').each(function() {var $this = $(this), countTo = $this.attr('counter'); $({countNum: $this.text()}).animate({countNum: countTo}, {duration: 4000, easing: 'swing', step: function() {$this.text(Math.floor(this.countNum));}, complete: function() {$this.text(this.countNum);}});}); counter = 1;}});

//Fullscreen Image
$('[modal]').addClass('modal').click(function(){var src = $(this).attr('src'); $('<section>').css({background: 'RGBA(0,0,0,0.75) url('+src+') no-repeat center', backgroundSize: 'contain', width: '100%', height: '100%', cursor: 'zoom-out', position:'fixed', top: '0', left: '0', zIndex: '1000',}) .click(function(){$(this).remove();}).appendTo('body');});

function page_scroll() {$("html, body").animate({ scrollTop: $('#copyright').offset().top}, 90000); document.getElementById("stop-demo").style = "top: 2rem;"; document.getElementsByTagName("html")[0].style = "scroll-behavior: auto;";}
function page_scroll_stop() {jQuery('html,body').queue([]).stop(); document.getElementById("stop-demo").style = "top: -10rem;"; document.getElementsByTagName("html")[0].style = "scroll-behavior: smooth;";}
function audio() {var audio = document.getElementById("audio"); if (audio.paused) {nav_close(); audio.play();} else audio.pause();}

function share() {nav_close(); document.getElementById("share-it").style.animation = "share 0.375s ease-in infinite";}
function share_it() {document.getElementById("share-it").style.animation = "none";}