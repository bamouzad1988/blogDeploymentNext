//deploy
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// /** @type {import('next').NextConfig} */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      //deploy
      env: {
        mongodb_username: "bamouzad1988",
        mongodb_password: "22mwLwryVah3Aurj",
        mongodb_cluster: "cluster1",
        mongodb_database: "mySitedev",
      },
    };
  }
  return {
    reactStrictMode: true,
    //deploy
    env: {
      mongodb_username: "bamouzad1988",
      mongodb_password: "22mwLwryVah3Aurj",
      mongodb_cluster: "cluster1",
      mongodb_database: "mySite",
    },
  };
};
// module.exports = nextConfig;
