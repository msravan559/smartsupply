import { texts } from '../../constants';

const errorHandler = (error) => {
  console.log(error?.response);

  return error?.response?.data?.Reason
    ? error.response.data.Reason
    : texts.failureRespone;
};

export default errorHandler;
