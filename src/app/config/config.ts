import { Headers } from '@angular/http';
/**
 * Defines common properties in the entire application
 * @author Morebodi Modise
 * @class Config
 */
export class Config{
  // URLs
  public GET_PHOTOS_URL = 'http://localhost:8088/photo/photos';
  public POST_USER_URL = 'http://localhost:8088/auth/register';
  public GET_USER_PHOTOS = 'http://localhost:8088/rest/photo/user';
  public UPDATE_PHOTO_URL = 'http://localhost:8088/photo/update';
  public LOGIN_URL = 'http://localhost:8088/auth';
  public TOKENIZE_URL = 'http://localhost:8088/rest/user/users';
  public USER_BY_NAME_URL = 'http://localhost:8088/rest/user';

  // headers
  public JSON_HEADERS: Headers = new Headers({'Content-Type': 'application/json'});

}
