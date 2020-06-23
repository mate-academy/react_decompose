import React from 'react';
import PropTypes from 'prop-types';

function Section({ sectionClass, sectionText }) {
  return (
    <section className={sectionClass}>
      <span className={`${sectionClass}__text`}>{sectionText}</span>
    </section>
  );
}

Section.propTypes = {
  sectionClass: PropTypes.string.isRequired,
  sectionText: PropTypes.string.isRequired,
};

export { Section };
