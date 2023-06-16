export const validateRegister = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'This field is required';
  } else if (values.name.includes(' ')) {
    errors.name = 'whitespaces are not allowed';
  }
  if (!values.email) {
    errors.email = 'This Field is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'This field is empty';
  } else if (values.password.length > 8 && values.password.length < 10) {
    errors.password = 'password cannot be less than 8 or greater than 10';
  }

  if (values.password !== values.cpassword) {
    errors.password = 'password mismatch, carefully check again';
  } else if (!values.cpassword) {
    errors.cpassword = 'This field is required';
  }
  return errors;
};
export const validateLogin = (values) => {};
