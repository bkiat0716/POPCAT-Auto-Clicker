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
Note: 红眼猫出现后，需要清除cookies，然后再重复以上步骤。


### Ban proof version
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
