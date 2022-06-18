import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,ImageBackground,TextInput,ScrollView,FlatList,SectionList } from 'react-native';


/*
 * Cat class? function? in Who Know is JavaScript everything is kinda muddled
 * together.
*/
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

/*
 *Input Text Example. this take input from user and translates it to Pizza
*/
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


/*
 *ScrollView Example using a Menu 
 */
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

		<Text style={{fontSize:40}}>
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


/*
 * FlatList example 
*/
const FlatListBasics = () => {
	return(
		<View style={styles.container}>
		  <FlatList
                	data = {[   
				{key:'Chandra'},
				{key:'Long'},
				{key:'Hussain'},
				{key:'Maria'},
				{key:'Servants'},
			]}
			renderItem= {({item}) => <Text style ={styles.item}>{item.key}</Text>}
		  />
		</View>
	);



}

/*
 *SectionList Example
*/
const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'C', data: ['Chandra']},
            {title: 'H', data: ['Hussain']},
	    {title: 'L', data: ['Long']},
	    {title: 'M', data: ['Maria']},	  
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
}




/*
 *This is the main class/function that is being exported out at the end
 *meaning that you can import the cafe class in another file.
*/

const Cafe = () => {
	return(
	<>
	  <FlatListBasics />
    	  <SectionListBasics />	
	  <Cat name="Diablo" />
          <Cat name="Beezzeblub" />
	  <Menu />	
	</>
	);



}

/*
 *Below here are style/css rules for FlatList and SectionList
 */
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default Cafe;





























