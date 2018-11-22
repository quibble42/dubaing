/*refocus top upon refresh*/
window.onbeforeunload = function (){
  window.scrollTo(0,0);
}

/*Change slide*/
var  Image_Number = 0;

function change_image (num) {

var image = ["http://i.imgur.com/aWa1qLW.png", "http://i.imgur.com/cbzdSOd.jpg", "http://i.imgur.com/VRPlUgY.jpg"];
var Image_Length = image.length - 1;

console.log(Image_Length);

Image_Number = Image_Number + num;
console.log(Image_Number);

if (Image_Number > Image_Length) {

    Image_Number = 0;        
}

if (Image_Number < 0) {

    Image_Number = Image_Length;
}

document.header.src=image[Image_Number];

return false;
}

// Change Slide Automatically - Interval Function

function auto () {

setInterval(function(){

    change_image(1);

}, 3000);
}

/*
Slideup upon view animation
(C) 2012 Digital Fusion, MIT licensed. http://teamdf.com/jquery-plugins/license/
Credit to Sam Sehnert
*/
(function($) {

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});
/*End of slideup code*/








/*modal code here*/

var modal = document.getElementById('signuppopup');

var botton = document.getElementById('SignupButton');

var closebutton = document.getElementsByClassName('close')[0];

botton.onclick = function(){
  modal.style.display = "block";
    $('html,body').animate({
      scrollTop: $('html,body').offset().top
    }, '200');
    setTimeout(function(){
      $('body').addClass('preventscroll'); 
    }, 400);
};
  

closebutton.onclick = function(){
  modal.style.display = "none";
  $('body').removeClass('preventscroll');
}
window.onclick=function(event){
  if(event.target == modal || event.target == guidemodal){
    modal.style.display="none";
    $('body').removeClass('preventscroll');
  }
  if(event.target==guidemodal){
    guidemodal.style.display="none";
  }
}


        




/*End of modal code*/


/*Guide modal code*/
var guidemodal = document.getElementById('guidesidepopup');
var guidebotton = document.getElementById('guidebutton');
var guideclosebotton = document.getElementsByClassName('guideclose')[0];

guidebotton.onclick = function(){
  guidemodal.style.display="block";
}
guideclosebotton.onclick = function(){
  guidemodal.style.display="none";
}
var guidebotton = document.getElementById('guidebutton');


/*end of guide modal code*/



/*TYPING ANIMATION CODE; Thanks to KS at codepen for the MIT licensed typing animation. See more at: https://codepen.io/CheeseTurtle/pen/jzdgI*/

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #EEB636 }";
  document.body.appendChild(css);
};





/*END OF TYPING ANIMATION JS*/




/*Beginning of Headerbutton jump code*/
var contactbutton = document.getElementById('ContactB');

var aboutusbutton = document.getElementById('AboutUsB');

/*contactbutton.onclick = function(){
  $('html, body').animate({
      scrollTop: $('#ContactUsDiv').offset().top
    }, 'slow');
}*/
aboutusbutton.onclick = function(){
  $('html, body').animate({
      scrollTop: $('#paragraphs').offset().top
    }, 'slow');
}
/*End of that code*/


/*Beginning of the same thing but for the learn more button*/

var learnmorebutton = document.getElementById('learnmorebutton');

learnmorebutton.onclick = function(){
  $('html, body').animate({
    scrollTop: $('#quotebox').offset().top},1210);
}
/**/


/*Radio Button Validation Code*/

/*          function valifunc() {
            var tourstatus = document.getElementsByName("toures");
            if (tourstatus[0].checked==false && tourstatus[1].checked== false){
              var holdy='<span style="color:red;">Please&nbsp;choose&nbsp;a&nbsp;button!!</span>'
              document.getElementById('areyoua').innerHTML=holdy;
              return false;} else{return true;}return true;}
          function erasealert() {document.getElementById('areyoua').innerHTML='Are&nbsp;you&nbsp;a...';}*/


         function validatealert() {
            var tourstatus = document.getElementsByName("toures");
            if (tourstatus[0].checked==true && tourstatus[1].checked==true){
              
              return true;
            } else{

              var holdy='<span style="color:red;">Please&nbsp;choose&nbsp;a&nbsp;button!</span>';
              document.getElementById('areyoua').innerHTML=holdy;
              return false;

            }

          }
          function touristradioalert() {
            document.getElementById('areyoua').innerHTML='Welcome&nbsp;to&nbsp;Dubai!';
          }
          function residentradioalert() {
            document.getElementById('areyoua').innerHTML='Good&nbsp;to&nbsp;see&nbsp;you!';
          }
          function erasealert() {
            document.getElementById('areyoua').innerHTML='Are&nbsp;you&nbsp;a...';
          }

/*End of radio button validation code*/