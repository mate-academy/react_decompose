import React from 'react';
import PropTypes from 'prop-types';
// import className from 'classnames';

export const UsersTable = ({ users, selectUser, selectedUserId }) => (
  <>
    <p className="subtitle">Users Table</p>
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.Id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              {selectedUserId === user.id ? (
                <button
                  type="button"
                  className="button is-link"
                  onClick={() => {
                    selectUser(0);
                  }}
                />
              ) : (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    selectUser(user.id);
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  selectUser: PropTypes.func.isRequired,
  selectedUserId: PropTypes.number.isRequired,
};
