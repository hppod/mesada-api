const { persons } = require('../databases/models')

class Person {

    create(data) {
        return persons.create(data)
    }
}

module.exports = new Person()