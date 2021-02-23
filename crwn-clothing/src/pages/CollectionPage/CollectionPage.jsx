import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/Shop/shopSelectors";
import "./CollectionPage.scss";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collectionPage">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
