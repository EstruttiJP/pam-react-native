import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function index() {
  const cell = () => {
    return <TouchableOpacity style={styles.square}>
            <Text style={styles.symbol}>X</Text>
          </TouchableOpacity>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>;
      <Text style={styles.status}>Vencedor</Text>;

      <View style={styles.board}>
        <View style={styles.row}>
          {cell ()}
          {cell ()}
          {cell ()}
        </View>
        <View style={styles.row}>
          {cell ()}
          {cell ()}
          {cell ()}
        </View>
        <View style={styles.row}>
          {cell ()}
          {cell ()}
          {cell ()}
        </View>
      </View>

    <TouchableOpacity style={styles.resetButton}>
      <Text style={styles.resetText}>Reiniciar Jogo</Text>
    </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFBEE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#015551',
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
  },
  board: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#015551',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#57B4BA',
    borderRadius: 5,
  },
  symbol: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FDFBEE',
  },
  resetButton: {
    padding: 10,
    backgroundColor: '#57B4BA',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#015551',
  },
  resetText: {
    color: '#FDFBEE',
    fontSize: 16,
    fontWeight: 'bold',
  },
})