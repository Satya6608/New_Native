import React,{useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
 
  const textRef = useRef()
  useEffect(() => {
    return () => {
      textRef.current.focus()
    };
  }, []) 

  const [firstVar,setFirstVar] = useState('')
  return (
    <View style={styles.container}>
      <Text>Hello World {firstVar}</Text>
      <TextInput
      ref={ref=>{textRef.current=ref}}
      value={firstVar}
      onChangeText={(value)=>{
        setFirstVar(value)
      }}
      style={styles.inputField}
      />
      <Button title='Click Me!'/>
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
  inputField:{
    width:100,
    borderColor:'#000',
    borderWidth: 1
  }
});

export default App;
