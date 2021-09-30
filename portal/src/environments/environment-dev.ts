export const environment = {
  production: false,
  Environment: "default",
  CustBaseURL: "http://localhost:8081",
  OrgBaseURL: "http://localhost:8082",
  ManifestBaseURL: "http://localhost:8083",
  PlogBaseURL: "http://localhost:8084",
  BasePath: "/api/v1/namespace/pavedroad/",
  OrgEndPoint: "organization" ,
  EBConfigEndPoint: "customers" ,
  ManifestEndPoint: "EoManifestMgr",
  PlogEndPoint: "plogs",
  
  // Auth0
  Domain: "pavedroad.us.auth0.com",
  Audience: "https://pavedroad.us.auth0.com/api/v2/",
  ClientID: "mRgGOTIpgCKY8TRxcnvsRGxknKxut3RL",
  Scope: "read:current_user",

  // Kuberentes
  Kubectx: "microk8s"
};
