import { Text, TouchableOpacity, View } from "react-native";


export default function index() {
  const name = "ALan";

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFAAAA' }}>
      <Text>Jogo da Velha</Text>;
      <Text>Vencedor</Text>;

      <View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}