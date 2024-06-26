import { StyleSheet, Text, View } from "react-native";

function ExcerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseColor}>
        {item.muscle.toUpperCase()} | {item.muscle.toUpperCase()}
      </Text>
    </View>
  );
}

export default ExcerciseListItem;

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseColor: {
    color: "dimgray",
  },
});
