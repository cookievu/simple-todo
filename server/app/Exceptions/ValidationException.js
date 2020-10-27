

const { LogicalException } = require('@adonisjs/generic-exceptions')

const message = 'Data is invalid'
const status = 400
const code = 'E_VALIDATION_FAILED'

class ValidationException extends LogicalException {
  constructor(messages) {
    super(message, status, code)
    this.messages = messages
  }
}

module.exports = ValidationException

