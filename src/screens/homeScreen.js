import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, FlatList, Text, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FormButton from '../components/formButton';
import Pagination from '../components/pagination';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SBItem } from '../components/SBItem';
import { useAuth } from '../contexts/auth';

const PAGE_WIDTH = Dimensions.get('window').width;

const data = [
  {
    id: 1,
    title: "Products",
    image: require('../assets/products.png')
  },
  {
    id: 2,
    title: "My Insurance",
    image: require('../assets/healthcare.png')
  },
  {
    id: 3,
    title: "Settings",
    image: require('../assets/settings.png')
  },
  {
    id: 4,
    title: "My Network",
    image: require('../assets/my-network.png')
  }
];


const items = [...new Array(6).keys()]

const colors = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];


export default function HomeScreen() {

  const [isVertical, setIsVertical] = React.useState(false);
  const progressValue = useSharedValue(0);
  const auth = useAuth();

  const baseOptions = isVertical
    ? ({
      vertical: true,
      width: PAGE_WIDTH,
      height: PAGE_WIDTH * 0.6,
    })
    : ({
      vertical: false,
      width: PAGE_WIDTH,
      height: PAGE_WIDTH * 0.6,
    });


  const signOut = () => {
    auth.signOut();
  };

  const Card = ({ data }) => {
    return (
      <View style={{ margin: 10 }}>
        <View style={styles.cardItem}>
          <Image
            style={styles.tinyLogo}
            source={data.image}
          />
          <Text style={styles.text}>{data.title}</Text>
        </View>
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f5f5f5' }}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled={true}
        snapEnabled={true}
        autoPlay={true}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={colors}
        renderItem={({ index }) => <SBItem index={index} />}
      />
      {!!progressValue && (
        <Pagination length={items.length} progressValue={progressValue} />
      )}
      <View style={{ marginTop: 25 }}>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Card data={item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <FormButton modeValue='contained' title='Logout'
        onPress={() => {
          // TODO
          signOut()
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  text: {
    marginTop: 5,
    fontSize: 15
  },
  card: {
    height: 50,
    width: 100,
    backgroundColor: '#f18484',
    // justifyContent: 'center', //Centered vertically
    // alignItems: 'center', // Centered horizontally
  },
  tinyLogo: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
  cardItem: {
    height: 120,
    width: 150,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});