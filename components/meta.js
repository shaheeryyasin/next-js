import head from "next/head";

const meta = ({ title, keywords, description }) => {
  return (
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="{description}" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </head>
  );
};
