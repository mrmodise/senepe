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
  public PHOTO_BY_ID_URL = 'http://localhost:8088/photo/get';
  public UPDATE_PHOTO_URL = 'http://localhost:8088/photo/update';
  public LOGIN_URL = 'http://localhost:8088/auth';
  public TOKENIZE_URL = 'http://localhost:8011/rest/user/users';

  // headers
  public JSON_HEADERS: Headers = new Headers({'Content-Type': 'application/json'});

}
