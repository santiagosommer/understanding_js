function talksAbout(node, string) {
    // Go through each node of the DOM tree
    if (node.nodeType === Node.ELEMENT_NODE) {
        for (let child of node.childNodes) {
            if (talksAbout(child, string)) {
                return true;
            };
        };
        return false;
    } else if (node.nodeType === Node.TEXT_NODE) {
        // Check if the text node contains the string
        return node.nodeValue.indexOf(string) > -1
    }
}

let word = 'Hello'
console.log(`Word '${word}' found: `, talksAbout(document.body, word));