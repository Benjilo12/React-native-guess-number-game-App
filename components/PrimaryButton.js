import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function presshandler() {
    console.log("pressed");
  }
  return (
    <View style={styles.buttonOutter}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.containerInner, styles.pressed]
            : styles.containerInner
        }
        onPress={presshandler}
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#b23c77ff",
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
