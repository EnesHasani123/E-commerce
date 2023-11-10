import { View, Text, Image, TouchableOpacity } from "react-native";

import { IconButton, TextButton } from "../../components";
import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  constants,
  images,
} from "../../constants";
import { useState } from "react";
import { LoadFonts } from "../../constants/theme";

const index = ({ navigation }) => {
  const [selectOption, setSelectedOption] = useState(
    constants.scan_product_option.camera
  );

  LoadFonts();

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: SIZES.padding * 2,
          paddingBottom: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          backgroundColor: COLORS.light,
          zIndex: 1,
        }}
      >
        {/* Close */}
        <IconButton icon={icons.close} onPress={() => navigation.goBack()} />

        {/* Title */}
        <Text
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            fontFamily: "Poppins-Bold",
            ...FONTS.h2,
          }}
        >
          {selectOption == constants.scan_product_option.camera
            ? "Scan Camera"
            : "Scan QR Code"}
        </Text>

        {/* Add. options */}
        <IconButton icon={icons.flash} iconStyle={{ width: 25, height: 25 }} />
        <IconButton
          icons={icons.question_mark}
          containerStyle={{ marginLeft: SIZES.base }}
          iconStyle={{
            width: 25,
            height: 25,
          }}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 90,
          paddingTop: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          backgroundColor: COLORS.light,
        }}
      >
        <TextButton
          label="Scan QR Code"
          contentContainerStyle={{
            flex: 1,
            height: 55,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectOption == constants.scan_product_option.qr
                ? COLORS.primary
                : COLORS.light,
          }}
          labelStyle={{
            fontFamily: "Poppins-SemiBold",
            ...FONTS.h3,
            color:
              selectOption == constants.scan_product_option.qr
                ? COLORS.secondary
                : COLORS.primary,
          }}
          onPress={() => setSelectedOption(constants.scan_product_option.qr)}
        />

        <TextButton
          label="Scan Camera"
          contentContainerStyle={{
            flex: 1,
            height: 55,
            borderRadius: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor:
              selectOption == constants.scan_product_option.camera
                ? COLORS.primary
                : COLORS.light,
          }}
          labelStyle={{
            fontFamily: "Poppins-SemiBold",
            ...FONTS.h3,
            color:
              selectOption == constants.scan_product_option.camera
                ? COLORS.secondary
                : COLORS.primary,
          }}
          onPress={() =>
            setSelectedOption(constants.scan_product_option.camera)
          }
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      {renderHeader()}

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default index;
