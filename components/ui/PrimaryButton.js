import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.containerInner, styles.pressed]
            : styles.containerInner
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  containerInner: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",

    paddingVertical: 4,
  },
  buttonOutter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  //IOS
  pressed: {
    opacity: 0.75,
  },
});
