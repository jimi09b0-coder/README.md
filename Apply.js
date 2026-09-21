import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Apply({ job, onBack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitApplication = () => {
    if (!name || !email || !phone) {
      Alert.alert(
        "بيانات ناقصة",
        "يرجى إدخال الاسم والبريد الإلكتروني ورقم الهاتف."
      );
      return;
    }

    Alert.alert(
      "تم إرسال الطلب",
      "سيتم حفظ طلب التقديم وربطه بالوظيفة."
    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>‹ العودة</Text>
      </TouchableOpacity>

      <Text style={styles.title}>📩 التقديم على الوظيفة</Text>

      <Text style={styles.job}>
        {job?.title}
      </Text>

      <Text style={styles.location}>
        🌍 {job?.country} - {job?.city}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="الاسم الكامل"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="رقم الهاتف"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        style={styles.cvButton}
      >
        <Text style={styles.cvText}>
          📄 اختيار السيرة الذاتية
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submit}
        onPress={submitApplication}
      >
        <Text style={styles.submitText}>
          إرسال طلب التقديم
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f7fb",
  },

  back: {
    color: "#1565c0",
    fontSize: 17,
    marginBottom: 25,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
  },

  job: {
    fontSize: 20,
    fontWeight: "bold",
  },

  location: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },

  cvButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1565c0",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },

  cvText: {
    textAlign: "center",
    color: "#1565c0",
    fontWeight: "bold",
  },

  submit: {
    backgroundColor: "#168a45",
    padding: 18,
    borderRadius: 12,
  },

  submitText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
