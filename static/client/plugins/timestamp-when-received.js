'use strict';
(function() {
  function makeTimestamp() {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, '0');
    var m = String(now.getMinutes()).padStart(2, '0');
    var s = String(now.getSeconds()).padStart(2, '0');
    return '[' + h + ':' + m + ':' + s + '] ';
  }

  message_filters.push(function(msg) {
    msg.msg = makeTimestamp() + msg.msg;
    return msg;
  });

  Array.from(document.getElementById('chatlog').children).forEach(function(line) {
    line.innerHTML = makeTimestamp() + line.innerHTML;
  });
})();
