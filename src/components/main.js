import React from 'react';
import PropTypes from 'prop-types';
import { Welcome } from './welcome/welcome';
import { Header } from './header/header';
import { Article } from './article/article';

const Main = ({ welcome, header, navigation, article }) => (
  <main className="app">
    <Welcome welcome={welcome} />
    <Header header={header} nav={navigation} />
    <Article {...article} />
  </main>
);

Main.propTypes = {
  welcome: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  navigation: PropTypes.objectOf(Object).isRequired,
  article: PropTypes.objectOf(Object).isRequired,
};

export { Main };
