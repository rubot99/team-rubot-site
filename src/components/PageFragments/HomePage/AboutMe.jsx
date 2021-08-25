import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi! Welcome to team rubot our family blog. Check our blog to see what we have been doing 😃😉.`,
  paraTwo: `- R & A`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['TeamRubot', 'Rubot', 'Family', 'Blog', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}            
            alt="location image"
            textH4="Living in"
            textH3="Newcastle, UK"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Like cups of"
            textH3="Coffee"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="road-trip.png"
            alt="car with luggage image"
            textH4="Enjoy taking"
            textH3="Road Trips"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="watering-plants.png"
            alt="watering potted plants image"
            textH4="Tending our"
            textH3="Garden"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="christmas-dinner.png"
            alt="Roast chicken and pie image"
            textH4="Attempting gourmet"
            textH3="Cooking"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="streaming-tv-app.png"
            alt="flat screen image"
            textH4="Relaxing and watching"
            textH3="Boxsets"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
