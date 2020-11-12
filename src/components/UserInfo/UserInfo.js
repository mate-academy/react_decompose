import React from 'react';
import PropTypes from 'prop-types';
import { getUser, getUserTodos } from '../../api/users';
import { Loader } from '../Loader/Loader';

export class UserInfo extends React.PureComponent {
  state = {
    user: null,
    todos: [],
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadData();
    }
  }

  async loadData() {
    const { userId } = this.props;
    const [user, todos] = await Promise.all([
      getUser(userId),
      getUserTodos(userId),
    ]);

    /* const todosPromise = getUserTodos(userId);
    const user = await getUser(userId);
    const todos = await todosPromise; */

    this.setState({
      user, todos,
    });
  }

  render() {
    const { todos, user } = this.state;

    if (!user) {
      return <Loader />;
    }

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{user.name}</p>
              <p className="title is-4">{user.email}</p>
            </div>
          </div>
          <div className="content">
            <p className="title is-5">Todos:</p>
            <ul>
              {todos.map(todo => (
                <li key={todo.id}>
                  <label className="checkbox">
                    <input type="checkbox" />
                    &nbsp;
                    {todo.title}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  userId: PropTypes.number.isRequired,
};
