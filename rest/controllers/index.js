const request = require('request');
const rp = require('request-promise');
const QuerySearchModel = require('../models/query-search-model');
const ItemById = require('../models/item-id-model');
const apiBase = 'https://api.mercadolibre.com/';
const queryUrl = `${apiBase}sites/MLA/search?q=`;
const itemUrl = `${apiBase}items/`;
const categoriesUrl = `${apiBase}categories/`;
const usersUrl = `${apiBase}users/`;


const checkMiddleware = (req, res, next) => {
    if (req.query.q) {
        next();
    } else {
        res.status(404).send({message: 'Invalid'});
    }
}

const querySearch = (req, res) => {
    request(queryUrl + req.query.q, (e, response, body) => {
        if(!e && response.statusCode === 200) {
            const querySearchData = new QuerySearchModel(JSON.parse(body));
            const responseData = {
                author: null,
                categories: querySearchData.getCategories(),
                items: querySearchData.getItems(),
                author: {
                    name: 'Claudio',
                    lastname: 'Zurita'
                }
            }
            res.send(responseData);
        } else {
            res.send('problems')
        }
    });
}

const getItemById = (req, res) => {
    const itemUri = rp(itemUrl + req.params.id);
    const descriptionUrl = rp(itemUrl + req.params.id + '/description');
    return new Promise((resolve, reject) => {
        Promise.all([itemUri, descriptionUrl])
        .then(([item, description]) => {
            const itemData = JSON.parse(item);
            itemData.description = JSON.parse(description).text || JSON.parse(description).plain_text;
            const categoriesUri = rp(categoriesUrl + itemData.category_id);
            const userUri = rp(usersUrl + itemData.seller_id);
            Promise.all([categoriesUri, userUri])
                .then(([categories, users]) => {
                    itemData.categories = JSON.parse(categories);
                    itemData.users = JSON.parse(users);
                    const responseData = new ItemById(itemData);
                    resolve(res.send(responseData.getItem()));
                })
        })
    })
}

module.exports = {
    querySearch: [checkMiddleware, querySearch],
    getItemById
}

