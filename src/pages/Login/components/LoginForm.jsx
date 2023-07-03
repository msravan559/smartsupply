import React, { useCallback, useEffect } from 'react';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, message } from 'antd';

import Link from 'antd/es/typography/Link';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  // clearData,
  selectLogin,
  // selectLogout,
  setUser,
} from '../../../features/auth/authSlice';
// import { login } from '../../../features/auth/authActions';

import { Spacer } from '../../../shared/components';
import { authAPI } from '../../../http/apiURL';
import AXIOS from '../../../http/http-common';

const key = 'loginResponse';

const LoginForm = () => {
  const [form] = Form.useForm();

  const { data, error, loading } = useAppSelector(selectLogin);

  const navigate = useNavigate();

  // const { data: logoutResponse } = useAppSelector(selectLogout);

  const dispatch = useAppDispatch();

  const openMessage = useCallback(
    (result, response) => {
      if (result === 'success') {
        // message.success({ content: response, key });
        sessionStorage.userName = form.getFieldValue('loginId');
        // console.log("response", response);
        sessionStorage.userData = JSON.stringify(response.data);

        dispatch(setUser(sessionStorage.userName));
        // message.success({ content: response, key }).then(() => {
        //   dispatch(clearData({ type: 'LOGIN' }));
        // });
      } else if (result === 'error') {
        message.error({ content: response, key });
      }
    },
    [dispatch, form]
  );

  const [Page, setPage1] = useState(false);

  const handleBackClick = () => {
    setPage1(true);
    navigate('/');
  };

  // useEffect(() => {
  //   if (logoutResponse) {
  //     dispatch(clearData({ type: 'LOGOUT' }));
  //   }
  // }, [dispatch, logoutResponse]);

  useEffect(() => {
    if (error) {
      openMessage('error', error);
    }
  }, [error, openMessage]);

  useEffect(() => {
    if (data) {
      // openMessage('success', data);
    }
  }, [data, openMessage]);
  const onFinish = (values) => {
    console.log(values);

    AXIOS.post('/api/client/login', {
      Client_email: values.loginId,
      Client_password: values.password,
    })
      .then(({ data }) => {
        console.log('data', data);
        if (data.status === true) {
          message.success('Login Successful');
          openMessage('success', data);
          // Add logic here to redirect to the dashboard or home page
        }
      })
      .catch((error) => {
        console.error('error', error);
        // message.warning("Please Enter Valid Details");

        if (
          error.response &&
          error.response.data &&
          error.response.data.message === 'Invalid email'
        ) {
          message.warning('Invalid Email');
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.message === 'Invalid password'
        ) {
          message.warning('Invalid Password');
        } else {
          message.warning('There is an Error In Login');
        }
      });
  };
  // const onFinish = (values) => {
  //   console.log(values);

  //   if (values.loginId === "123" && values.password === "123") {
  //     message.success("Login Successful");
  //     openMessage("success", data);
  //     // Add logic here to redirect to the dashboard or home page
  //   } else {
  //     message.warning("Invalid Email and Password");
  //   }
  // };

  // const onFinish = (values) => {
  //   console.log(values);

  //   AXIOS.post(authAPI.login, {
  //     Client_email: values.loginId,
  //     Client_password: values.password,
  //   })
  //     .then(({ data }) => {
  //       if (data.status === true) {
  //         openMessage("success", data);
  //       } else {
  //         alert("Incorrect Email and Password");
  //       }
  //       console.log("Api working");
  //     })
  //     .catch((error) => console.error(error));
  // };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        name="loginId"
        rules={[{ required: true, message: 'Please provide Login ID!' }]}
      >
        <Input placeholder="Login ID" />
      </Form.Item>

      <Spacer />

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please provide Password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Spacer height={10} />

      <Link
        to="/signupclient"
        href="/signupclient"
        style={{ color: '#007bff', fontWeight: 'bolder' }}
      >
        Don't have an Account? Create a new one
      </Link>
      <br></br>
      <Spacer height={15} />
      <Form.Item>
        {/* </Form.Item>
      <Form.Item> */}
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
        <Button style={{ marginLeft: 25 }} onClick={handleBackClick}>
          Back
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
