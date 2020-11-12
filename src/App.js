/* eslint-disable no-nested-ternary */
import React from 'react';
import 'bulma';
import './App.css';
import className from 'classnames';

import Article from './components/article/article';
import Header from './components/header/header';
import Welcome from './components/welcome/welcome';
import { UsersTable } from './components/UsersTable/UsersTable';
import { getUsers } from './api/users';
import { UserInfo } from './components/UserInfo/UserInfo';
import { LoadingError } from './components/LoadingError/LoadingError';

class App extends React.PureComponent {
  state = {
    users: [],
    userId: 0,
    loading: false,
    isLoadingError: false,
    isInitialized: false,
  };

  loadUsers = async() => {
    this.setState({
      loading: true,
      isLoadingError: false,
    });

    try {
      const users = await getUsers();

      this.setState({
        users,
        loading: false,
        isInitialized: true,
      });
    } catch (error) {
      this.setState({
        isLoadingError: true,
        loading: false,
      });
    }

    /* getUsers()
      .then(users => {
        this.setState({ users });
      }); */
  }

  render() {
    const {
      users,
      userId,
      loading,
      isLoadingError,
      isInitialized,
    } = this.state;

    return (
      <main className="app">
        <Welcome />
        <Header />
        <Article />
        <section className="section">
          <div className="container">
            <h1 className="title">Mate Academy</h1>

            <div className="columns is-mobile">
              <div className="column">
                {!isInitialized ? (
                  <button
                    type="button"
                    className={className('button is-link',
                      { 'is-loading': loading })}
                    onClick={this.loadUsers}
                  >
                    LoadUsers
                  </button>
                ) : (
                  users.length > 0 ? (
                    <UsersTable
                      users={this.state.users}
                      selectedUserId={userId}
                      selectUser={(selectedUserId) => {
                        this.setState({ userId: selectedUserId });
                      }}
                    />
                  ) : 'No users yet'
                )}
              </div>

              {userId !== 0 && (
                <div className="column">
                  <UserInfo userId={userId} />
                </div>
              )}
            </div>
            { isLoadingError && <LoadingError /> }
          </div>
        </section>
      </main>
    );
  }
}

export default App;
