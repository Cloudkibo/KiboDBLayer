/*
This file will contain the functions for data layer.
By separating it from controller, we are separating the concerns.
Thus we can use it from other non express callers like cron etc
*/
const TestModel = require('./test.model')

exports.CreateOneTestObject = (payload) => {
  let obj = new TestModel({userMessage: payload})
  return obj.save()
}
