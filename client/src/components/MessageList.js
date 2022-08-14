import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useNavigate } from "react-router-dom";

export const GET_MESSAGES = gql`
  {
    messages {
      _id
      title
      content
      author
    }
  }
`;

export default function MessageList() {
  const { loading, error, data } = useQuery(GET_MESSAGES);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
    return <p>no token</p>
    

  } else {
    if (loading) return <p>Loading Messages...</p>;

    if (error) {
      console.log(error);
      return <p>{error}</p>;
    }
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {data.messages.map(({ _id, title, content, author }) => (
            <div key={_id} className="card m-2">
              <div className="card-body">
                <h4>{title}</h4>
                <p>{content}</p>
                <p>{author.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
