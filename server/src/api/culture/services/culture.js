'use strict';

/**
 * culture service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::culture.culture');
