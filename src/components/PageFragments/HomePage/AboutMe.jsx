import React from 'react';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Veritatis quisquam eligendi, ex ab dolore nam reprehenderit consequuntur 
  enim maxime dolorem id sequi ea. Labore mollitia fugit ducimus nemo et repellat 
  optio fuga? Quas animi ab eius reiciendis voluptates necessitatibus repudiandae quo, u
  llam praesentium beatae enim consequatur soluta vero minus suscipit?`,
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
            'Yashraj',
            'Mishra',
            'for the love of designing',
            'bahenchod',
            'ReactJS',
            'NodeJS',
            'and lawada',
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
