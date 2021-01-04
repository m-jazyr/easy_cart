import { makeRequest } from './fetchData';
import { API_BASE } from '../config/constants';
import store from '../redux/store';


export const getOtp = (phone) => {
  const bodyObj = {
    phone_no: phone,
  };
  const options = {
    baseUrl: API_BASE + 'register/',
    method: 'POST',
    bodyObj: bodyObj,
  };
  return makeRequest(options);
};

export const verifyOtp = (otp) => {
  const state = store.getState();
  const user = state.auth.user;
  const bodyObj = {
    phone_no: user.phone,
    otp: otp,
  };
  const options = {
    baseUrl: API_BASE + 'verify_otp/',
    method: 'POST',
    bodyObj: bodyObj,
  };
  return makeRequest(options);
};


export const signupApi = (name, email, password, confirmPassword) => {
  const bodyObj = {
    name,
    email,
    password,
    confirm_password: confirmPassword,
  };
  const options = {
    baseUrl: API_BASE + 'register/',
    method: 'POST',
    bodyObj: bodyObj,
  };
  return makeRequest(options);
};

export const verifyOTPApi = (emailCode, token) => {
  const bodyObj = {
    email_code: emailCode,
  };
  const options = {
    baseUrl: API_BASE + 'verify_otp/',
    method: 'POST',
    bodyObj: bodyObj,
    token: token,
  };
  return makeRequest(options);
};

export const forgotPasswordApi = email => {
  const bodyObj = {
    email,
  };
  const options = {
    baseUrl: API_BASE + 'forgot_password/',
    method: 'POST',
    bodyObj: bodyObj,
  };
  return makeRequest(options);
};

export const verifyResetCodeApi = (email, verificationCode) => {
  const bodyObj = {
    email: email,
    verification_code: verificationCode,
  };
  const options = {
    baseUrl: API_BASE + 'verify_reset_code/',
    method: 'POST',
    bodyObj: bodyObj,
  };
  return makeRequest(options);
};

export const resetPasswordApi = (newPassword, token) => {
  const bodyObj = {
    new_password: newPassword,
  };
  const options = {
    baseUrl: API_BASE + 'reset_password/',
    method: 'POST',
    bodyObj: bodyObj,
    token: token,
  };
  return makeRequest(options);
};
