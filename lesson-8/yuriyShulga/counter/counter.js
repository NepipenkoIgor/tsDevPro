var Counter = (function () {
    function Counter() {
        this.value = new Date(0, 0, 0, 0, 0, 0, 0);
    }
    Counter.prototype.getValue = function () {
        var mm = this.value.getMinutes();
        var minutes = mm < 10 ? "0" + mm : mm.toString();
        var ss = this.value.getSeconds();
        var seconds = ss < 10 ? "0" + ss : ss.toString();
        var ms = this.value.getMilliseconds() / 10;
        var millisec = ms < 10 ? "0" + ms : ms.toString();
        return minutes + " : " + seconds + " : " + millisec;
    };
    Counter.prototype.refresh = function () {
        this.value = new Date(0, 0, 0, 0, 0, 0, 0);
        return this;
    };
    Counter.prototype.run = function () {
        this.timeoutId = setInterval(this.inc.bind(this), 10);
        return this;
    };
    Counter.prototype.stop = function () {
        clearInterval(this.timeoutId);
        delete this.timeoutId;
        return this;
    };
    Counter.prototype.inc = function () {
        this.value.setMilliseconds(this.value.getMilliseconds() + 10);
        return this;
    };
    return Counter;
})();
var addCounter = function () {
    var counterContainer = document.body.appendChild(document.createElement("DIV"));
    counterContainer.classList.add("counter");
    var res = document.createElement("DIV");
    res.classList.add("result");
    var run = document.createElement("BUTTON");
    run.classList.add("run");
    run.textContent = "Run";
    var stop = document.createElement("BUTTON");
    stop.classList.add("stop");
    stop.textContent = "Stop";
    var refresh = document.createElement("BUTTON");
    refresh.classList.add("refresh");
    refresh.textContent = "Refr";
    [res, run, stop, refresh].forEach(function (elem) { return counterContainer.appendChild(elem); });
    return document.body.appendChild(counterContainer);
};
var counterElement = addCounter();
var result = counterElement.children[0];
var counter1 = new Counter();
setInterval(function () { return result.textContent = counter1.getValue.call(counter1); }, 10);
counterElement.addEventListener("click", function (e) {
    var target = e.target;
    if (!(target instanceof HTMLElement) || target.className === "result") {
        return;
    }
    var commandName = target.className;
    var command = counter1[commandName];
    if (commandName in counter1 && command instanceof Function) {
        command.call(counter1);
    }
});
