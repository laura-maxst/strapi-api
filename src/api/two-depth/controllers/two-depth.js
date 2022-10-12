'use strict';

/**
 * two-depth controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::two-depth.two-depth');
