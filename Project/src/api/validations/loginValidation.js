const validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function ValidateLoginInput(userData) {
  let errors = {};
  if (!isEmpty(userData.email) && !validator.isEmail(userData.email)) {
    errors.email = "Email is not valid";
  }
  if (
    !isEmpty(userData.nationalId) &&
    !validator.isLength(userData.nationalId, { min: 14, max: 14 })
  ) {
    errors.name = "National Id Must be 14 numbers";
  }
  if (!isEmpty(userData.email) && !validator.isEmail(userData.email)) {
    errors.email = "Email is not valid";
  }
  if (isEmpty(userData.nationalId || userData.email)) {
    errors.user = "Please enter your national id or email";
  }
  if (isEmpty(userData.password)) {
    errors.password = "Password is required";
  }
  return { errors, isValid: isEmpty(errors) };
};
