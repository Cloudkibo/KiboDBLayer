exports.validateCreatePayload = (body) => {
  let bool = true
  let arrayOfRequiredFields = [
    'platform',
    'payload',
    'title',
    'userId',
    'companyId',
    'phoneNumber'
  ]
  let arrayOfKeys = Object.keys(body)

  arrayOfRequiredFields.forEach((field, index) => {
    if (!arrayOfKeys.includes(field)) {
      bool = false
    }
  })

  return bool
}
