class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  getValue() {
    return this.#value;
  }
  padStart(pad) {
    this.#value = `${pad}${this.#value}`;
  }
  padEnd(pad) {
    this.#value = `${this.#value}${pad}`;
  }
  padBoth(pad) {
    this.#value = `${pad}${this.#value}${pad}`;
  }

}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
