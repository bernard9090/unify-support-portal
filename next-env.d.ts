/// <reference types="next" />
/// <reference types="next/types/global" />


const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                API_ENDPOINT: process.env.API_ENDPOINT,
            },
        }
    }else{
        return {
            env: {
                API_ENDPOINT: process.env.PROD_API_ENDPOINT,
            },
        }
    }
};

