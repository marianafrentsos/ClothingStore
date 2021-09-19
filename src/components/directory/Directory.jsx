import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/Directory/directorySelectors";

const Directory = ({ sections }) => {
  return (
    <div className="directoryMenu">
      {sections.map(({ id, ...otherSectionsProps }) => (
        <MenuItem key={id} {...otherSectionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
