class Queue{
  #item: any[];
  constructor (){
    this.#item = [];
  }
  public enqueue(item: any){
    this.#item.push(item);
  }
  public dequeue(){
    return this.#item.shift();
  }
  public peek(){
    return this.#item[0];
  }
  public isEmpty(){
    return this.#item.length === 0;
  }
}

const queue = new Queue();

console.log(queue.isEmpty());    // true

queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');

console.log(queue.isEmpty());    // false

console.log(queue.peek());       // 'A'

console.log(queue.dequeue());    // 'A'
console.log(queue.dequeue());    // 'B'
console.log(queue.dequeue());    // 'C'
console.log(queue.dequeue());    // 'D'

console.log(queue.isEmpty());
