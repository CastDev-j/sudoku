import { useEffect, Dispatch, SetStateAction } from "react";
import { shallow } from "zustand/shallow";
import { Modal, Button, Text, Title, Space, Container, Code } from "@mantine/core";
import useSudokuStore from "../sudokuStore";
import { convertGameClockToString } from "../utils";

type FinishGameModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  clockIsRunning: boolean;
  setClockIsRunning: Dispatch<SetStateAction<boolean>>;
}

const FinishGameModal = ({ isOpen, setIsOpen, clockIsRunning, setClockIsRunning }: FinishGameModalProps) => {
  const { gameClock } = useSudokuStore(state => ({
    gameClock: state.gameClock
  }), shallow);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && clockIsRunning) setClockIsRunning(false);
  }, [isOpen, clockIsRunning, setClockIsRunning]);

  return (
    <Modal opened={isOpen} onClose={handleClose} centered padding="xl">
      <Container size="90%">
        <Title order={1} size="h2">&#127881; ¡Buen Trabajo! &#127881;</Title>
        <Space h="md" />
        <Text align="left">Has resuelto el rompecabezas con un tiempo de {convertGameClockToString(gameClock)}. Después de cerrar este popup, puedes hacer clic en el botón <Code>Nuevo Juego</Code> para generar un nuevo rompecabezas.</Text>
        <Space h="xl" />
        <Button onClick={handleClose}>Cerrar</Button>
      </Container>
    </Modal>
  );
}

export default FinishGameModal;