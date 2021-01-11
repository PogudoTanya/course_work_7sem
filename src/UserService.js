import axios from "axios";

const USERS_REST_API_URL = "https://conference-ostis.herokuapp.com/";
const USERS_REST_API_URL_ADD = "https://conference-ostis.herokuapp.com/add";
const USERS_REST_API_URL_EMAIL = "https://conference-ostis.herokuapp.com/email";
const USERS_REST_API_URL_EMAILS = "https://conference-ostis.herokuapp.com/email-to-group";

//https://conference-ostis.herokuapp.com

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API_URL);
  }
  addUsers(user) {
    return axios
      .post(USERS_REST_API_URL_ADD, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  deleteUsers(id) {
    return axios
      .delete(USERS_REST_API_URL, { params: { id } })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  updateUsers(user) {
    console.log(user);
    return axios
      .put(USERS_REST_API_URL, user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sendEmail(emailData) {
    return axios
      .post(USERS_REST_API_URL_EMAIL, emailData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sendEmails(emailData) {
    return axios
      .post(USERS_REST_API_URL_EMAILS, emailData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new UserService();
