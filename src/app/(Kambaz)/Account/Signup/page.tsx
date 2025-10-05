import Link from "next/link";
import { FormControl, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl 
        id="wd-username" 
        placeholder="username" 
        className="mb-2 wd-username" 
      />
      <FormControl 
        placeholder="password" 
        type="password" 
        className="mb-2 wd-password" 
      />
      <FormControl 
        placeholder="verify password" 
        type="password" 
        className="mb-2 wd-password-verify" 
      />
      <Link 
        href="/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign up
      </Link>
      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}