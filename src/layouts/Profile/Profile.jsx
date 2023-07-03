import React from 'react';

import { Avatar, Dropdown } from 'antd';

import { icons } from '../../constants';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  // clearData,
  // selectLogin,
  // selectLogout,
  selectUser,
  setUser,
} from '../../features/auth/authSlice';
// import { logout } from '../../features/auth/authActions';

import styles from './Profile.module.scss';
// import PasswordChangeModal from './PasswordChangeModal';

const Profile = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  const user = useAppSelector(selectUser);
  // const { data } = useAppSelector(selectLogout);
  // const { data: loginResponse } = useAppSelector(selectLogin);

  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    // dispatch(logout({ loginId: user })); // calling /api/user/v1/auth/users API
    // dispatch(clearData({ type: 'LOGOUT' }));
    sessionStorage.removeItem('userName');
    dispatch(setUser(null));
  };

  const items = [
    {
      label: <div onClick={logoutHandler}>Logout</div>,
      key: 'logout',
    },
    // {
    //   label: (
    //     <div onClick={() => setModalOpen(!modalOpen)}>Change Password</div>
    //   ),
    //   key: 'changePassword',
    // },
  ];

  // useEffect(() => {
  //   if (data) {
  //     sessionStorage.removeItem('userName');
  //     dispatch(setUser(null));
  //   }
  // }, [dispatch, data]);

  // useEffect(() => {
  //   if (loginResponse) {
  //     dispatch(clearData({ type: 'LOGIN' }));
  //   }
  // }, [dispatch, loginResponse]);

  return (
    <>
      <Dropdown menu={{ items }} className={styles.profileAvatar}>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <Avatar icon={icons.UserOutlined} style={{ fontSize: 14 }} />
          <span className="userName fw-600">{user}</span>
        </a>
      </Dropdown>
      {/* <PasswordChangeModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> */}
    </>
  );
};

export default Profile;
