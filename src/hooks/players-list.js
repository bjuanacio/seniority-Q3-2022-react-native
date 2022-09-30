import { useState } from 'react'
import axios from "axios";
import { BASE_URL, AUTHOR, config } from '../helpers/'

export const usePlayersList = () => {
  const [players, setPlayers] = useState([])
  const getPlayers = () => {
    axios.get(`${BASE_URL}?author=${AUTHOR}`, config)
      .then(response => {
        const { data } = response
        setPlayers(data);
    })
  }
  return { players, getPlayers}
}