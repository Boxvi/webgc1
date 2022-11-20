export interface IApiAuthUserMetadataTs {
  accessToken: string;
  tokenType: string;
  username: string;
  authorities: [{ authority: string }];
}
