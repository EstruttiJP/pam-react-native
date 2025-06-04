import { useState } from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Player = "X" | "O" | null;
type Board = Player[];

export default function index() {
  const [board, setBoard] = useState<Board>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | "draw">(null);

  const handlePress = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
  };

  const cell = (index: number) => {
    return (
      <TouchableOpacity
        style={styles.square}
        onPress={() => handlePress(index)}
        >
        <Text style={styles.symbol}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>;
      <Text style={styles.status}>Vencedor</Text>;
      <View style={styles.board}>
        <View style={styles.row}>
          {cell(0)}
          {cell(1)}
          {cell(2)}
        </View>
        <View style={styles.row}>
          {cell(3)}
          {cell(4)}
          {cell(5)}
        </View>
        <View style={styles.row}>
          {cell(6)}
          {cell(7)}
          {cell(8)}
        </View>
      </View>
      <TouchableOpacity style={styles.resetButton}>
        <Text style={styles.resetText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDFBEE",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#015551",
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  board: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "#015551",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#57B4BA",
    borderRadius: 5,
  },
  symbol: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FDFBEE",
  },
  resetButton: {
    padding: 10,
    backgroundColor: "#57B4BA",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#015551",
  },
  resetText: {
    color: "#FDFBEE",
    fontSize: 16,
    fontWeight: "bold",
  },
});
