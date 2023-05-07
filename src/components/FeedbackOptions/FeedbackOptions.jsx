import PropTypes from 'prop-types';
import { Button } from './FeedBack.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            className="btn"
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            value={option}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
