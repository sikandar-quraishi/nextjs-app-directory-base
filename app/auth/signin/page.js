"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import "./signin.css";
import Link from "next/link";

export const metadata = {
  title: "Login page",
  description: "Login creating this project for the practice perpus only.",
};

const Signin = (props) => {
  console.log("Loin props", props);
  const { data: session } = useSession();
  // console.log("session", session)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let email = "squraishi8846@gmail.com";
  // <>
  //   Not signed in <br/>
  //   <button onClick={() => signIn('github')}>Sign in</button>
  //   </>

  const onSubmit = (e) => {
    // const result = await signIn("credentials", {
    //   username: userName.current,
    //   password: pass.current,
    //   redirect: true,
    //   callbackUrl: "/",
    // });

    e.preventDefault();

    // Perform any form validation here (e.g., check for valid username and password)
    // You can also make an API call to sign up the user if needed.
    //  signIn("credentials", {
    //       username: formData.username,
    //       password:  formData.password,
    //       redirect: false,
    //       callbackUrl: "/",
    //     });
    signIn(undefined, { redirect: true, callbackUrl: "/" });
    console.log("Username:", formData.username);
    console.log("Password:", formData.password);

    // Reset the form after submission
    // setFormData({
    //   username: "",
    //   password: "",
    // });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-left">
          <div className="login-text">
            <h2>Logo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada vel libero vitae eleifend. Fusce tristique ipsum
              lorem.
            </p>
            <a className="btn" href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <p>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </p>
              {/* <p>
                <input className="btn" type="submit" value="Sing In" />
              </p> */}
              <p>
                {/* <button className="github-btn btn" onClick={onSubmit}>Sign in with credentials</button> */}

                {/* <button className="github-btn btn" onClick={() => signIn("email", { redirect: false, email: "bill@fillmurray.com" })}>
                Sign in with GihHub
              </button> */}
              </p>
              <p>
                <Link href="/auth/forgot-password">Forget password?</Link>
                <Link href="/auth/register">Create an account.</Link>
              </p>
            </form>
            <button className="github-btn btn" onClick={onSubmit}>
              Sign in with credentials
            </button>

            {/* <p> */}
            {/* <button className="github-btn btn">Sign in with credentials</button> */}

            {/* <button className="github-btn btn" onClick={() => signIn("email", { redirect: false, email: "bill@fillmurray.com" })}>
                Sign in with GihHub
              </button> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
