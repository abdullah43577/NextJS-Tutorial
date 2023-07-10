import Head from 'next/head';

export const metadata = {
  title: 'About',
  description: 'NextJS Tutorial',
};

const About = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie eu mauris eget pellentesque. Nam vitae ornare purus</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie eu mauris eget pellentesque. Nam vitae ornare purus</p>
      </div>
    </>
  );
};

export default About;
