const { hasMissingKeysInObject } = require('../../utils/hasMissingKeysInObject')
const { API_MESSAGES } = require('../../utils/consts')

const repository = {
    Family: require('../../repositories/family')
}

const MANDATORY_KEYS = ['description']

module.exports = async (req, res) => {
    try {
        const { body } = req
        const missingKeys = hasMissingKeysInObject(body, MANDATORY_KEYS)

        if(missingKeys) {
            return res.status(400).json({
                message: API_MESSAGES.MissingMandatoryKeys,
                missingKeys: missingKeys
            })
        }

        const family = await repository.Family.create(body)

        return res.status(201).json({ message: API_MESSAGES.SuccessfullyCreated, content: family })
    } catch(err) {
        return res.status(500).json({ message: err.message, stack: err.stack })
    }
}