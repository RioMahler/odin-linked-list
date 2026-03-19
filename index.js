function LinkedList() {
  let headNode = null;

  function append(value) {
    if (headNode == null) {
      headNode = new Node(value, null);
    } else {
      let tmp = headNode;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value, null);
    }
  }

  function prepend(value) {
    if (headNode != null) {
      headNode = new Node(value, headNode);
    } else {
      headNode = new Node(value, null);
    }
  }
  return { append, prepend };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

list = LinkedList();
