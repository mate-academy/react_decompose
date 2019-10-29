import React from 'react';
import PropTypes from 'prop-types';

function Section({ className }) {
  return (
    <section className={className}>
      <span className={`${className}__text`}>Sticky Header!</span>
    </section>
  );
}
Section.propTypes = {
  className: PropTypes.string,
};
Section.defaultProps = {
  className: '',
};
export default Section;
