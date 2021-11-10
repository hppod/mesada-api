const { hasMissingKeysInObject } = require('../../utils/hasMissingKeysInObject')
const { API_MESSAGES } = require('../../utils/consts')
const { PERSON_TYPE } = require('../../utils/enum')

const repository = {
    Person: require('../../repositories/person')
}

const MANDATORY_KEYS = ['familyId', 'name', 'nickname', 'birthday', 'type', 'mail']

module.exports = async (req, res) => {
    try {
        const { body } = req
        const missingKeys = hasMissingKeysInObject(body, MANDATORY_KEYS)

        if (missingKeys) {
            return res.status(400).json({
                message: API_MESSAGES.MissingMandatoryKeys,
                missingKeys: missingKeys
            })
        }

        if (!PERSON_TYPE.includes(body.type)) {
            return res.status(400).json({
                message: API_MESSAGES.IncorrectEnum.replace('{{KEY}}', 'type').replace('{{VALID_VALUES}}', PERSON_TYPE.toString())
            })
        }

        const person = await repository.Person.create(body)
        return res.status(201).json({ message: API_MESSAGES.SuccessfullyCreated, content: person })
    } catch (err) {
        return res.status(500).json({ message: err.message, stack: err.stack })
    }
}