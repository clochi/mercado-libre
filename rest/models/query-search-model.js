const utils = require('../utils');

class QuerySearchModel {
    constructor(data) {
        Object.keys(data)
            .forEach(key => this[key] = data[key])
    }

    getItem(item) {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: +item.price.toString().split('.')[0],
                decimals: +item.price.toString().split('.')[1] || 0
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            ubication: item.address.state_name
        }
    }

    getCategories() {
        const categories = utils.findByUniqueProperty(this, 'path_from_root');
        return categories ? categories
            .reduce((prev, next) => {
                prev.push(next.name);
                return prev;
            }, []) : [];
            
    }
    
    getItems() {
        let items = [];
        utils.findByUniqueProperty(this, 'results')
            .forEach(item => {
                items.push(this.getItem(item))
            })
        return items.slice(0, 4);
    }
}

module.exports = QuerySearchModel;