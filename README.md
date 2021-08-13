# POPCAT-Auto-Clicker

![me](https://c.tenor.com/NkAegm0IP8IAAAAC/popcat.gif)
## HOW TO USE
1) Open https://popcat.click
2) Open console (Ctrl + Shift + J)
3) Insert commands & run

```
var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});
(()=>{    
    console.clear()
setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
	}
}, 0);
```
