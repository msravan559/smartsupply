import React, { useState } from 'react';

import { Col, Row } from 'antd';

import { assets } from '../../constants';
// import { useAppSelector } from '../../hooks';
// import { selectAboutInfo } from '../../features/config/configSlice';

import { AppContent } from '../../layouts';
import { Spacer } from '../../shared/components';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  // const aboutInfo = useAppSelector(selectAboutInfo);

  return (
    <AppContent>
      <Row justify="center">
        <Col span={12} className="text-center">
          <img
            src={assets.customerLogo}
            alt="Logo"
            onLoad={() => setLoaded(true)}
          />
          {/* {loaded && aboutInfo && (
            <>
              <div>
                <span>{aboutInfo.data.ProductLongName}</span>
              </div>
              <div>
                <span>Part Number : {aboutInfo.data.PartNumber}</span>
              </div>
              <div>
                <span>Version : {aboutInfo.data.Version}</span>
              </div>
            </>
          )} */}
          <Spacer height={50} />
        </Col>
      </Row>
    </AppContent>
  );
};

export default About;
