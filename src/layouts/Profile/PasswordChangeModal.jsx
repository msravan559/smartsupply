import React, { useEffect, useState } from 'react';

import _ from 'lodash';
import { Button, Form, Input, message, Modal } from 'antd';

import theme from '../../theme/theme';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { ModalContent, ModalFooter, ModalTitle } from '../../shared/components';
import { changePassword } from '../../features/auth/authActions';
import { clearData, selectChangePassword } from '../../features/auth/authSlice';

const key = 'updatePasswordResponse';

const PasswordChangeModal = (props) => {
  const [hasError, setHasError] = useState(true);

  const { modalOpen, setModalOpen } = props;
  const { data, error, loading } = useAppSelector(selectChangePassword);

  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      message
        .success({
          content: data,
          key,
          duration: theme.messageDuration,
        })
        .then(() => {
          setModalOpen(false);
          form.resetFields();
          dispatch(clearData('CHANGEPASSWORD'));
          setHasError(true);
        });
    }

    if (error) {
      message
        .error({
          content: error,
          key,
          duration: theme.messageDuration,
        })
        .then(() => {
          form.resetFields();
          dispatch(clearData('CHANGEPASSWORD'));
          setHasError(true);
        });
    }
  }, [dispatch, data, setModalOpen, form, error]);

  const onFieldsChange = (changedFields, allFields) => {
    if (!_.find(allFields, (field) => !field.touched && !field.value)) {
      setHasError(null);
    } else {
      setHasError(true);
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
    form.resetFields();
    setHasError(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const payload = {
        appType: 'pas',
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      };

      message.loading({
        content: 'Updating...',
        key,
        duration: 0,
      });

      dispatch(changePassword(payload));
    });
  };

  return (
    <Modal
      className="modal-custom"
      width={theme.layout.operationModalWidth}
      title={<ModalTitle label="Change Password" />}
      footer={
        <ModalFooter>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button
            type="primary"
            disabled={hasError && hasError}
            onClick={handleOk}
          >
            Update
          </Button>
        </ModalFooter>
      }
      onCancel={handleCancel}
      open={modalOpen}
      mask={false}
    >
      <ModalContent>
        <Form
          form={form}
          name="updatePasswordForm"
          {...theme.layout.modalForm}
          requiredMark={false}
          onFieldsChange={onFieldsChange}
        >
          <Form.Item
            label="Current Password"
            name="currentPassword"
            rules={[{ required: true, message: 'Please provide Password!' }]}
          >
            <Input.Password placeholder="Current Password" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[{ required: true, message: 'Please provide Password!' }]}
          >
            <Input.Password placeholder="New Password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please provide Password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!',
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default PasswordChangeModal;
