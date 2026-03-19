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

  function pop() {
    if (headNode == null) {
      return undefined;
    } else {
      let pop = headNode.value;
      headNode = headNode.nextNode;
      return pop;
    }
  }

  function contains(value) {
    if (headNode == null) {
      return false;
    }
    let tmp = headNode;
    while (tmp != null) {
      if (tmp.value == value) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  function findIndex(value) {
    if (headNode == null) {
      return -1;
    }
    let tmp = headNode;
    let index = 0;
    while (tmp != null) {
      if (tmp.value == value) {
        return index;
      }
      index++;
      tmp = tmp.nextNode;
    }
    return -1;
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
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    toString,
  };
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export const list = LinkedList();
