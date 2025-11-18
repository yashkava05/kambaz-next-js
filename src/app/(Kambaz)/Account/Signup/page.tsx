"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };
  
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form.Control
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2"
        placeholder="username"
      />
      <Form.Control
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="password"
        type="password"
      />
      <Button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100">
        Sign up
      </Button>
      <Link href="/Account/Signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}