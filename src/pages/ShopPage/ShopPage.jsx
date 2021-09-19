import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
const ShopPage = ({ match }) => {
  return (
    <div className="shopPage">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
