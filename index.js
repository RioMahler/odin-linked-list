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

  function toString() {
    let tmp = headNode;
    let string = "";
    if (tmp != null) {
      while (tmp.nextNode != null) {
        string += `(${tmp.value}) -> `;
        tmp = tmp.nextNode;
      }
      string += `(${tmp.value}) -> null`;
    }
    return string;
  }
  return { append, prepend, toString };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

list = LinkedList();
