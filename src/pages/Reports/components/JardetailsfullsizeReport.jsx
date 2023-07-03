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
  customerheading: {
    alignItems: 'center',
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

const JardetailsfullsizeReport = () => {
  // const storeName = 'Kumar';
  // const storeAddress = 'Bangalore';
  // const storeMobile = '098765432';
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
              February 2023 Pet, Cool Report
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.customerContainer}></View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>S.NO</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Customer Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>1 Mar</Text>
                <View style={styles.tableRow}>
                  <Text>In</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text>Out</Text>
                </View>
              </View>
              <View style={styles.tableColHeader}>
                <Text>2 Mar</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>3 Mar </Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>4 Mar </Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>5 Mar</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>6 Mar </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Pramod</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Promodh</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Mahesh</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Sundar</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Deepthi</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Nagendra</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Adarsha</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Manoj</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Vivek</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Eswar</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Anwar</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Kiran</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Subhash</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Krishna</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Venkata</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Uma</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>Mar 31 2023</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>Divya</Text>
              </View>

              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>N/A</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default JardetailsfullsizeReport;
