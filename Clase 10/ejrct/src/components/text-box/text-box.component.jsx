import React from 'react';
import './text-box.styles.css';

import { withApiData } from '../api/api.component';

class TextBoxBase extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hola mundo desde TextBox</h2>
      </div>
    );
  }

}

export default withApiData('http://jsonplaceholder.typicode.com/posts/', TextBoxBase)
