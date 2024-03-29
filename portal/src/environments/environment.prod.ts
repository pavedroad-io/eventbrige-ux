export const environment = {
  production: true,
  Environment: "prod",
  CustBaseURL: "https://api.pavedroad.io",
  BaseURL: "api.pavedroad.io",
  OrgBaseURL: "https://api.pavedroad.io",
  ManifestBaseURL: "https://api.pavedroad.io",
  PlogBaseURL: "https://api.pavedroad.io",
  BasePath: "/api/v1/namespace/pavedroad/",
  OrgEndPoint: "organization",
  CustomerEndPoint: "customers" ,
  ManifestEndPoint: "EoManifestMgr",
  PlogEndPoint: "plogs",

  // Auth0
  Domain: "eventorchestrator.us.auth0.com",
  Audience: "https://eventorchestrator.us.auth0.com/api/v2/",
  ClientID: "8R24SiFyQn8ECiWBH8VEGwBS2GfaQnXK",
  Scope: "read:current_user",

  // Kuberentes
  Kubectx: "john.scharber@eo-stagging.us-west-1.eksctl.io"
};
