import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: inline-block;
  padding: 0.3em;
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: 'flex',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ul>
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link to="/todo">Todo</Link>
      </ListItem>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
