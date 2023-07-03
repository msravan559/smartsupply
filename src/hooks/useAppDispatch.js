import { useDispatch } from 'react-redux';

import store from '../features';

const useAppDispatch = () => (store.dispatch = useDispatch());

export default useAppDispatch;
