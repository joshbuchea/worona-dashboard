import * as types from '../types';
// Create Site actions:
export const createSiteRequested = (name, url, _id) =>
  ({ type: types.CREATE_SITE_REQUESTED, name, url, _id });
export const createSiteStatusChanged = status =>
  ({ type: types.CREATE_SITE_STATUS_CHANGED, status });
export const createSiteSucceed = siteId =>
  ({ type: types.CREATE_SITE_SUCCEED, siteId });
export const createSiteFailed = error =>
  ({ type: types.CREATE_SITE_FAILED, error });
// Delete Site actions:
export const deleteSiteRequested = ({ _id }) =>
  ({ type: types.DELETE_SITE_REQUESTED, _id });
export const deleteSiteStatusChanged = status =>
    ({ type: types.DELETE_SITE_STATUS_CHANGED, status });
export const deleteSiteSucceed = ({ siteId }) =>
  ({ type: types.DELETE_SITE_SUCCEED, siteId });
export const deleteSiteFailed = error =>
  ({ type: types.DELETE_SITE_FAILED, error });
