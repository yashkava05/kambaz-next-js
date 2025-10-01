import Link from "next/link";
export default function Signin() {
 return (
   <div id="wd-signin-screen">
    <h3>Assignment One - Yash Kava</h3>
     <h3>SIGN IN PAGE</h3>
     <input className="wd-username" placeholder="username" /> <br />
      <input className="wd-password" placeholder="password" type="password" /> <br />
      <Link id="wd-signin-btn" href="/Dashboard"> Sign In </Link> <br />
      <Link id="wd-signup-link" href="signup"> Sign Up </Link>
   </div>
);
}