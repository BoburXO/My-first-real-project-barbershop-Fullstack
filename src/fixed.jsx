import React from "react";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import { Link } from "react-router-dom";

const fixed = () => {
  //JSX
  return (
    <div className="button1">
      <Link to="/book">
        <button className="btn">
          <ContentPasteGoIcon />
        </button>
      </Link>
    </div>
  );
};

export default fixed;
