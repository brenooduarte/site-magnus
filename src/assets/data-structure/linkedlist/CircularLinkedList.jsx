class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.previous = newNode;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.previous = current;
      newNode.next = this.head;
      this.head.previous = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      if (this.length === 1) {
        this.head = null;
      } else {
        this.head = this.head.next;
        this.head.previous = this.head.previous.previous;
        this.head.previous.next = this.head;
      }
      this.length--;
      return;
    }
    let current = this.head.next;
    while (current !== this.head) {
      if (current.value === value) {
        current.previous.next = current.next;
        current.next.previous = current.previous;
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  // ... outros métodos (pesquisar, imprimir, etc.)
}
