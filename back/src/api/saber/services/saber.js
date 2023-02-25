'use strict';

/**
 * saber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saber.saber');
