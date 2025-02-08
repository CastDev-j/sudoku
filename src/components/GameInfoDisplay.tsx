import { Dispatch, SetStateAction } from "react";
import { Button, Text } from "@mantine/core";
import { shallow } from "zustand/shallow";
import useSudokuStore from "../sudokuStore";
import { convertGameClockToString } from "../utils.ts";
import { gameInfoDisplay } from "../styles.css.ts";

type GameInfoDisplayProp = {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

const GameInfoDisplay = ({ setModalState }: GameInfoDisplayProp ) => {
  const { dificultad, relojDeJuego } = useSudokuStore(state => ({
    dificultad: state.difficulty as keyof typeof dificultsInSpanish,
    relojDeJuego: state.gameClock
  }), shallow);


  const dificultsInSpanish = {
    "easy": "Fácil",
    "medium": "Medio",
    "hard": "Difícil",
    "expert": "Experto"
  }

  return (
    <div className={gameInfoDisplay}>
      <Text>{dificultsInSpanish[dificultad]}</Text>
      <Button variant="light" color="#228be6" compact onClick={() => setModalState(true)}>Nuevo Juego</Button>
      <Text>
        {convertGameClockToString(relojDeJuego)}
      </Text>
    </div>
  );
}

export default GameInfoDisplay;