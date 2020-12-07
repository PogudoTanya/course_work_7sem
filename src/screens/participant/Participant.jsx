import React, { useState } from "react";

import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";
import UserService from "../../UserService";

import "./Participant.css";

function Participant() {
  const [name, setName] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [academicDegree, setAcademicDegree] = React.useState("");
  const [academicRank, setAcademicRank] = React.useState("");
  const [workPlace, setWorkPlace] = React.useState("");
  const [confYear, setConfYear] = React.useState("");
  const [report, setReport] = React.useState("");

  async function saveParticipant() {
    const newObject = {
      name: name,
      fullname: fullName,
      phone: phone,
      mail: mail,
      academicDegree: academicDegree,
      academicRank: academicRank,
      workPlace: workPlace,
      confYear: confYear,
      report: report,
    };

    try {
      UserService.addUsers(newObject).then(() => {});
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  return (
    <div className="inputContainer">
      <Input placeholder="Name" value={name} onChange={setName} label="Name" />
      <Input
        placeholder="FullName"
        value={fullName}
        onChange={setFullName}
        label="FullName"
      />
      <Input
        placeholder="Phone"
        value={phone}
        onChange={setPhone}
        label="Phone"
      />
      <Input placeholder="Mail" value={mail} onChange={setMail} label="Mail" />
      <Input
        label="Academic Degree"
        onChange={setAcademicDegree}
        value={academicDegree}
        placeholder="Academic Degree"
      />
      <Input
        label="Academic Rank"
        onChange={setAcademicRank}
        value={academicRank}
        placeholder="Academic Rank"
      />
      <Input
        label="Work Place"
        onChange={setWorkPlace}
        value={workPlace}
        placeholder="Work Place"
      />
      <Input
        label="ConfYear"
        onChange={setConfYear}
        value={confYear}
        placeholder="ConfYear"
      />
      <Input
        label="Report"
        onChange={setReport}
        value={report}
        placeholder="Report"
      />
      <Button
        onClick={() => {
          saveParticipant();
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default Participant;
