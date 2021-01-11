import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import "./user-info-modal.css";
import { Modal } from "../modal/index";
import { Input } from "../input/index";
import { Button } from "../button/index";

import UserService from "../../UserService";

export function UserInfoModal(props) {
  const [name, setName] = useState("");
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [academicDegree, setAcademicDegree] = React.useState("");
  const [academicRank, setAcademicRank] = React.useState("");
  const [workPlace, setWorkPlace] = React.useState("");
  const [confYear, setConfYear] = React.useState("");
  const [report, setReport] = React.useState("");

  async function deleteParticipant(id) {
    try {
      UserService.deleteUsers(id).then(() => {
        props.callback();
      });
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    UserService.getUsers().then((response) => {
      {
        response.data.map((user) => {
          if (user.id === props.userId) {
            setName(user.name);
            setFullName(user.fullname);
            setPhone(user.phone);
            setMail(user.mail);
            setAcademicDegree(user.academicDegree);
            setAcademicRank(user.academicRank);
            setWorkPlace(user.workPlace);
            setConfYear(user.confYear);
            setReport(user.report);
          }
        });
      }
    });
  }, [setName]);

  const getModalData = async () => {
    try {
      const updatedUser = {
        id: props.userId,
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
      UserService.updateUsers(updatedUser).then((response) => {
        console.log(response);
        props.closeModal();
      });
      props.closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onClose={props.closeModal}
      title="Participant Info"
    >
      <div className="userInfoModal">
        <div className="header"></div>
        <div>
          <Input
            label="Name"
            type="text"
            onChange={setName}
            value={name}
            placeholder="Name"
          />
          <Input
            label="FullName"
            type="text"
            onChange={setFullName}
            value={fullName}
            placeholder="FullName"
          />
          <Input
            label="Phone"
            type="text"
            onChange={setPhone}
            value={phone}
            placeholder="Phone"
          />
          <Input
            label="Mail"
            type="text"
            onChange={setMail}
            value={mail}
            placeholder="Mail"
          />
          <Input
            label="Academic Degree"
            type="text"
            onChange={setAcademicDegree}
            value={academicDegree}
            placeholder="Academic Degree"
          />
          <Input
            label="Academic Rank"
            type="text"
            onChange={setAcademicRank}
            value={academicRank}
            placeholder="Academic Rank"
          />
          <Input
            label="Work Place"
            type="text"
            onChange={setWorkPlace}
            value={workPlace}
            placeholder="Work Place"
          />
          <Input
            label="ConfYear"
            type="text"
            onChange={setConfYear}
            value={confYear}
            placeholder="ConfYear"
          />
          <Input
            label="Report"
            type="text"
            onChange={setReport}
            value={report}
            placeholder="Report"
          />
        </div>

        <div className="buttons">
          <span className="buttons__item">
            <Button onClick={props.closeModal}>Cancel</Button>
          </span>
          <span>
            <Button onClick={getModalData}>Save changes</Button>
          </span>
          <Button
            onClick={() => {
              deleteParticipant(props.userId);
            }}
            className='button'
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

UserInfoModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
