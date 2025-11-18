"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as client from "../client";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form.Control
        id="wd-username"
        placeholder="username"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2">
        Sign in
      </Button>
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}