import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/Shop/shopSelectors";
import "./CollectionsOverview.scss";

import Collection from "../Collection/Collection";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collectionsOverview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
