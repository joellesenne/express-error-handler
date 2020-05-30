'use strict'
/**
 * @name :    express-validation-error
 * @create :  2020/05/28
 * @version : 1.0.0
 * @author :  François, Joël Lesenne
 * @depot :   <https://github.com/joellesenne/express-validation-error>
 * @licence : MIT <https://mit-license.org/>
 */

/**
 * @load modules dependencies
 */
const chai = require('chai')

/**
 * @load modules UTILS
 */
const ValidationError = require('../lib/ValidationError')

const { expect } = chai

describe('ValidationError', () => {
  it('should catch exceptions of a function passed into it', async () => {
    const error = new ValidationError('catch me!', 404)
    const foo = ValidationError(() => {
      throw error
    })
    expect(foo).to.throw(ValidationError)
  })
})
