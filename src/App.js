import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Chair white",
          img: "chair.jpg",
          desc: "Chair BIO, natural oak",
          category: "chair",
          price: "39.99",
        },
        {
          id: 2,
          title: "Closet",
          img: "closet.jpg",
          desc: "Swing wardrobe Nordic Scandi Plain",
          category: "closet",
          price: "99.99",
        },
        {
          id: 3,
          title: "Table",
          img: "table.jpg",
          desc: "Coffee table Reed Gold White Marble",
          category: "table",
          price: "59.99",
        },
        {
          id: 4,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "Sofa Bons-T Happy Gray",
          category: "sofa",
          price: "109.99",
        },
        {
          id: 5,
          title: "Pouf",
          img: "pouf.jpg",
          desc: "Pouffe Newbury 342",
          category: "pouf",
          price: "29.99",
        },
        {
          id: 6,
          title: "Rack",
          img: "rack.jpg",
          desc: "Rack Roshal Wood",
          category: "rack",
          price: "89.99",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
