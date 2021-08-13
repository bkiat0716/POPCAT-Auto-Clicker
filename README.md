# POPCAT-Auto-Clicker

![me](https://c.tenor.com/NkAegm0IP8IAAAAC/popcat.gif)
## HOW TO USE
1) Open https://popcat.click
2) Open console (Ctrl + Shift + J)
3) Insert commands & run


```
console.log("%c Bot started. Please clear your cookies if you've been barked as a bot (red eyes popcat). ", "background: #050; color: #0f0");
var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
	}
}, 0);
```
Note: If you'll send 800 or more clicks 10 times in a row, you'll get banned for 12 hours ("ban" cookie is set).


#### Ban proof version
```
console.log("%c Bot started - Ban proof version. ", "background: #050; color: #0f0");
var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 26; i++) {
		document.dispatchEvent(event);
	}
}, 1000);
```
