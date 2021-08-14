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
