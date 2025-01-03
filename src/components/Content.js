import * as React from "react";
import PropTypes from "prop-types";
import { marked } from 'marked';

export const HTMLContent = ({ content, className }) => {
  const contentHtml = marked(content || '');

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: contentHtml }} />
  )
};

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
