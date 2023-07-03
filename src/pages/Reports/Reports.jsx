import React from 'react';

import FullSheetReport from './components/Fullsheet';
import QRonly from './components/QRonly';
import BillReport from './components/BillReport';
import Rollsize from './components/Rollsize';
import JardetailsA4Report from './components/JardetailsA4Report';
import JardetailsfullsizeReport from './components/JardetailsfullsizeReport';

import DailySheetReport from './components/DailySheetReport';
import InventoryReport from './components/InventoryReport';
import PaycollectionReport from './components/PaycollectionReport';
import SingledayReport from './components/SingledayReport';
import SalesReport from './components/SalesReport';

import { Button } from 'antd';
import { pdf } from '@react-pdf/renderer';
import './Reports.css';
import { AppContent } from '../../layouts';

const Reports = () => {
  const handleFullSheetClick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<FullSheetReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  const handleQrclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<QRonly />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  const handlebillclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<BillReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  const handlebillrollsizeclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<Rollsize />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  const handlebillA4click = async (e) => {
    try {
      const pdfDocGenerator = pdf(<BillReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  const handlefullsizeclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<JardetailsfullsizeReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  const handleA4click = async (e) => {
    try {
      const pdfDocGenerator = pdf(<JardetailsA4Report />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  const handledailySheetclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<DailySheetReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  const handleinventoryclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<InventoryReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  const handlepaycollectionclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<PaycollectionReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  const handlesingledayclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<SingledayReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  const handlesalesclick = async (e) => {
    try {
      const pdfDocGenerator = pdf(<SalesReport />);
      const blob = await pdfDocGenerator.toBlob();
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContent>
      <div>
        <div className="right-side-bar">
          <div className="container-fluid report-div">
            <div className="row bill-invoice-heading">Reports</div>
            <div className="requested-file-div">
              <div className="sample-report-row row">
                <span>Daily Sheet</span>
                <div className="report">
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handleFullSheetClick}
                  >
                    Full Sheet
                  </Button>

                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handleQrclick}
                  >
                    QR Only
                  </Button>
                </div>
              </div>

              <div className="sample-report-row row">
                <span>Bill</span>
                <div className="report">
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handlebillclick}
                  >
                    A4 Bill
                  </Button>
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handlebillrollsizeclick}
                  >
                    Roll Size
                  </Button>
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handlebillA4click}
                  >
                    A4 4 Bill
                  </Button>
                </div>
              </div>

              <div className="sample-report-row row">
                <span>Jar Details Report</span>
                <div className="report">
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handlefullsizeclick}
                  >
                    Full Size
                  </Button>
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handleA4click}
                  >
                    A4 Size
                  </Button>
                </div>
              </div>

              <div className="sample-report-row row">
                <span>Daily Sheet With Entries</span>
                <div className="report">
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handledailySheetclick}
                  >
                    Daily Sheet With Entries
                  </Button>
                </div>
              </div>

              <div className="sample-report-row row">
                <span>Inventory Report</span>
                <div className="report">
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handleinventoryclick}
                  >
                    Inventory Report
                  </Button>
                </div>
              </div>

              <div className="sample-report-row row">
                <span>Payment Report</span>
                <div className="report">
                  <Button
                    type="primary"
                    className="each-sample-pdf"
                    onClick={handlepaycollectionclick}
                  >
                    Payment Collection Report
                  </Button>
                </div>
              </div>
            </div>

            <div className="sample-report-row row">
              <span>Single Day Delivery Report</span>
              <div className="report">
                <Button
                  type="primary"
                  className="each-sample-pdf"
                  onClick={handlesingledayclick}
                >
                  Single Day Delivery Report
                </Button>
              </div>
            </div>

            <div className="sample-report-row row">
              <span>Sales Report</span>
              <div className="report">
                <Button
                  type="primary"
                  className="each-sample-pdf"
                  onClick={handlesalesclick}
                >
                  Sales Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContent>
  );
};

export default Reports;
