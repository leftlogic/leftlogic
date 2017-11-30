import Head from 'next/head';

export default ({ title }) => (
  <Head>
    <meta charset="utf-8" />
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width initial-scale=1 maximum-scale=1 user-scalable=0"
    />
    <link rel="icon" href="/static/img/favicon.png" />
    <link rel="stylesheet" href="/static/css/normalize.css" />
    <link rel="stylesheet" href="/static/css/style.css" />
  </Head>
);
