import { getAPI } from "../../../utils/axios-api";

const token = localStorage.getItem("access_token");
// const quiz_slug = $this.params.slug
console.log(token);


// export const saveAnswer = (context, userresponse) => {
//   return new Promise((resolve, reject) => {
//     getAPI
//       .put(`/save-answer/`, {
//         headers: { Authorization: `Bearer ${token}` },
//         quizTaker: userresponse.quizTaker,
//         question: userresponse.question,
//         answer: userresponse.answer
//       })
//       .then(({status}) => {
//         console.log('testing from line:18')
//         if (status == 201) {
//           resolve(status);
//         }
//       })
//       .catch((err) => {
//         reject(err);
//         console.log("Check data not reading ref: actions.js >> course");
//       });
//   })
// };

export const getPracticeTest = ({ commit }, slug) => {
  getAPI
    .get(`/quizzes/${slug}/`, {
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

