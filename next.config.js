/** @type {import('next').NextConfig} */

const { UMAMI_SERVER_NAME } = process.env;

module.exports = {
  outputFileTracing: true,
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/neo",
      permanent: false,
    },
    {
      source: "/:set/(all|wu|ub|br|rg|wg|wb|ur|bg|wr|ug)",
      destination: "/:set",
      permanent: false,
    },
  ],
};
