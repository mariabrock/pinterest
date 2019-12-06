import axios from 'axios';
import apiKeys from '../apiKeys.json';
import 'firebase/auth';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoardsByUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demBoards = response.data;
      const boards = [];
      Object.keys(demBoards).forEach((fbId) => {
        demBoards[fbId].id = fbId;
        boards.push(demBoards[fbId]);
      });
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const addNewBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);

const deleteABoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

export default { getBoardsByUser, deleteABoard, addNewBoard };
