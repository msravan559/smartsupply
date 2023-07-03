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
    fontSize: 5,
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

const FullSheetReport = () => {
  const storeName = 'Kumar';
  const storeAddress = 'Bangalore';
  const storeMobile = '098765432';
  // const qrCodeValue = `${storeName}\n${storeAddress}\n${storeMobile}`;
  // const qrCodeSize = 80;
  // const qrcodeUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${qrCodeValue}&chs=${qrCodeSize}x${qrCodeSize}&choe=UTF-8&chld=L|2`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* <Text style={styles.title}>Full Sheet Report</Text> */}

          <View style={styles.storeContainer}>
            <Image src="fullsheetcan.png" style={styles.image} />
            <View style={styles.storeInfo}>
              <Text style={styles.storeName}>Store Name: {storeName}</Text>
              <Text style={styles.storeAddress}>
                Store Address: {storeAddress}
              </Text>
              <Text style={styles.storeMobile}>
                Store Mobile: {storeMobile}
              </Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.customerContainer}>
            <View style={styles.customer1}>
              <Text style={styles.customer3}>Customer Name: TreoSoft IT</Text>
              <Text style={styles.customer3}>
                Address: Tin Factory, Bangalore
              </Text>
              <Text style={styles.customer3}>Deposit Amount: 100</Text>
            </View>
            <View style={styles.customer2}>
              <Text style={styles.customer3}>Mobile Number: 123456789</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Date</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Product In</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Product Out</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Balance</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Sign</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>5</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>5</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text>prasanna</Text>
              </View>
            </View>
            <View style={styles.footer}>
              <Text>Total Deliver : 56</Text>
              <Text>Rate : 3400</Text>
              <Text>Amount : 3400</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default FullSheetReport;
