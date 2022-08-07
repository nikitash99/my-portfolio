import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Quick Learner`,
  paraTwo: `Winter will come again!!`,
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
