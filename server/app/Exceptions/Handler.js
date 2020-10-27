const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use('Env')
const Logger = use('Logger')
const moment = use('moment')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle(error, { request, response }) {
    if (error.name === 'ValidationException') {
      return this.validationException(error, response)
    }

    response.status(error.status).json({
      status: error.status,
      message: error.message
    })
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {
    if (Env.get('NODE_ENV') !== 'production') {
      console.log(error)
    } else {
      Logger.error(error.message, {
        time: moment().format('hh:mm DD/MM/YYYY'),
        name: error.name,
        stack: error.stack,
        plant: error.toString(),
        url: request.url(),
      })
    }
  }

  /**
   * Trả về response lỗi xác thực dũ liệu
   *
   * @method validationException
   *
   * @param {Object} error
   * @param {Object} response
   *
   * @return {void}
   */
  validationException(error, response) {
    return response.status(400).json({
      status: error.status,
      message: error.message,
      fields: error.messages,
    })
  }
}

module.exports = ExceptionHandler
