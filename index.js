function LinkedList() {
  let headNode = null;

  function prepend(value) {
    if (headNode != null) {
      headNode = new Node(value, headNode);
    } else {
      headNode = new Node(value, null);
    }
  }
  return { prepend };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

list = LinkedList();
