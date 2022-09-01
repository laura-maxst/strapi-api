'use strict';

/**
 * two-depth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::two-depth.two-depth');
