import React, { PureComponent } from 'react';

class Detail extends PureComponent {
  render() {
    console.log(this);
    const id = this.props.match.params.id;
    return (
      <div>Detail: {id}</div>
    );
  }
}

export default Detail;