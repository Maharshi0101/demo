import React from "react";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { SBImageItem } from "./SBImageItem";
import { SBTextItem } from "./SBTextItem";


export const SBItem = (props) => {
  const { style, index, pretty, testID, ...animatedViewProps } = props;
  const [isPretty, setIsPretty] = React.useState(true);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        {isPretty
          ? (
            <SBImageItem style={style} index={index} showIndex={typeof index === "number"} />
          )
          : (
            <SBTextItem style={style} index={index} />
          )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};