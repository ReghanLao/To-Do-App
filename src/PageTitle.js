import React from 'react';
import './pageTitle.css';

function PageTitle(props) {
  return (
    <h1 className="page-title">
      {props.title}
    </h1>
  );
}

export default PageTitle;
