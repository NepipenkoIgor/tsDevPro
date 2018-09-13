
class Counter {
  value: number;
  name: string;
  private _running: any;
  constructor(name = 'NoName') {
    this.value = 0;
    this.name = name;
 }

  getValue() {
    return this.value;
 }

   inc() {
    this.value += 1;
    console.log(`${this.name} => ${this.value}`);
    return this;
 }

   dec() {
    this.value -= 1;
    return this;
 }

   refresh() {
    this.value = 0;
    return this;
 }

   run() {
    this._running = setInterval(this.inc.bind(this), 1000);
    return this;
 }

   stop() {
    clearInterval(this._running);
    return this;
  }
 };



const counter1 = new Counter('First');
console.log(counter1);
counter1.run();
setTimeout(counter1.stop.bind(counter1), 4000);
