# Double Linked List

## Definition

**A doubly linked list is a linear data structure that represents a collection of elements, where each element points both to the next and the previous one. The first element in the doubly linked list is the head and the last element is the tail.**

![double linked list](https://www.30secondsofcode.org/assets/blog_images/ds-doubly-linked-list.webp)

**Each element of a doubly linked list data structure must have the following properties:**

- value: The value of the element
- next: A pointer to the next element in the linked list (null if there is none)
- previous: A pointer to the previous element in the linked list (null if there is none)

**The main properties of a doubly linked list data structure are:**

- size: The number of elements in the doubly linked list
- head: The first element in the doubly linked list
- tail: The last element in the doubly linked list

**The main operations of a doubly linked list data structure are:**

- insertAt: Inserts an element at the specific index
- removeAt: Removes the element at the specific index
- getAt: Retrieves the element at the specific index
- clear: Empties the doubly linked list
- reverse: Reverses the order of elements in the double linked list

## Implementation

- Create a ```class``` with a ```constructor``` that initializes an empty array, nodes, for each instance.
- Define a ```size``` getter, that returns that uses ```Array.prototype.length``` to return the number of elements in the ```nodes``` array.
- Define a ```head``` getter, that returns the first element of the nodes array or null if empty.
- Define a ```tail``` getter, that returns the last element of the nodes array or null if empty.
- Define an ```insertAt()``` method, which uses ```Array.prototype.splice()``` to add a new object in the ```nodes``` array, updating the next and previous keys of the ```previous``` and ```next``` elements respectively.
- Define two convenience methods, ```insertFirst()``` and ```insertLast()``` that use the ```insertAt()``` method to insert a new element at the start or end of the nodes array respectively.
- Define a ```getAt()``` method, which retrieves the element in the given ```index```.
- Define a ```removeAt()``` method, which uses ```Array.prototype.splice()``` to remove an object in the ```nodes``` array, updating the next and previous keys of the ```previous``` and ```next``` elements respectively.
- Define a ```clear()``` method, which empties the ```nodes``` array.
- Define a ```reverse()``` method, which uses ```Array.prototype.reduce()``` and the spread operator (```...```) to reverse the order of the nodes array, updating the ```next``` and ```previous``` keys of each element appropriately.
- Define a generator method for ```Symbol.iterator```, which delegates to the nodes array's iterator using the ```yield*``` syntax.
