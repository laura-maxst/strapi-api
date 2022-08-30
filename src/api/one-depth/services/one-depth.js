'use strict';

/**
 * one-depth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::one-depth.one-depth');
