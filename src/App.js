import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrderr = this.deleteOrder.bind(this);
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((e) => e.id !== id) });
  }

  addToOrder(item) {
    const isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
}

export default App;
