class ObjectConstructor {
  constructor(key1, key2) {
    this.key1 = key1;
    this.key2 = key2;
  }
  getHello() {
    return "hello";
  }
}
const obj2 = new ObjectConstructor("value1", "value2");
const obj3 = new ObjectConstructor("componens", "react");

console.log(obj2.key1);
console.log(obj3.key1);
console.log(obj2.getHello());
console.log(obj3.getHello());
