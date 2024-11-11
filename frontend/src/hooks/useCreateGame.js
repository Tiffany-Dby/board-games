import { APP_ROUTES } from "../constants/routes";

const useCreateGame = () => {
  const createGame = (body) => {
    return fetch(`${APP_ROUTES.API_URL}${APP_ROUTES.BLACKJACK}/start_game`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error.message));
  };

  return { createGame };
};

export default useCreateGame;
