
interface ICounter {
  getValue(): number;
  refresh(): Counter; // those methods return counter for enable chaining ability
  run(): Counter;
  stop(): Counter;
}

class Counter implements ICounter {
  public name: string;
  private value: number;
  private timeoutId: any;

  constructor(name = "NoName") {
    this.value = 0;
    this.name = name;
  }

  public getValue() {
    return this.value;
  }

  public refresh() {
    this.value = 0;
    return this;
  }

  public run() {
    this.timeoutId = setInterval(this.inc.bind(this), 1000);
    return this;
  }

  public stop() {
    console.log(`${this.name} stopped with value: ${this.value}`);
    clearInterval(this.timeoutId);
    delete this.timeoutId;
    return this;
  }

  private inc() {
    this.value += 1;
    console.log(`${this.name}: ${this.value}`);
    return this;
  }
}

const counter1 = new Counter("myCounter");
console.log(counter1);
counter1.run();
setTimeout(counter1.stop.bind(counter1), 4000);
setTimeout(() => console.log(counter1), 5000);

const runBtn = document.querySelector(".run");
const stopBtn = document.querySelector(".stop");
const result = document.querySelector(".result");
if (result instanceof Element) {
  result.textContent = counter1.getValue().toString();
}
