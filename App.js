import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground,TextInput,ScrollView } from 'react-native';




const Cat = (props)=>{
	const [isHungry,setIsHungry]= useState(true);
	return(
	  <View>
		<Text>
		I am {props.name}, and I am {isHungry?"Starving":"Satisfied"}!
		</Text>
		<Button
		onPress={()=>{
			setIsHungry(false);
		}}
		disabled={!isHungry}
		title={isHungry?"Feed Me":"Known your place servant"}
		/>

          </View>

	);
}

const PizzaTranslator = ()=> {
	const [text,setText] = useState('');

	return(
	<View style= {{padding: 10}}>
		<TextInput
			style={{height: 40}}
			placeholder = "Input Text to Translate"
			onChangeText = {newText =>setText(newText)}
			defaultValue = {text}
		/>
		<Text style={{padding: 10,fontSize:42}}>
			{text.split(' ').map((word)=>word&&'Pizza').join(' ')}
		</Text>
	</View>
	);

}

const Menu=()=>{
	return(
	<ScrollView>
		<Text style={{fontSize:60}}>
			Menu Items:
		</Text>

		<Text style={{fontSize:40}}>
			1)Tuna salad
		</Text>

		<Text style={{fontSize:40}}>	
			2)Caviar
		</Text>

		<Text style={{fontColor:'red',fontSize:40}}>
			3)Blower fish
		</Text>
		
		<Text style={{fontSize:40}}>
                        4)Shark Fin Soup
                </Text>

		<Text style={{fontSize:40}}>    
                        5)Turtle Soup
                </Text>

		<Text style={{fontSize:40}}>    
                        6)Gumbo
                </Text>
		<PizzaTranslator />
	</ScrollView>
	);
	
}




const Cafe = () => {
	return(
	<>
	  <Cat name="Diablo"/>
          <Cat name="Beezzeblub"/>
	  <Menu />	
	  <PizzaTranslator/>
	</>
	);



}



export default Cafe;





























