import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, FlatList, Text, Image, TouchableOpacity } from 'react-native';
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
  [{
    id: 1,
    title: "Products",
    image: require('../assets/products.png'),
    navigate: 'Products'
  },
  {
    id: 2,
    title: "My Insurance",
    image: require('../assets/healthcare.png'),
    navigate: 'My Insurance'
  }],
  [{
    id: 3,
    title: "Settings",
    image: require('../assets/settings.png'),
    navigate: 'Settings'
  },
  {
    id: 4,
    title: "My Network",
    image: require('../assets/my-network.png'),
    navigate: 'My Network'
  }]
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


export default function HomeScreen({ navigation }) {

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

  const TabularCard = ({ data }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'space-between' }}>
        {data.map((item) => {
          return (
            <TouchableOpacity onPress={() => { navigation.navigate(item.navigate) }} activeOpacity={0.9}>
              <View style={styles.cardItem}>
                <Image
                  style={styles.tinyLogo}
                  source={item.image}
                />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )
        })
        }
      </View>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      <View style={{ width: '95%', alignSelf: 'center' }}>

        <FormButton
          modeValue='contained'
          buttonColor={'#1279BE'}
          contentStyle={{
            width: '100%'
          }}
          labelStyle={{
            fontSize: 20,
          }}
          title='Do More With Bupa'
          onPress={() => {
            // TODO
          }}
        />
      </View>

      <View style={{ width: '95%', marginTop: 20, alignSelf: 'center' }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          renderItem={({ item }) => (
            <TabularCard data={item} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
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
  tinyLogo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardItem: {
    height: 150,
    width: PAGE_WIDTH / 2.4,
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