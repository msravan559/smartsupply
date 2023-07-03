import React from "react";
import {
  Page,
  Document,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { add } from "lodash";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: "red",
    alignItems: "center",
  },
  bill: {
    marginLeft: 200,
    textDecoration: "underline",
  },
  store: {
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  storeDetails: {
    flex: 1,
    marginLeft: 10,
  },
  storename: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    marginBottom: 5,
  },
  storephone: {
    fontSize: 14,
  },
  image: {
    width: 60,
    height: 60,
  },
  customer: {
    border: 1,
    borderColor: "black",
    padding: 8,
  },
  customername: {
    fontSize: 14,
    marginTop: 4,
  },
  customeraddress: {
    fontSize: 14,
    marginTop: 8,
  },
  customermobile: {
    fontSize: 14,
    marginTop: 8,
  },
  amount: {
    fontSize: 14,
    marginTop: 10,
  },
  balance: {
    fontSize: 14,
    marginTop: 12,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    // marginBottom: 10,
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    fontSize: 10,
  },
  tableColHeader: {
    width: "33.33%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f2f2f2",
    padding: 3,
    fontWeight: "bold",
  },
  tableColHeader0: {
    width: "25%",
    borderWidth: 1,
  },
  tableColHeader1: {
    width: "7%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f2f2f2",
    // padding: 3,
    fontWeight: "bold",
  },
  tableCol1: {
    width: "18.26%",
    maxWidth: "18.26%",
    borderStyle: "black",
    borderWidth: 1,
  },
  tableCol0: {
    width: "30.33%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },

  tableCol: {
    width: "5.12%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    height: 20,
    backgroundColor: "blue",
  },
  tableRow: {
    flexDirection: "row",
    fontSize: 10,
  },
  past: {
    flexDirection: "row",
    display: "flex",
    borderBottomWidth: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderBottomColor: "black",
    borderColor: "black",
    padding: 3,
  },
  pastdue: {
    fontSize: 10,
    display: "flex",
  },
  pastamount: {
    fontSize: 10,
    borderLeft: 1,
    borderColor: "#bfbfbf",
    width: "28.33%",
    padding: 1,
    marginLeft: 319,
  },
  totalamount: {
    fontSize: 10,
    width: "28.33%",
    borderLeft: 1,
    borderColor: "#bfbfbf",
    padding: 1,
    marginLeft: 363,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  delivered: {
    // fontFamily: "Time-italic",
    fontSize: 10,
    marginTop: 15,
  },
});
const BillReport = () => {
  const storeName = "Kumar";
  const address = "Tin Factory , Bangalore";
  const storephone = "1234567890";
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.bill}>Bill Report</Text>
          </View>
          <View style={styles.store}>
            <Image src="bill.png" style={styles.image} />
            <View style={styles.storeDetails}>
              <Text style={styles.storename}>
                Store Name&nbsp;&nbsp;: {storeName}
              </Text>
              <Text style={styles.address}>
                Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {address}
              </Text>
              <Text style={styles.storephone}>Store Phone : {storephone}</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.customer}>
            <Text style={styles.customername}>
              Customer Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Monika
            </Text>
            <Text style={styles.customermobile}>
              Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              : 0987654321
            </Text>
            <Text style={styles.customeraddress}>
              Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              Bangalore
            </Text>
            <Text style={styles.amount}>
              Deposit Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 70
            </Text>
            <Text style={styles.balance}>
              Balance Product &nbsp;&nbsp;&nbsp;&nbsp; : 0
            </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Product</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>QTY</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Unit Price</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Amount</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol0}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCol0}>
                <Text>2</Text>
              </View>
              <View style={styles.tableCol0}>
                <Text>0</Text>
              </View>
              <View style={styles.tableCol0}>
                <Text>2</Text>
              </View>
            </View>
            <View style={styles.dueamount}>
              <View style={styles.past}>
                <Text style={styles.pastdue}>Past Month Due Amount</Text>
                <Text style={styles.pastamount}> 1</Text>
              </View>
              <View style={styles.past}>
                <Text style={styles.pastdue}>Total Amount</Text>
                <Text style={styles.totalamount}> 2</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.delivered}>Delivered Product Summary :</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader0}>
                  <Text>Date</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>1</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>2</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>3</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>4</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>5</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>6</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>7</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>8</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>9</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>10</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>11</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>12</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>13</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>14</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>15</Text>
                </View>
                <View style={styles.tableColHeader1}>
                  <Text>16</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCol1}>
                  <Text>Chilling Jar</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>2</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>3</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>8</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>4</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>2</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>2</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>0</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>3</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>1</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>0</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>0</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>1</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>2</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>1</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>1</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>3</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default BillReport;
