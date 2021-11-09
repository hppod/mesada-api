const { Family: Families } = require('../databases/models')

class Family {

    create(data) {
        return Families.create(data)
    }
}

module.exports = new Family()