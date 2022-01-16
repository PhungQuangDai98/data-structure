interface NodeLinkedList {
  value: any | null;
  next: NodeLinkedList | null;
}
class LinkedList {
  #nodes: Array<NodeLinkedList>;
  constructor() {
    this.#nodes = [];
  }
  public get size(): number {
    return this.#nodes.length;
  }

  public get head(): NodeLinkedList | null {
    return this.size ? this.#nodes[0] : null;
  }

  public get tail(): NodeLinkedList | null {
    return this.size ? this.#nodes[this.size] : null;
  }

  public insertAt(index: number, value: any) {
    const previousNode = this.#nodes[index - 1] || null;
    const nextNode = this.#nodes[index] || null;
    const node: NodeLinkedList = {
      value: value,
      next: nextNode,
    };
    if (previousNode) previousNode.next = node;
    this.#nodes.splice(index, 0, node);
  }

  /**
   * insertFirst
   */
  public insertFirst(value: any) {
    this.insertAt(0, value);
  }

  /**
   * insertLast
   */
  public insertLast(value: any) {
    this.insertAt(this.size, value);
  }
  /**
   * getAt
   */
  public getAt(index: number) {
    return this.#nodes[index];
  }
  /**
   * removeAt
   */
  public removeAt(index: number) {
    const previousNode = this.#nodes[index - 1] || null;
    const nextNode = this.#nodes[index + 1] || null;
    if (previousNode) previousNode.next = nextNode;

    return this.#nodes.splice(index, 1);
  }
  /**
   * clear
   */
  public clear() {
    this.#nodes = [];
  }
  /**
   * reverse
   */
  public reverse() {
    this.#nodes = this.#nodes.reduce(
      (arr, { value }) => [{ value, next: arr[0] || null }, ...arr],
      Array<NodeLinkedList>()
    );
  }

  public *[Symbol.iterator]() {
    yield* this.#nodes;
  }
}

const linkedList = new LinkedList();
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertLast(4);
linkedList.insertLast(5);
const list = linkedList[Symbol.iterator]();
console.log(list.next());
console.log(list.next());
