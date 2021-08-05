import React from "react";

export function withApiData(endpoint, Component) {

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {}
      }
    }

    componentDidMount() {
      fetch(endpoint)
      .then((r) => r.json())
      .then((d) => this.setState({ data: d }));
    }

    render() {
      return <Component data={this.state.data} {...this.props} />;
    }
  }

}
