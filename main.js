(function(){chrome.runtime.sendMessage({action:"getSettings"},function(a){a.allowAudio&&chrome.runtime.sendMessage({action:"allowAudio"})})})();

