import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => {
    // Access localized fields
    const title = entry.getIn(['data', 'title']);
    const content = entry.getIn(['data', 'content']);
  
    return <AboutPageTemplate title={title} content={content} />;
  }

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
