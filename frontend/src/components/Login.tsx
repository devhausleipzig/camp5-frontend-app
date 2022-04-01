import React, { ReactNode, useEffect, useState } from "react";
import ButtonsLong from "./ButtonsLong";
import { Icon as LogInIcon } from "./icons/login-icon";
import { Icon as SignUpIcon } from "./icons/signup-icon";

const Login = () => {
    let loginButtons = [
        {
          title: "login",
          icon: LogInIcon,
          link: "/"
        },
        {
          title: "sign up",
          icon: SignUpIcon,
          link: "sign-up"
        }
    ]
    return (
        <div className="grid grid-cols-1 gap-4 content-center min-h-full text-darkbrown mt-16">asedasdfsd
        {loginButtons.map((title) => (
          <ButtonsLong customData={title} />
        ))}
      </div>
  );
};

export default Login;
