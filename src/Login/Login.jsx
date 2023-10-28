// Login.js
import { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Label = styled.label`
  text-align: left;
  display: block;
  font-weight: bold;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const RegisterLink = styled.p`
  font-size: 14px;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // You can implement your login logic here
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <Label for="username">Login ID</Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter your login ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label for="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember Me
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          Agree to Terms and Conditions
        </CheckboxLabel>
        <Button type="submit">Login</Button>
        <RegisterLink>
          Dont have an account? <a href="/register">Register now</a>
        </RegisterLink>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
