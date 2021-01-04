export const validateEmail = (email) => {
  const exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isValid = email.match(exp);
  return isValid;
};
export const validatePassword = (password) => {
  const exp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const isValid = password.match(exp);
  return isValid;
};
export const validateMake = (make) => {
  const isValid = make.length > 4 && make.length <= 12;
  return isValid;
};
export const validateModel = (model) => {
  const isValid = model.length > 4 && model.length <= 10;
  return isValid;
};
export const validateYear = (year) => {
  const isValid = year >= 1986 && year <= new Date().getUTCFullYear() + 1;
  return isValid;
};
export const validateDateOfBirth = (dateOfBirth) => {
  const isValid =
    dateOfBirth >= 1950 && dateOfBirth <= new Date().getUTCFullYear() - 18;
  return isValid;
};
export const validateLicense = (licenseNumber) => {
  const isValid = licenseNumber.length > 4;
  return isValid;
};

export const validateLicensePlateNumber = (licensePlateNumber) => {
  const isValid = licensePlateNumber.length >= 4;
  return isValid;
};

export const validateCarInsuranceProvider = (carInsuranceProvider) => {
  return carInsuranceProvider.length >= 4;
};

export const validateSSN = (SSN) => {
  return SSN.length > 8;
};
