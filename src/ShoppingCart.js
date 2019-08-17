module.exports = class ShoppingCart {
    constructor() {
       this.items = [];
    };
    
    getItems() {
        return this.items;
    };

    addItem(itemName, quantity, price) {
        const addedItems = this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        });
        return addedItems;
    };

    clear() {
        this.items = [];
    };

    total() {
        return this.items.reduce((sum, item) => {
            sum += item.quantity * item.pricePerUnit
            return sum
        }, 0);
    };
};
