import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `I'm a Computer Science student from CTAE,Udaipur.I have done my B.Tech with Aggregate GPA 7.63.`,
  paraTwo: `I am always energetic and eager to learn new skills.I am able to handle multiple tasks on a daily basis.`,
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
          keywords={[
            'Portfolio',
            'Nikita',
            'sharma'

          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
    </>
  );
};
export default AboutMe;
