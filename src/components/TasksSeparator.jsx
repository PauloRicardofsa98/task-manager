import PropTypes from "prop-types";

const TasksSeparator = ({ icon, text }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-brand-border pb-1">
      {icon}
      <p className="text-sm text-brand-text-gray">{text}</p>
    </div>
  );
};

TasksSeparator.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default TasksSeparator;
