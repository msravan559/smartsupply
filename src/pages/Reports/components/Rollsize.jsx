import React from 'react';
import {
  Page,
  View,
  Text,
  Image,
  PDFDownloadLink,
  Document,
} from '@react-pdf/renderer';

const Rollsize = () => (
  <Document>
    <Page size="A7">
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text style={{ margin: 10 }}>SmartSupply</Text>
          <Text style={{ margin: 10 }}>Weight: 12lbs</Text>
          <Text style={{ margin: 10 }}>Price: $50</Text>
        </View>
        <View style={{ width: '50%', height: '100%' }}></View>
      </View>
    </Page>
  </Document>
);

// const Rollsize = () => (
//   <PDFDownloadLink document={<RollsizeTemplate />} fileName="rollsize.pdf">
//     {({ blob, url, loading, error }) =>
//       loading ? 'Loading document...' : 'Download now!'
//     }
//   </PDFDownloadLink>
// );

export default Rollsize;
