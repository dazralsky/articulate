import Boom from 'boom';
import {
    ACL_ACTION_READ,
    ACL_ACTION_WRITE,
    P_HAPI_GBAC,
    PARAM_FIELD,
    PARAM_SEARCH,
    PARAM_VALUE,
    ROUTE_TO_MODEL
} from '../../../util/constants';
import GlobalValidator from '../../validators/global.validator';

//const logger = require('../../../util/logger')({ name: `route:global:search-by-field` });

module.exports = ({ ROUTE }) => {

    return {
        method: 'get',
        path: `/${ROUTE}/${PARAM_SEARCH}/{${PARAM_FIELD}}/{${PARAM_VALUE}}`,
        options: {
            plugins: {
                [P_HAPI_GBAC]: [
                    `${ROUTE_TO_MODEL[ROUTE]}:${ACL_ACTION_READ}`,
                    `${ROUTE_TO_MODEL[ROUTE]}:${ACL_ACTION_WRITE}`,
                ]
            },
            tags: ['api'],
            validate: GlobalValidator.searchByfield,

            handler: async (request) => {

                const { globalService } = await request.services();
                const {
                    [PARAM_FIELD]: field,
                    [PARAM_VALUE]: value
                } = request.params;
                try {
                    return await globalService.searchByField({ field, value, model: ROUTE_TO_MODEL[ROUTE] });
                }
                catch ({ message, statusCode }) {

                    return new Boom(message, { statusCode });
                }
            }
        }
    };
};
