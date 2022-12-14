import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((e) => e.category === category),
    });
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
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
