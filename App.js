import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
   
   <View>
   <Image source={logo} style={{ width: 305, height: 159 }} /> 
   </View>
   
    <View>
      <Text>Interstellar</Text>
    </View>

<View>
      <Text>2014</Text>
      <Text>PG-13</Text>
      <Text>2h49min</Text>
      <Text>Adventure, Drame, Sci-Fi</Text>
</View>

<View>
<Image source={logo} style={{ width: 305, height: 159 }} /> 
<View>
<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores amet sint reiciendis odio autem sequi minus ducimus? Facilis neque magni beatae delectus eius ea ipsa debitis libero excepturi nihil.</Text>
<TouchableOpacity> + add to watchlist</TouchableOpacity>
</View>
</View>

<View>

  <View>
<Ionicons name="md-checkmark-circle" size={32} color="green" />
<Text>8,6/10</Text>
<Text>1.1M</Text>
</View>

<View> 
<Ionicons name="md-checkmark-circle" size={32} color="green" />
<Text>RATE THIS</Text>
</View>

<View> 
<Ionicons name="md-checkmark-circle" size={32} color="green" />
<Text>Metascore</Text>
<Text>46 critic reviews</Text>
</View>

</View>


<View>
  <Text>Top Billed Cast</Text>
  <Text>SEE ALL</Text>
</View>

<View>
  <View>
  <Image source={logo} style={{ width: 305, height: 159 }} /> 
  <Text>Matt McCon...</Text>
  <Text>Cooper</Text>
</View>

<View>  
<Image source={logo} style={{ width: 305, height: 159 }} />
<Text>Anne Hathaway</Text>
<Text>Brand</Text> 
</View>

<View>  
<Image source={logo} style={{ width: 305, height: 159 }} /> 
<Text>Jessica Chastain</Text>
<Text>Murph</Text>
</View>

<View> 
<Image source={logo} style={{ width: 305, height: 159 }} /> 
<Text>Mackenzie Foy</Text>
<Text>Murphy Cooper</Text>
</View>

</View>

<View>
<Text>Director</Text>
<Text>Christopher Nolan</Text>
</View>

<View>
<Text>Writers</Text>
<Text>Jonathan Nolan (written by) and Christopher Nolan (written by)</Text>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
