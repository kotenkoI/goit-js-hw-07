class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(item) {
    if (this.#items.indexOf(item) > -1) {
      this.#items.splice(this.#items.indexOf(item), 1);
    }
  }
}




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
