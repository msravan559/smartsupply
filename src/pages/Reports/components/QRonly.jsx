import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  //   empty: {
  //     marginTop: 30,
  //   },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  head: {
    marginLeft: 230,
    alignItems: "center",
  },
  //image
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.4, // set the opacity of the image
    // transform: "rotate(-50deg)",
  },
  background1: {
    position: "absolute",
    width: "100%",
    height: 120,
    opacity: 0.7, // set the opacity of the image
    marginTop: 20,
  },
  totalpart: {
    flexDirection: "row",
    width: 550,
    minHeight: 100,
    maxHeight: 180,
  },
  store: {
    marginLeft: 5,
    marginTop: 5,
    // backgroundColor: "blue",
    maxHeight: 240,
    width: 200,
  },

  storename: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  storenumber: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 4,
  },
  customer: {
    marginTop: 8,
  },

  customername: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  customerphone: {
    marginLeft: 10,
    fontSize: 15,
  },
  Address: {
    marginLeft: 10,
    fontSize: 8,
  },
  qrcode: {
    marginLeft: 60,
    height: 80,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "orange",
  },
});
const QRonly = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src="qrback.png" style={styles.background} />
          <View style={styles.empty}>
            <Text style={styles.head}>QR Report</Text>
          </View>
          <View style={styles.totalpart}>
            <View style={styles.store}>
              <Text style={styles.storename}>Store Name ,</Text>
              <Text style={styles.storenumber}>
                +91 1234567890 , +91 9092267153
              </Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.customername}>Customer Name: Kumar</Text>
              <Text style={styles.customerphone}>Phone : 7652345671</Text>

              <Text style={styles.customername}>Month</Text>
            </View>

            <View style={styles.qrcode}>
              <Image src="qrcode.png" />
            </View>
          </View>
          <View style={styles.line} />

          <View style={styles.totalpart}>
            <View style={styles.store}>
              <Text style={styles.storename}>Adharsha Water Supply ,</Text>
              <Text style={styles.storenumber}>
                +91 2843678223 , +91 8748373737
              </Text>
            </View>
            <View style={styles.customer}>
              <Text style={styles.customername}>Customer Name: Monika</Text>
              <Text style={styles.customerphone}>Phone : 2932874326</Text>

              <Text style={styles.customername}>March</Text>
            </View>

            <View style={styles.qrcode}>
              <Image src="qrcode.png" />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default QRonly;
