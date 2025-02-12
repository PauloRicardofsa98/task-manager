import PropTypes from "prop-types";

const InputErrorMessage = ({ message }) => {
  return <span className="text-left text-xs text-red-500">{message}</span>;
};
InputErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default InputErrorMessage;
