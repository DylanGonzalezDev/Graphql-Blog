import { gql, useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [login] = useMutation(LOGIN);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) {
     navigate("/")
     return <p>{token}</p>
  } else {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const { data } = await login({
                      variables: { email, password },
                    });
                    const token = data.login;
                    localStorage.setItem("token", token);
                    navigate("/");
                  } catch (err) {
                    setErrors("error al validar usuario");
                  }
                }}
              >
                <div className="my-2">
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="my-2">
                  <input
                    required
                    type="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div>
                  <p>{errors && <span>{errors}</span>}</p>
                </div>
                <button className="btn btn-success btn-block">login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
