# Shadowing

What we can see here is the way JavaScript handles properties and methods across objects.

## Explanation

Prototypes define the set of properties and methods that an object can inherit.

1. First, JavaScript checks if the property or method exists directly on the object (the instance).<br>
If it exists, that version is used, shadowing happens here.

2. If it doesn’t exist on the object, JavaScript searches the object’s direct prototype.<br>
If the property or method is found there, it is used.

3. If it still isn’t found, the search continues up the prototype chain: it checks the prototype of the prototype, and so on, until it reaches `Object.prototype`.<br>
If the property or method is not found anywhere, `undefined` is returned.
