import { getAPI } from "../../../utils/axios-api";

const token = localStorage.getItem("access_token");

console.log(token);
export const getPracticeTest = ({ commit }) => {
  getAPI
    .get("/quizzes/business-analysis/", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      commit("GET_PRACTICE_TEST", response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
      console.log("Check data not reading ref: actions.js >> course");
    });
};
