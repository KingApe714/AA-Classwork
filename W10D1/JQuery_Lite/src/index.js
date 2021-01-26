const DOMNodeCollection = require("./dom_node_collection");

function $l(arg){
  if (typeof arg === "string") {
    return Array.from(_selector(arg));
  }
}

function _selector(string) {
  return document.querySelectorAll(string);
}
window.$l = $l

//$l.prototype.empty

