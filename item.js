/** Item in a shopping cart. */
const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        
        // keep track of all items
        items.push(this);
    }

    static findAll() {
        return items
    }
    // Update found item with matching name to data 

    static update(name, data){
        let foundItem = items.find(name);
        if (foundItem === undefined) {
            throw{message: "Item not found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

// Find and return item with matching name

static find(name){
    const foundItem = items.find(v => v.name === name);
    if (foundItem === undefined) {
        throw{message: "Item not found", status: 404}
    }
    return foundItem
}
}



//Constructor classes 
// its a way to pass in information dynacically
// the 'new keyword' function
// -creates a new empty object {}
// -sets value of 'this' to be the new empty object
// -calls the constructor method