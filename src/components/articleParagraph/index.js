import React from 'react';
import PropTypes from 'prop-types';

function ArticleParagraph(props) {
  return (
    <p className="article__paragraph">
      {props.text}
    </p>
  );
}

ArticleParagraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ArticleParagraph;
