const { families } = require('../databases/models')

class Family {

    create(data) {
        return families.create(data)
    }
}

module.exports = new Family()