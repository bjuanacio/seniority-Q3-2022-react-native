import { get, post, del } from '../util/http-client'
import { Player } from '../models/player.model';

const idAuthor = 38;
const url = 'https://api-exercise-q3.herokuapp.com/player';

const savePlayer = (player: Player) => {
    return post(url, {
        ...player,
        idAuthor
    })
}

const getPlayers = () => {
    return get(url)
}

const removePlayer = (id: number | undefined) => {
    return del(`${url}/${id}`);
}

export { getPlayers, removePlayer, savePlayer }