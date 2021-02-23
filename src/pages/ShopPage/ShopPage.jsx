import React from "react";
import SHOP_DATA from "./SHOP_DATA";
import Collection from "../../components/Collection/Collection";

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className="shopPage">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
