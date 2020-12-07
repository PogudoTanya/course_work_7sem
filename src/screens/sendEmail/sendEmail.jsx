import React from "react";

import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";
import UserService from "../../UserService";

import "./sendEmail.css";

function SendEmail() {
  const [to, setTo] = React.useState("");
  const [theme, setTheme] = React.useState("");
  const [text, setText] = React.useState("");

  async function sendEmail() {
    let newObject = {
      to,
      theme,
      text,
    };
    if (to.includes(",")) {
      newObject = {
        to: to.split(","),
        theme,
        text,
      };
      try {
        UserService.sendEmails(newObject).then(() => {});
      } catch (err) {
        console.log("Error: ", err);
      }
    } else {
      newObject = {
        to,
        theme,
        text,
      };
      try {
        UserService.sendEmail(newObject).then(() => {});
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  return (
    <div className="inputContainer">
      <Input
        placeholder="Email"
        value={to}
        onChange={setTo}
        label="Email"
        description="
If you want to enter more than one mail, please enter it separated by commas"
      />
      <Input
        placeholder="Theme"
        value={theme}
        onChange={setTheme}
        label="Theme"
      />
      <Input placeholder="Text" value={text} onChange={setText} label="Text" />
      <Button
        onClick={() => {
          sendEmail();
        }}
      >
        Send Email
      </Button>
    </div>
  );
}

export default SendEmail;
