'use strict'
/**
 * @name :    express-validation-error
 * @create :  2020/05/28
 * @version : 1.0.2
 * @author :  François, Joël Lesenne
 * @depot :   <https://github.com/joellesenne/express-validation-error>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * Simple Class to manage exceptions within express errorHandler
 */
class ValidationError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = ValidationError
