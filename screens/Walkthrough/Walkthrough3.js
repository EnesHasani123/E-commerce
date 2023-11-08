import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { useDynamicAnimation, MotiImage } from "moti";

import { SIZES, images } from "../../constants";

const Walkthrough3 = ({ animate }) => {
  //Moti initial position
  const motiImage1 = useDynamicAnimation(() => ({
    top: "55%",
    left: "35%",
  }));

  const motiImage2 = useDynamicAnimation(() => ({
    top: "40%",
    left: "30%",
  }));

  const motiImage3 = useDynamicAnimation(() => ({
    top: "50%",
    left: "50%",
  }));

  const motiImage4 = useDynamicAnimation(() => ({
    top: "50%",
    left: "50%",
  }));

  React.useEffect(() => {
    if (animate) {
      motiImage1.animateTo({
        top: "25%",
        left: "15%",
      });

      motiImage2.animateTo({
        top: "60%",
        left: "50%",
      });

      motiImage3.animateTo({
        top: "35%",
        left: "60%",
      });

      motiImage4.animateTo({
        top: "50%",
        left: "10%",
      });
    }
  }, [animate]);

  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
      }}
    >
      <MotiImage
        state={motiImage1}
        source={images.walkthrough_01_01}
        style={styles.image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_01_02}
        style={styles.image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_03_01}
        style={styles.image}
      />

      <MotiImage
        state={motiImage4}
        source={images.walkthrough_03_02}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 150,
    height: 110,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});

export default Walkthrough3;
