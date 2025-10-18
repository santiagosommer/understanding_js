// getElementById saves each id element within a hash table
// It only existe once in the tree, that's why getElementById
// only exists in document.
console.log(document.getElementById("first-word").textContent);

// On the other hand, we can have multiple class names; 
// hence, it can be used across the tree.
console.log(document.getElementsByClassName("second-word")[0].textContent);
console.log(document.getElementsByClassName("second-word")[1].textContent);