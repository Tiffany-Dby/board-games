import BaseSelect from "@/components/BaseSelect/BaseSelect";
import { useState } from "react";
import "./GameBoard.scss";
import { useLocation } from "react-router-dom";
import BaseTable from "@/components/Table/Table";

const GameBoard = () => {
  const location = useLocation();
  const gameData = location.state;

  const diceOpts = [
    { label: "No dice", value: "0" },
    { label: "1 dice", value: "1" },
    { label: "2 dices", value: "2" },
    { label: "3 dices", value: "3" },
  ];
  const [diceValue, setDiceValue] = useState(diceOpts[0].value);

  const fields = ["ID", "Name", "Score"];

  return (
    <>
      <h2>{gameData.name}</h2>
      <div className="game-board__wrapper">
        <BaseSelect
          id="dice-amount"
          label="Choose the number of dice to roll"
          value={diceValue}
          onChange={(value) => setDiceValue(value)}
          options={diceOpts}
        />
        <BaseTable fields={fields} data={gameData.players} />
      </div>
    </>
  );
};

export default GameBoard;
