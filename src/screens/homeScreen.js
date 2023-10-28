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
import { configData } from '../json/configData';

const PAGE_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {

  const [isVertical, setIsVertical] = React.useState(false);
  const progressValue = useSharedValue(0);
  const banners = JSON.parse(configData)?.home_banners
  const features = JSON.parse(configData)?.home_features

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
        <TouchableOpacity onPress={() => { navigation.navigate(data?.navigate, { details: data?.items }) }} activeOpacity={0.9}>
          <View style={styles.cardItem}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: `${data?.image}`
              }}
            />
            <Text style={styles.text}>{data?.title}</Text>
          </View>
        </TouchableOpacity>
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
        data={banners}
        renderItem={({ index, item }) => <SBItem item={item} index={index} />}
      />
      {!!progressValue && (
        <Pagination length={banners.length} progressValue={progressValue} />
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

      <View style={styles.productsContainer}>
        {features?.map((item, index) => {
          return (
            <TabularCard key={index} data={item} />
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  productsContainer: {
    width: "95%",
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    marginTop: 20
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