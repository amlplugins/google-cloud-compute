/**
 * @amlplugins/google-cloud-compute
 *
 * Thin namespaced re-export of the native @google-cloud/compute SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Compute Engine.
 */

import * as _sdk from "@google-cloud/compute";
export * from "@google-cloud/compute";
export { _sdk as sdk };
export default _sdk;
