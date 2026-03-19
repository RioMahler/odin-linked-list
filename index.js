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

  function size() {
    let tmp = headNode;
    let size = 0;
    if (headNode == null) {
      return size;
    } else if (headNode != null) {
      size++;
    }
    while (tmp.nextNode != null) {
      size++;
      tmp = tmp.nextNode;
    }
    return size;
  }

  function head() {
    if (headNode == null) {
      return undefined;
    } else return headNode.value;
  }

  function tail() {
    if (headNode == null) {
      return undefined;
    } else {
      let tmp = headNode;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      return tmp.value;
    }
  }

  function at(index) {
    let tmp = headNode;
    if (headNode == null) {
      return undefined;
    }
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
      if (tmp == null) {
        return undefined;
      }
    }
    return tmp.value;
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
  return { append, prepend, size, head, tail, at, toString };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

list = LinkedList();
