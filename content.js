// debug info
console.log("==============================");
console.log(document.readyState);
console.log("jQuery: " + $().jquery);
console.log("==============================");

var $header = $('<div>').addClass('inner').attr('id', 'newLogContainer').prependTo('body');

function checkElementExistence(id) {
  return $('#' + id).length > 0
}

function clickButtonInside(id) {
  $('#' + id).find('.button').click();
}

function moveLog(id) {
  console.log('♫ Move log of ' + id);
  var log = $('#' + id).find('.output');
  $header.append(log);
}

var idx = 0;
function work() {
  var prefix = 'action-';
  if (checkElementExistence(prefix + idx)) {
    console.log('♫ Find log section: ' + idx);
    moveLog(prefix + idx);
    idx++;
  }
}

$('.rebuild').on('click', function() {
  // reset idx when rebuild starts
  idx = 0;
});

var counter = 0;
function loop() {
  setTimeout(function() {
    if (true) {
      counter++;
      work();
      $header.scrollTop($header[0].scrollHeight);
      loop();
    }
  }, 100);
}

// never ending backgroud execution
loop();
