import { appMetadata } from './appMetadata';
import { userMetadata } from './userMetadata';
import { Identities } from './identities';

export class Auth0User {
  email: string = "";
  email_verified: boolean = false;
  family_name: string = "";
  gender: string = "";
  sub: string = "";
  given_name: string = "";
  identities: Array<Identities>;
  locale: string = "";
  name: string = "";
  nickname: string = "";
  picture: string = "";
  user_id: string = "";
  user_metadata: userMetadata;
  app_metadata: appMetadata;

  constructor() {
    this.identities = new Array(0);
    this.app_metadata = new appMetadata();
    this.user_metadata = new userMetadata();
  }
}
