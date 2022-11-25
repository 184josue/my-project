'use strict';

/**
 * feria-virtual service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feria-virtual.feria-virtual');
