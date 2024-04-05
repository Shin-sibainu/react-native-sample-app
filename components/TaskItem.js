import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{task.text}</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onEdit}>
          <Icon name="edit" type="material" color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="delete" type="material" color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  taskText: {
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: "row",
  },
});

export default TaskItem;
