import { View } from "react-native";

import { TextButton } from "../../components";

const index = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextButton
        label="Scan"
        onPress={() => {
          navigation.navigate("ScanProduct");
        }}
      />
    </View>
  );
};

export default index;
