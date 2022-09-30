import axios from 'axios';
import {BASE_URL} from '../helpers';

export const usePlayerDelete = () => {
  const deletePlayer = (id) => {
    axios.delete(`${BASE_URL}${id}`).then(res => console.log('Se eliminó correctamente'));
  };
  return {deletePlayer};
};
