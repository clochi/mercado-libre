const findByUniqueProperty = (data, property) => {
    let found;
    Object.keys(data).some(key => {
        if (key === property) {
            return found = data[property];
        }

        if(data[key] && typeof data[key] === 'object') {
            found = findByUniqueProperty(data[key], property);
            return found;
        }
    })
    return found;    
}

module.exports = {
    findByUniqueProperty
}