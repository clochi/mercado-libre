const utils = require('../utils');

class ItemById {
    constructor(data) {
        Object.keys(data)
            .forEach(key => this[key] = data[key])
    }

    getItem() {
        return {
            id: this.id,
            title: this.title,
            price: {
                currency: this.currency_id,
                amount: +this.price.toString().split('.')[0],
                decimals: +this.price.toString().split('.')[1] || 0
            },
            picture: this.pictures[0].url,
            condition: this.condition,
            free_shipping: this.shipping.free_shipping,
            sold_quantity: this.sold_quantity,
            description: this.description,
            categories: this.getCategories(),
            author: {
                name: 'Claudio',
                lastname: 'Zurita'
            }
        }
    }

    getCategories() {
        this.categories = utils.findByUniqueProperty(this.categories, 'path_from_root');
        return this.categories ? this.categories
            .reduce((prev, next) => {
                prev.push(next.name);
                return prev;
            }, []) : [];
            
    }

}

module.exports = ItemById;