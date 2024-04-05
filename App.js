import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";

export default function App() {
  const [task, setTask] = useState(""); // 新しいタスクまたは編集中のタスクのテキスト
  const [tasks, setTasks] = useState([]); // タスクのリスト
  const [isEditing, setIsEditing] = useState(null); // 現在編集中のタスクのID

  // タスクの追加または編集
  const handleSaveTask = () => {
    if (!task.trim()) return;
    if (isEditing) {
      // タスクを編集
      setTasks(
        tasks.map((t) => (t.id === isEditing ? { ...t, text: task } : t))
      );
      setIsEditing(null);
    } else {
      // 新しいタスクを追加
      const newTask = { id: Date.now().toString(), text: task };
      setTasks([...tasks, newTask]);
    }
    setTask("");
  };

  // タスクの削除
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // 編集モードの開始
  const handleEditTask = (task) => {
    setTask(task.text);
    setIsEditing(task.id);
  };

  // タスク項目のレンダリング
  const renderTask = ({ item }) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditTask(item)}
        >
          <Icon name="edit" type="material" color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTask(item.id)}
        >
          <Icon name="delete" type="material" color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoアプリ</Text>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>{isEditing ? "更新" : "追加"}</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccceee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
  },

  deleteButton: {
    marginLeft: 4,
  },
  saveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderRadius: 5,
  },
  taskText: {
    maxWidth: "80%",
  },
  deleteButtonText: {
    color: "#dc3545",
  },
});
