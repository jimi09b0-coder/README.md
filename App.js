import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { jobs } from "./jobs";

export default function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const text =
      `${job.title} ${job.country} ${job.city} ${job.category}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  const openJob = (job) => {
    setSelectedJob(job);
    setPage("details");
  };

  const renderPage = () => {
    if (page === "jobs") {
      return (
        <View style={styles.page}>
          <Text style={styles.title}>💼 البحث عن عمل</Text>

          <TextInput
            style={styles.search}
            placeholder="ابحث عن وظيفة، دولة أو مدينة..."
            value={search}
            onChangeText={setSearch}
          />

          {filteredJobs.map((job) => (
            <TouchableOpacity
              key={job.id}
              style={styles.jobCard}
              onPress={() => openJob(job)}
            >
              <Text style={styles.jobTitle}>{job.title}</Text>

              <Text style={styles.jobInfo}>
                🌍 {job.country} - {job.city}
              </Text>

              <Text style={styles.jobInfo}>
                💼 {job.category}
              </Text>

              <Text style={styles.jobInfo}>
                📋 {job.contract}
              </Text>

              <Text style={styles.more}>
                عرض التفاصيل ›
              </Text>
            </TouchableOpacity>
          ))}

          {filteredJobs.length === 0 && (
            <Text style={styles.empty}>
              لم نجد وظائف مطابقة لبحثك.
            </Text>
          )}
        </View>
      );
    }

    if (page === "details" && selectedJob) {
      return (
        <View style={styles.page}>
          <TouchableOpacity onPress={() => setPage("jobs")}>
            <Text style={styles.back}>‹ العودة للوظائف</Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            {selectedJob.title}
          </Text>

          <Text style={styles.info}>
            🌍 {selectedJob.country}
          </Text>

          <Text style={styles.info}>
            📍 {selectedJob.city}
          </Text>

          <Text style={styles.info}>
            💼 {selectedJob.category}
          </Text>

          <Text style={styles.info}>
            📋 {selectedJob.contract}
          </Text>

          <Text style={styles.info}>
            💰 {selectedJob.salary}
          </Text>

          <Text style={styles.description}>
            {selectedJob.description}
          </Text>

          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => alert("سيتم ربط زر التقديم بصفحة التقديم لاحقًا.")}
          >
            <Text style={styles.applyText}>
              📩 التقديم المباشر
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (page === "travel") {
      return (
        <View style={styles.page}>
          <Text style={styles.title}>✈️ السفر</Text>

          <Text style={styles.description}>
            معلومات السفر والتأشيرات والمواعيد.
          </Text>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>
              🇧🇪 السفر إلى بلجيكا
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>
              🇫🇷 السفر إلى فرنسا
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>
              🇮🇹 السفر إلى إيطاليا
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (page === "cv") {
      return (
        <View style={styles.page}>
          <Text style={styles.title}>📄 السيرة الذاتية</Text>

          <Text style={styles.description}>
            أنشئ سيرتك الذاتية واحفظها لاستخدامها عند التقديم على الوظائف.
          </Text>

          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.mainButtonText}>
              إنشاء CV
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (page === "profile") {
      return (
        <View style={styles.page}>
          <Text style={styles.title}>👤 حسابي</Text>

          <Text style={styles.description}>
            الملف الشخصي وإعدادات الحساب.
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.page}>
        <Text style={styles.logo}>🌍 Work Travel</Text>

        <Text style={styles.subtitle}>
          العمل والسفر حول العالم
        </Text>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => setPage("jobs")}
        >
          <Text style={styles.mainButtonText}>
            💼 ابحث عن عمل
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => setPage("travel")}
        >
          <Text style={styles.secondaryButtonText}>
            ✈️ معلومات السفر
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {renderPage()}
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setPage("home")}>
          <Text style={styles.nav}>🏠{"\n"}الرئيسية</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("jobs")}>
          <Text style={styles.nav}>💼{"\n"}العمل</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("travel")}>
          <Text style={styles.nav}>✈️{"\n"}السفر</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("cv")}>
          <Text style={styles.nav}>📄{"\n"}CV</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("profile")}>
          <Text style={styles.nav}>👤{"\n"}حسابي</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  content: {
    flexGrow: 1,
  },

  page: {
    padding: 24,
    minHeight: 650,
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
    marginBottom: 50,
  },

  search: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  jobCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  jobInfo: {
    fontSize: 16,
    marginBottom: 6,
  },

  more: {
    color: "#1565c0",
    fontWeight: "bold",
    marginTop: 10,
  },

  empty: {
    textAlign: "center",
    fontSize: 17,
    marginTop: 30,
  },

  back: {
    color: "#1565c0",
    fontSize: 17,
    marginBottom: 25,
  },

  info: {
    fontSize: 18,
    marginBottom: 15,
  },

  description: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 25,
  },

  mainButton: {
    backgroundColor: "#1565c0",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
  },

  mainButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  secondaryButton: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1565c0",
  },

  secondaryButtonText: {
    color: "#1565c0",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  applyButton: {
    backgroundColor: "#168a45",
    padding: 18,
    borderRadius: 14,
    marginTop: 25,
  },

  applyText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 14,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  nav: {
    textAlign: "center",
    fontSize: 12,
  },
});
