'use strict';
const AgentSchema = require('../../../models/index').Agent.schema;
const EntitySchema = require('../../../models/index').Entity.schema;
const ExampleSchema = require('../../../models/index').Example.schema;
const DomainSchema = require('../../../models/index').Domain.schema;
const IntentSchema = require('../../../models/index').Intent.schema;
const ScenarioSchema = require('../../../models/index').Scenario.schema;
const SlotSchema = require('../../../models/index').Slot.schema;
const Joi = require('joi');

class AgentValidate {
    constructor() {

        this.findAll = {
            query: (() => {

                return {
                    start: Joi.number().description('The index of the first element to return. 0 is the default start.'),
                    limit: Joi.number().description('Number of elements to return from start. All the elements are returned by default')
                };
            })()
        };

        this.findById = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })()
        };

        this.findByName = {
            params: (() => {

                return {
                    agentName: AgentSchema.agentName.required().description('The name of the agent')
                };
            })()
        };

        this.findEntitiesByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            query: (() => {

                return {
                    start: Joi.number().description('The index of the first element to return. 0 is the default start.'),
                    limit: Joi.number().description('Number of elements to return from start. All the elements are returned by default')
                };
            })()
        };

        this.findEntityByIdByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent'),
                    entityId: EntitySchema.id.required().description('Id of the entity')
                };
            })()
        };

        this.findDomainsByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            query: (() => {

                return {
                    start: Joi.number().description('The index of the first element to return. 0 is the default start.'),
                    limit: Joi.number().description('Number of elements to return from start. All the elements are returned by default')
                };
            })()
        };

        this.findDomainByIdByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent'),
                    domainId: DomainSchema.id.required().description('Id of the domain')
                };
            })()
        };

        this.findIntentsInDomainByIdByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent'),
                    domainId: DomainSchema.id.required().description('Id of the domain')
                };
            })(),
            query: (() => {

                return {
                    start: Joi.number().description('The index of the first element to return. 0 is the default start.'),
                    limit: Joi.number().description('Number of elements to return from start. All the elements are returned by default')
                };
            })()
        };

        this.findIntentByIdInDomainByIdByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent'),
                    domainId: DomainSchema.id.required().description('Id of the domain'),
                    intentId: IntentSchema.id.required().description('Id of the intent')
                };
            })()
        };

        this.findIntentScenarioInDomainByIdByAgentId = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent'),
                    domainId: DomainSchema.id.required().description('Id of the domain'),
                    intentId: IntentSchema.id.required().description('Id of the intent')
                };
            })(),
            query: (() => {

                return {
                    size: Joi.number().description('Number of elements to return. Default 10')
                };
            })()
        };

        this.add = {
            payload: (() => {

                return {
                    agentName: AgentSchema.agentName.required(),
                    description: AgentSchema.description,
                    language: AgentSchema.language.required(),
                    timezone: AgentSchema.timezone.required(),
                    webhookUrl: AgentSchema.webhookUrl,
                    domainClassifierThreshold: AgentSchema.domainClassifierThreshold.required(),
                    fallbackResponses: AgentSchema.fallbackResponses.required(),
                    useWebhookFallback: AgentSchema.useWebhookFallback.required()
                };
            })()
        };

        this.updateById = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            payload: (() => {

                return {
                    agentName: AgentSchema.agentName,
                    description: AgentSchema.description,
                    language: AgentSchema.language,
                    timezone: AgentSchema.timezone,
                    webhookUrl: AgentSchema.webhookUrl,
                    domainClassifierThreshold: AgentSchema.domainClassifierThreshold,
                    fallbackResponses: AgentSchema.fallbackResponses,
                    useWebhookFallback: AgentSchema.useWebhookFallback
                };
            })()
        };

        this.deleteById = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })()
        };

        this.parse = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            query: (() => {

                return {
                    text: Joi.string().required().description('Text to parse'),
                    timezone: Joi.string().description('Timezone for duckling parse. Default America/Kentucky/Louisville')
                };
            })()
        };

        this.parsePost = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            query: (() => {

                return {
                    text: Joi.string().required().description('Text to parse'),
                    timezone: Joi.string().description('Timezone for duckling parse. Default America/Kentucky/Louisville')
                };
            })()
        };

        this.converse = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            query: (() => {

                return {
                    sessionId: Joi.string().required().description('Id of the session'),
                    text: Joi.string().required().description('Text to parse'),
                    timezone: Joi.string().description('Timezone for duckling parse. Default America/Kentucky/Louisville')
                };
            })()
        };

        this.conversePost = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })(),
            payload: (() => {

                return {
                    sessionId: Joi.string().required().description('Id of the session'),
                    text: Joi.string().required().description('Text to parse'),
                    timezone: Joi.string().description('Timezone for duckling parse. Default America/Kentucky/Louisville')
                };
            })()
        };

        this.export = {
            params: (() => {

                return {
                    id: AgentSchema.id.required().description('Id of the agent')
                };
            })()
        };

        this.import = {
            payload: (() => {

                return {
                    agentName: AgentSchema.agentName.required(),
                    description: AgentSchema.description,
                    language: AgentSchema.language.required(),
                    timezone: AgentSchema.timezone.required(),
                    webhookUrl: AgentSchema.webhookUrl,
                    domainClassifierThreshold: AgentSchema.domainClassifierThreshold.required(),
                    fallbackResponses: AgentSchema.fallbackResponses.required(),
                    useWebhookFallback: AgentSchema.useWebhookFallback.required(),
                    entities: Joi.array().items({
                        entityName: EntitySchema.entityName.required(),
                        uiColor: EntitySchema.uiColor,
                        examples: Joi.array().items({
                            value: ExampleSchema.value.required(),
                            synonyms: ExampleSchema.synonyms
                        }).required()
                    }),
                    domains: Joi.array().items({
                        domainName: DomainSchema.domainName.required(),
                        enabled: DomainSchema.enabled.required(),
                        intentThreshold: DomainSchema.intentThreshold.required(),
                        lastTraining: DomainSchema.lastTraining,
                        model: DomainSchema.model,
                        intents: Joi.array().items({
                            intentName: IntentSchema.intentName.required(),
                            examples: IntentSchema.examples.required(),
                            scenario: {
                                scenarioName: ScenarioSchema.scenarioName.required(),
                                slots: Joi.array().items({
                                    slotName: SlotSchema.slotName.required(),
                                    entity: SlotSchema.entity.required(),
                                    isList: SlotSchema.isList.required(),
                                    isRequired: SlotSchema.isRequired.required(),
                                    textPrompts: SlotSchema.textPrompts,
                                    useWebhook: SlotSchema.useWebhook.required()
                                }),
                                intentResponses: ScenarioSchema.intentResponses.required(),
                                useWebhook: ScenarioSchema.useWebhook.required(),
                                webhookUrl: ScenarioSchema.webhookUrl
                            }
                        })
                    })
                };
            })()
        };
    }
}

const agentValidate = new AgentValidate();
module.exports = agentValidate;
