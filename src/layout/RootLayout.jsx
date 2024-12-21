import PropTypes from "prop-types";

const RootLayout = ({ children }) => {
  return <div>{children}</div>;
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
