// Get a list of all nodes with the tag 'p'. Returns an array-like collection
let paragraphs = document.getElementsByTagName('p');
// Takes the last child(paragraph[paragraphs.length - 1]) and inserts it at the start of the list
document.body.insertBefore(paragraphs[paragraphs.length - 1], paragraphs[0]);