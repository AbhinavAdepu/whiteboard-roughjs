import React from "react";

/**
 * @description Utility compponent to shows this screen with message
 * if no results found or if server is down
 * @function NoResults
 * @param {string} title - Any title to this component
 * @param {string} msg - Any message to this component
 * @param {object} DynamicIcon - Accepts any for this component, if no icon is passed defaults to ErrorIcon
 * @returns {object} Component with icons and message in centre of the screen
 * @author Abhinav Adepu
 */
const NoResults = ({
  title = "Internal server error",
  msg = "Please try later."
}) => {
  return <div className="noResult">No Results to Show</div>;
};

export default NoResults;
