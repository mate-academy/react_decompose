import React from 'react';
import PropTypes from 'prop-types';
import { Welcome } from './welcome/welcome';
import { Header } from './header/header';
import { Article } from './article/article';

const Main = props => (
  <main className="app">
    <Welcome welcome={props.welcome} />
    <Header header={props.header} nav={props.navigation} />
    <Article {...props.article} />
  </main>
);

Main.propTypes = {
  welcome: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  navigation: PropTypes.objectOf(Object).isRequired,
  article: PropTypes.objectOf(Object).isRequired,
};

export { Main };
