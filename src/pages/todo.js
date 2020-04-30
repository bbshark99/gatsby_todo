import React from 'react';
import { Link } from 'gatsby';

import TodoContainer from './../containers/TodoContainers';

import Layout from '../components/layout';
import SEO from '../components/seo';

function todo() {
  return (
    <Layout>
      <SEO title="Todo Application" />
      <Link to="/">Go Home</Link>
      <TodoContainer />
    </Layout>
  );
}

export default todo;
