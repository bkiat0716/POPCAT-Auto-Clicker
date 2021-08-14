# POPCAT-Auto-Clicker

![me](https://c.tenor.com/NkAegm0IP8IAAAAC/popcat.gif)
## 使用方式
1) 前往 https://popcat.click
2) 打开控制台 (Ctrl + Shift + J)
3) 复制粘贴 + Enter


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
(function(){
    const app = document.getElementById("app").__vue__;
    setInterval(()=>{
        app.bot=false;
        app.accumulator = 800;
    }, 5);
})();
```
