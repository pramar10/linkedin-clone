import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
const newsArticle = (heading,subtitle) =>(
    <div className="widgets_article">
        <div className="widgets_articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>

    </div>
)

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle('Papa is back','top news')}
      {newsArticle('Papa is back','top news')}
      {newsArticle('Papa is back','top news')}
      {newsArticle('Papa is back','top news')}
    </div>
  );
};

export default Widgets;
