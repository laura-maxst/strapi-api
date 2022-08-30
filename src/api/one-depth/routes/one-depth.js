'use strict';

/**
 * one-depth router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::one-depth.one-depth');
