import { APP_ROUTES } from "@/constants/routes";

const usePlayGame = () => {
  const getGame = (gameId) => {
    return fetch(`${APP_ROUTES.API_URL}${APP_ROUTES.BLACKJACK}/game/${gameId}`)
      .then((response) => response.json())
      .catch((error) => console.error(error.message));
  };

  const playerRoll = (body) => {
    return fetch(
      `${APP_ROUTES.API_URL}${APP_ROUTES.BLACKJACK}/player_roll_dice`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => console.error(error.message));
  };

  const playerEndTurn = (body) => {
    return fetch(
      `${APP_ROUTES.API_URL}${APP_ROUTES.BLACKJACK}/player_end_turn`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .catch((error) => console.error(error.message));
  };

  const getWinners = (gameId) => {
    return fetch(
      `${APP_ROUTES.API_URL}${APP_ROUTES.BLACKJACK}/game/${gameId}/winners`
    )
      .then((response) => response.json())
      .catch((error) => console.error(error.message));
  };

  return { getGame, playerRoll, playerEndTurn, getWinners };
};

export default usePlayGame;
