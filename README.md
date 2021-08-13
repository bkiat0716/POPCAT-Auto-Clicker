# POPCAT-Auto-Clicker

##HOW TO USE
1) Open https://popcat.click
2) Open console (Ctrl + Shift + J)
3) Insert command & run

```
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
