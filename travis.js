$('#left').remove();
$('header.top.ember-view').remove();
$('.repo-navigation').remove();
$('article.repo-header header').remove();
$('.build-header').hide();
$('.log-main .log-header').remove();
$('.travistab.ember-view').remove();
$('a.to-top').remove();
$('a#tail').hide();
$('span.fold-name').remove();
$('span.duration').remove();
$('#main').css({"background-color":"#222"});
$('div.main .wrapper-main').css({"padding":"0px", "margin":"0px", "width":"100%"});

var counter = 0;
function loop() {
  setTimeout(function() {
    if (true) {
      counter++;
      $(document).scrollTop($(document).height());
      loop();
    }
  }, 100);
}
loop();

$('.action-button--restart').click();
