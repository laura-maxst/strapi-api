'use strict';

/**
 * two-depth router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::two-depth.two-depth');
