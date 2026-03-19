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
  return { append, prepend, head, tail, toString };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

list = LinkedList();
