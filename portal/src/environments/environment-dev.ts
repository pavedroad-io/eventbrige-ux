// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Environment: "dev",
  CustBaseURL: "http://localhost:8081",
  OrgBaseURL: "http://localhost:8082",
  ManifestBaseURL: "http://localhost:8083",
  BasePath: "/api/v1/namespace/pavedroad/",
  OrgEndPoint: "organization" ,
  EBConfigEndPoint: "customers" ,
  ManifestEndPoint: "EoManifestMgr",


  // Auth0
  Domain: "pavedroad.us.auth0.com",
  Audience: "https://pavedroad.us.auth0.com/api/v2/",
  ClientID: "mRgGOTIpgCKY8TRxcnvsRGxknKxut3RL",
  Scope: "read:current_user"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
