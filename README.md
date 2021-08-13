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

###### Ban proof version
```
console.log("%c Bot started - Ban proof version. ", "background: #050; color: #0f0");
var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 25; i++) {
		document.dispatchEvent(event);
	}
}, 1000);
```
