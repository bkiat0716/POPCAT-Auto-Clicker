# POPCAT-Auto-Clicker

![me](https://c.tenor.com/NkAegm0IP8IAAAAC/popcat.gif)
## 使用方式
1) 前往 https://popcat.click
2) 打开控制台 (Ctrl + Shift + J)
3) 复制粘贴 + Enter


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
Note: If you'll send 800 or more clicks 10 times in a row, you'll get banned for 12 hours ("ban" cookie is set).


### Ban proof version

###### Method 1
```
(function(){
    const app = document.getElementById("app").__vue__;
	
    let id = setInterval(() => {
        if(app.counter) {
            clearInterval(id);

            let c = app.counter + 800;

            setInterval(() => {
                c += 800;
            }, 30000);

            setInterval(() => {
                app.bot = false;
                app.counter = c;
                app.accumulator = 800;
            }, 5);
        }
    }, 10);
})();
```
