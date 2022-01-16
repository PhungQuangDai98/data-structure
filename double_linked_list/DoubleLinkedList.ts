interface NodeDoubleLinkedList {
  previous: any | null;
  value: any | null;
  next: any | null;
}

class DoubleLinkedList {
  #nodes: Array<NodeDoubleLinkedList>;
  constructor() {
    this.#nodes = [];
  }
  get nodes(): Array<NodeDoubleLinkedList> {
    return this.#nodes;
  }
  get size(): number {
    return this.#nodes.length;
  }
  get head(): NodeDoubleLinkedList | null {
    return this.size ? this.#nodes[0] : null;
  }
  get tail(): NodeDoubleLinkedList | null {
    return this.size ? this.#nodes[this.size - 1] : null;
  }
  insertAt(index: number, value: any) {
    const previousNode = this.#nodes[index - 1] || null;
    const nextNode = this.#nodes[index] || null;
    const node: NodeDoubleLinkedList = {
      previous: previousNode,
      value: value,
      next: nextNode,
    };
    if (previousNode) previousNode.next = node;
    if (nextNode) nextNode.previous = node;
    this.#nodes.splice(index, 0, node);
  }
  insertFirst(value: any) {
    this.insertAt(0, value);
  }
  insertLast(value: any) {
    this.insertAt(this.size, value);
  }
  getAt(index: number) {
    return this.#nodes[index];
  }
  removeAt(index: number) {
    const previousNode = this.#nodes[index - 1] || null;
    const nextNode = this.#nodes[index + 1] || null;
    if (previousNode) previousNode.next = nextNode;
    if (nextNode) nextNode.previous = previousNode;
    this.#nodes.splice(index, 1);
  }
  clear() {
    this.#nodes = [];
  }
  reverse() {
    this.#nodes = this.#nodes.reduce((acc, { value }) => {
      const nextNode = acc[0] || null;
      const node = { value, next: nextNode, previous: null };
      if (nextNode) nextNode.previous = node;
      return [node, ...acc];
    }, Array<NodeDoubleLinkedList>());
  }
  *[Symbol.iterator]() {
    yield this.#nodes;
  }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.insertLast(1);
doubleLinkedList.insertLast(2);
doubleLinkedList.insertLast(3);
doubleLinkedList.insertLast(4);
doubleLinkedList.insertLast(5);

console.log(doubleLinkedList.size);
console.log(doubleLinkedList.head?.value);
console.log(doubleLinkedList.tail?.value);
console.log(doubleLinkedList.getAt(3)?.value);
console.log(doubleLinkedList.getAt(8)?.value);

console.log(doubleLinkedList.nodes);
// doubleLinkedList.reverse();
// console.log(doubleLinkedList.nodes);

