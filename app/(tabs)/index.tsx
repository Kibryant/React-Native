import { StyleSheet, TouchableOpacity } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import { useState } from 'react'

export default function TabOneScreen() {
  const [number, setNumber] = useState(0)
  return (
    <View className="bg-emerald-500" style={styles.container}>
      <Text className="text-3xl"> djnfgioadnsfgnoindgiod</Text>
      <Text> {number} </Text>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <TouchableOpacity
        onPress={() => setNumber(number + 1)}
        style={styles.button}
      >
        <Text>Click here</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    padding: 10,
    backgroundColor: '#7c3aed',
    borderRadius: 8,
  },
})
