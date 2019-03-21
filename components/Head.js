import Head from 'next/head';

export default ({ title }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=0"
      />
      <meta name="from" content={process.env.FROM} />
      <link rel="stylesheet" href="/static/css/style.css" />
      <link rel="icon" href="/static/img/favicon.png" />
      <link rel="stylesheet" href="/static/css/normalize.css" />
    </Head>
  );
};
