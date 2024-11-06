import { APP_ROUTES } from "../constants/routes";

const useCreateGame = () => {
  const createGame = (body) => {
    return fetch(`${APP_ROUTES.API_URL}/blackjack/start_game`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.error(error.message));
  };

  return { createGame };
};

export default useCreateGame;
