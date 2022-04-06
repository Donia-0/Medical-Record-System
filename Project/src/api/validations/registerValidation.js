const validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function ValidateRegisterInput(userData) {
  let errors = {};

  if (isEmpty(userData.name)) {
    errors.name = "Name is required";
  }
  if (isEmpty(userData.nationalId)) {
    errors.nationalId = "National-id is required";
  }
  if (isEmpty(userData.password)) {
    errors.password = "Password is required";
  }
  if (isEmpty(userData.email)) {
    errors.email = "Email is required";
  }

  if (!validator.isLength(userData.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (!validator.isLength(userData.password, { min: 8, max: 50 })) {
    errors.name = "Password must be between 2 and 30 characters";
  }
  if (userData.password.toLowerCase().includes("password")) {
    errors.password = 'Password cannot contain "password"';
  }
  if (!validator.isEmail(userData.email)) {
    errors.email = "Email is not valid";
  }
  if (!validator.isLength(userData.nationalId, { min: 14, max: 14 })) {
    errors.name = "National Id Must be 14 numbers";
  }

  return { errors, isValid: isEmpty(errors) };
};
