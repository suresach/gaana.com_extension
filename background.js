// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.query({'url':'http://gaana.com/*'}, function(tab){
//   	tab_id = tab[0]['id'];
//   	var click_code = "document.getElementsByClassName('play-song')[0].click();";
//   	chrome.tabs.executeScript(tab_id,{'code':click_code})

//   })

// });

var play_pause_button = document.getElementById('play_pause');
play_pause_button.onclick = function() {
  chrome.tabs.query({'url':'http://gaana.com/*'}, function(tab){
  	tab_id = tab[0]['id'];
  	var click_code = "document.getElementsByClassName('play-song')[0].click();";
  	chrome.tabs.executeScript(tab_id,{'code':click_code}, function (event){
  		play_pause_button.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
  	})

  })

}