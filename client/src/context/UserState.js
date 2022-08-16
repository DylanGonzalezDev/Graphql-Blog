import { gql, useQuery } from "@apollo/react-hooks";
import { useReducer } from "react";
import UserContext from "./UserContext";
import userReducer from "./UserReducer";

const GET_USER_BY_TOKEN = gql`
  query {
    findUserByToken {
      _id
      username
      email
      displayName
    }
  }
`;

const UserState = (props) => {
  const initialState = {
    users: [],
    userLoggedIn: false,
    userLoggedToken: "",
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const { loading, error, data } = useQuery(GET_USER_BY_TOKEN);

  const userLoggedByToken = async () => {
    const res = await data?.findUserByToken;
    console.log(res)
    dispatch({ type: "GET_USERS", payload: res });
  };
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <UserContext.Provider
      value={{
        users: state.users,
        userLoggedByToken,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
