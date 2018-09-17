
interface ICounter {
  getValue(): string;
  refresh(): Counter; // those methods return counter for enable chaining ability
  run(): Counter;
  stop(): Counter;
}

class Counter implements ICounter {
  private value: Date;
  private timeoutId: any;

  constructor() {
    this.value = new Date(0, 0, 0, 0, 0, 0, 0);
  }

  public getValue() {
    const mm: number = this.value.getMinutes();
    const minutes: string = mm < 10 ? `0${mm}` : mm.toString();

    const ss: number = this.value.getSeconds();
    const seconds: string = ss < 10 ? `0${ss}` : ss.toString();

    const ms: number = this.value.getMilliseconds() / 10;
    const millisec: string = ms < 10 ? `0${ms}` : ms.toString();
    return `${minutes} : ${seconds} : ${millisec}`;
  }

  public refresh() {
    this.value = new Date(0, 0, 0, 0, 0, 0, 0);
    return this;
  }

  public run() {
    this.timeoutId = setInterval(this.inc.bind(this), 10);
    return this;
  }

  public stop() {
    clearInterval(this.timeoutId);
    delete this.timeoutId;
    return this;
  }

  private inc() {
    this.value.setMilliseconds(this.value.getMilliseconds() + 10);
    return this;
  }
}

const addCounter = () => {
    const counterContainer: Element = document.body.appendChild(document.createElement("DIV"));
    counterContainer.classList.add("counter");

    const res: HTMLElement = document.createElement("DIV");
    res.classList.add("result");

    const run: HTMLElement = document.createElement("BUTTON");
    run.classList.add("run");
    run.textContent = `Run`;

    const stop: HTMLElement = document.createElement("BUTTON");
    stop.classList.add("stop");
    stop.textContent = `Stop`;

    const refresh: HTMLElement = document.createElement("BUTTON");
    refresh.classList.add("refresh");
    refresh.textContent = `Refr`;

    [res, run, stop, refresh].forEach((elem: HTMLElement) => counterContainer.appendChild(elem));

    return document.body.appendChild(counterContainer);
};

const counterElement: Element = addCounter();
const result = counterElement.children[0];
const counter1: Counter = new Counter();
setInterval(() => result.textContent = counter1.getValue.call(counter1), 10);

counterElement.addEventListener("click", (e: Event) => {
  const { target } = e;
  if ( !(target instanceof HTMLElement) || target.className === "result") {
    return;
  }

  const commandName: string = target.className;
  const command = counter1[commandName];

  if (commandName in counter1 && command instanceof Function) {
    command.call(counter1);
  }
});
