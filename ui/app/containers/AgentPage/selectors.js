/**
 * AgentPage selectors
 */

import { createSelector } from 'reselect';

const selectAgent = (state) => state.get('agent');

const makeSelectAgentData = () => createSelector(
  selectAgent,
  (agentState) => agentState.get('agentData').toJS(),
);

const makeSelectWebhookData = () => createSelector(
  selectAgent,
  (agentState) => agentState.get('webhookData').toJS(),
);

const makeSelectTouched = () => createSelector(
  selectAgent,
  (agentState) => agentState.get('touched'),
);

export {
  selectAgent,
  makeSelectAgentData,
  makeSelectWebhookData,
  makeSelectTouched,
};
