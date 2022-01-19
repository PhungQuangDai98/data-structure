class Stack {
  #items: any[];
  constructor(){
    this.#items = [];
  }
  public push (item: any) {
    this.#items.unshift(item);
  }
  public pop (){
    return this.#items.shift();
  }
  public peek(){
    return this.#items[0];
  }
  public isEmpty(){
    return this.#items.length === 0;
  }
}

const stack = new Stack();

stack.push('apples');
stack.push('oranges');
stack.push('pears');

console.log(stack.isEmpty());    // false

console.log(stack.peek());       // 'pears'

console.log(stack.pop());        // 'pears'
console.log(stack.pop());        // 'oranges'
console.log(stack.pop());        // 'apples'

console.log(stack.isEmpty());    // true
