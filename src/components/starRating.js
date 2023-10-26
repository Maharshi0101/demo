import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const StarRating = ({ noOfRatings }) => {
    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = useState(noOfRatings || 0);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled = require('../assets/star-filled.png')
    // Empty Star. You can also give the path from local
    const starImageCorner = require('../assets/star-unfilled.png')

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <Image
                            style={styles.starImageStyle}
                            source={
                                item <= defaultRating
                                    ? starImageFilled
                                    : starImageCorner
                            }
                        />
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <CustomRatingBar />
            </View>
        </SafeAreaView>
    );
};

export default StarRating;

const styles = StyleSheet.create({
    container: {
        marginLeft: 5,
    },
    customRatingBarStyle: {
        flexDirection: 'row',
    },
    starImageStyle: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
        margin: 1
    },
});