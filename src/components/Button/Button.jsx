import PropTypes from 'prop-types';
import { AddButton } from './Button.styled';

export function Button({ onClick }) {
  return (
    <AddButton type="button" onClick={onClick}>
      Load more
    </AddButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};