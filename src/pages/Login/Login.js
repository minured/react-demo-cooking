import React, { useState } from "react";
import "./Login.scss";
import Image from "../../components/ImportImg";
// import FormInput from "../../components/FormInput/FormInput";
import { Button, List, InputItem } from "antd-mobile";

export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onUsernameChange = (value) => {
    console.log(value);
    setUsername(value);
  };
  const onPasswordChange = (value) => {
    console.log(value);
    setPassword(value);
  };
  const onLoginClick = () => {
    console.log(`username: ${username}, password: ${password}`);
  };
  const onRegisterClick = () => {
    console.log(`username: ${username}, password: ${password}`);
  };
  return (
    <div className="login-page">
      <div className="logo-wrapper">
        <Image src="logo.png" />
      </div>
      <form className="login-form">
        <List>
          {/* 账号 */}
          <InputItem
            type="text"
            moneyKeyboardAlign="left"
            value={username}
            // antd-mobile 的onChange直接获得当前输入的值
            onChange={onUsernameChange}
          >
            用户名
          </InputItem>
          <InputItem
            type="password"
            moneyKeyboardAlign="left"
            value={password}
            onChange={onPasswordChange}
          >
            密码
          </InputItem>
        </List>
        <Button
          type="primary"
          className="login-btn"
          onClick={onLoginClick}
        >
          登录
        </Button>
        <Button onClick={onRegisterClick}>注册</Button>
      </form>
    </div>
  );
}
