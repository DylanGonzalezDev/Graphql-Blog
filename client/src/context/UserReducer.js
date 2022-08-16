// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_USERS":
    console.log(payload)
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
