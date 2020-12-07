import React, { useState, useEffect } from "react";
import "./ParticipantsList.css";
import UserService from "../../UserService";
import { Table } from "../../components/table/index";
import { SearchInput } from "../../components/search-input/";
import { UserInfoModal } from "../../components/user-info-modal/user-info-modal";

function ParticipantsList() {
  const datat = [
    {
      id: 1,
      name: "Иван",
      fullname: "Ломоносов",
      phone: "+375293722456",
      mail: "ghfd@mail.ru",
      academicDegree: "доктор физическо-математических наук ",
      academicRank: "профессор",
      workPlace: "Московский государственный университет имени М.В.Ломоносова",
      confYear: '2019',
      report: "АСИНХРОННЫЕ ПОРОГОВЫЕ МОДЕЛИ",
    },
    {
      id: 2,
      name: "Лукашевич ",
      fullname: "Наталья",
      phone: "+375295552456",
      mail: "natali@mail.ru",
      academicDegree: "доктор физическо-математических наук ",
      academicRank: "доцент",
      workPlace: "Московский государственный университет имени М.В.Ломоносова",
      confYear: '2016',
      report: "СЕМАНТИЧЕСКИЙ АНАЛИЗ РЕЧИ",
    },
    {
      id: 3,
      name: "Кирилл",
      fullname: "Русецкий",
      phone: "+375293728596",
      mail: "kirill@mail.ru",
      academicDegree: "доктор физическо-математических наук ",
      academicRank: "профессор",
      workPlace: "Московский государственный университет имени М.В.Ломоносова",
      confYear: '2018',
      report: "ИНТЕЛЛЕКТУАЛЬНЫЕ ЭМОЦИИ",
    },
  ];
  const [participantList, setPartisipantList] = useState(datat);
  const [currentClientsCount, setCurrentClientsCount] = useState(3);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedClientId, setSelectedClientId] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [sortOrder, setSortOrder] = useState(1);
  const [sortField, setSortField] = useState('fullName');
  const getUsers = () => {
    // UserService.getUsers().then((response) => {
    //   setPartisipantList(response.data);
    //   console.log(response.data);
    //   setCurrentClientsCount(response.data.length);
    // });
  };

  const onSort = ({ field }) => {
    setSortOrder(sortOrder * -1);
    setSortField(field);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const onRowClick = (userId) => {
    setSelectedClientId(userId);
    setIsOpen(true);
  };

  const myCallbackFn = () => {
    getUsers();
  };
  const columns = [
    { name: "Name", value: "name", get: (item) => item.name, sortable: true },
    {
      name: "Fullname",
      value: "fullname",
      get: (item) => item.fullname,
      sortable: true,
    },
    {
      name: "Phone",
      value: "phone",
      get: (item) => item.phone,
      sortable: true,
    },
    {
      name: "Mail",
      value: "mail",
      get: (item) => item.mail,
      sortable: true,
    },
    {
      name: "Academic Degree",
      value: "academicDegree",
      get: (item) => item.academicDegree,
      sortable: true,
    },
    {
      name: "Academic Rank",
      value: "academicRank",
      get: (item) => item.academicRank,
      sortable: true,
    },
    {
      name: "Work Place",
      value: "workPlace",
      get: (item) => item.workPlace,
      sortable: true,
    },
    {
      name: "Conf Year",
      value: "confYear",
      get: (item) => item.confYear,
      sortable: true,
    },
    {
      name: "Report",
      value: "report",
      get: (item) => item.report,
      sortable: true,
    },
  ];

  useEffect(() => {
    getUsers();
  }, [currentClientsCount]);

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="header__title">Participants</div>
          <div>
            <div className="header__line}" />
          </div>
          <div className="header__count">{currentClientsCount}</div>
          <div className="header__description">Active users</div>
        </div>
        {currentClientsCount === 0 && <div>Users not found</div>}

        <>
          {currentClientsCount !== 0 && (
            <div className="table_size">
              <Table
                data={participantList}
                columns={columns}
                onRowClick={onRowClick}
                callback={myCallbackFn}
                onSort={onSort}
              />
            </div>
          )}
        </>
        {modalIsOpen && (
          <UserInfoModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            userId={selectedClientId}
          />
        )}
      </div>
    </div>
  );
}

export default ParticipantsList;
