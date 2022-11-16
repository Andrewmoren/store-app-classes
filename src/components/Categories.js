import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "chair",
          name: "Chairs",
        },
        {
          key: "table",
          name: "Tables",
        },
        {
          key: "sofa",
          name: "Sofa",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((e) => (
          <div key={e.key} onClick={() => this.props.chooseCategory(e.key)}>
            {e.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
