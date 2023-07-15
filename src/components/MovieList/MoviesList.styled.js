import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';

export const List = styled.ul`
  list-style: none;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Item = styled.li`
  padding: 5px 12px;
  border-bottom: 1px solid transparent;
  position: relative;
`;

export const LinkDetails = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1px;
  &:hover,
  &:focus {
    color: #4fb96e;
  }
  }
`;


LinkDetails.propTypes = {
  cover: propTypes.string,
};
