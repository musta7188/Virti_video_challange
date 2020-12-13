import React, { useState } from "react";
import { connect } from "react-redux";
import "./Form.css";

export function Form({ setUserName }) {
  const [user, setUser] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUserName(user);
  };
  return (
    <div data-testid="form" className="form--container">
      <form onSubmit={(e) => handelSubmit(e)}>
        <label>
          <h1>Player name</h1>
          <input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="user"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="user"
            autoFocus
            placeholder="Insert your name"
          />
        </label>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (user) => dispatch({ type: "SET_USER", payload: { user } }),
  };
};

export default connect(null, mapDispatchToProps)(Form);
