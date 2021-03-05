import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

const Repository = ({ repo }) => (
  <ListGroup.Item
    action
    className="bg-light text-center mb-2"
    style={{ border: '2px solid #343a40' }}
  >
    <h5>
      {repo.name}
    </h5>
    <p className="m-0">
      {repo.description}
    </p>
  </ListGroup.Item>
);

Repository.propTypes = {
  repo: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repository;