import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  table: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    alignItems: 'center',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  storeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Helvetica',
    marginLeft: 40,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 16,
    marginBottom: 5,
  },
  storeMobile: {
    fontSize: 16,
    marginBottom: 5,
  },

  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 200,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 8,
    marginBottom: 5,
  },
  image: {
    width: 60,
    height: 60,
    display: 'flex',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    // marginVertical: 5,
  },
  customerContainer: {
    flexDirection: 'row',
    // marginTop: 20,
    backgroundColor: '#c7ecee',
    // padding: 10,
    // borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customer1: {
    // marginLeft: 20,
    flexDirection: 'column',
  },
  customer2: {
    // marginRight: 20,
    flexDirection: 'column',
  },
  customer3: {
    fontSize: 15,
    padding: 3,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    fontSize: 10,
  },
  tableColHeader: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    backgroundColor: '#f2f2f2',
    padding: 3,
    fontWeight: 'bold',
  },
  tableProductin: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',

    padding: 3,
    fontWeight: 'bold',
  },
  tableProductout: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',

    padding: 3,
    fontWeight: 'bold',
  },
  tableCol: {
    width: '33.33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 3,
  },
  footer: {
    display: 'table',
    borderColor: 'blue',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
  },
});

const SingledayReport = () => {
  //   const storeName = "Kumar";
  //   const storeAddress = "Bangalore";
  //   const storeMobile = "098765432";
  // const qrCodeValue = `${storeName}\n${storeAddress}\n${storeMobile}`;
  // const qrCodeSize = 80;
  // const qrcodeUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${qrCodeValue}&chs=${qrCodeSize}x${qrCodeSize}&choe=UTF-8&chld=L|2`;

  return (
    <Document>
      <Page size="A2" style={styles.page}>
        <View style={styles.section}>
          {/* <Text style={styles.title}>Full Sheet Report</Text> */}

          <View style={styles.storeContainer}>
            <Image src="fullsheetcan.png" style={styles.image} />
            <Text style={styles.customerheading}>
              Sales Report From October 2022 To January 2023
            </Text>
            <View style={styles.storeInfo}></View>
          </View>
          <View style={styles.line} />
          <View style={styles.customerContainer}></View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Delivery Time</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Customer Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Mobile Number</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text> Delivery By</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Collected Amount</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Group Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Amount Due</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Item type</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Item In</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Item Out</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Item Balance</Text>
              </View>
            </View>

            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>-</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>-</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>-</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>200</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>-</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>-</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1:15 PM</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>1234567890</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Water Supply</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>500</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> Default</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 300</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> pet</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 1.0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text> 0.0</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default SingledayReport;
