'use strict';

/**
 * one-depth controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::one-depth.one-depth');
