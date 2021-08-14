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
###### Method 2
```
function setCookie(cName, cValue, expDays) {
    var date = new Date();
    date.setTime(date.getTime() + (expDays*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

(()=>{    
    console.clear()

    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });

    // Start sendStats interval
    document.dispatchEvent(event);
    // Total pops
    var total = 0;

    var iv = setInterval(()=>{
        // Get VUE
        var vue = document.getElementById('app').__vue__;
        // Check if user is marked as bot (just for safety measures, very unlikely to happen)
        if(vue.bot){
            console.log("%c You've been barked as a bot. Please clear your cookies.", "background: #a00; color: #fff");
            clearInterval(iv);
            return;
        }
        // Prevent ban
        vue.sequential_max_pops = 0;
        // Detect sendStats function run
        if(vue.accumulator == 0){
            total += 800;
            console.log(`[${new Date().toLocaleTimeString()}] %c800 pops sent (Total: ${total})`, "color: #0f0");
			// Open and close cat's mount
            vue.open = true;
            vue.counter += 800;
            setTimeout(()=>{
                vue.open = false;
            }, 1000);
            setCookie("pop_count", vue.counter, 365)
        }
        // Set 800 pops
        vue.accumulator = 800;
    }, 1000);

    console.log("%c Bot started. Waiting for the first request being sent. ", "background: #050; color: #0f0");
})();
```
