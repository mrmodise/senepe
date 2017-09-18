import {Headers} from '@angular/http';
/**
 * Defines common properties in the entire application
 * @author Morebodi Modise
 * @class Config
 */
export class Config {
  // URLs
  public static LOGIN_URL = 'http://localhost:8088/auth';
  // headers
  public static JSON_HEADERS = new Headers({'Content-Type': 'application/json'});
  public static GET_PHOTOS_URL = 'http://localhost:8088/auth/allPhotos';
  public static POST_USER_URL = 'http://localhost:8088/auth/register';
  public static GET_USER_PHOTOS = 'http://localhost:8088/rest/photo/user';
  public static ADD_PHOTO_URL = 'http://localhost:8088/rest/photo/add';
  public static FILE_REQUEST_URL = 'http://localhost:8088/rest/photo/upload';
  // retrieve token from local storage
  public static token = localStorage.getItem('token');
  // set authorization headers
  public static AUTH_HEADERS = new Headers({'Content-Type': 'application/json', 'Authorization': Config.token});
  public static UPDATE_PHOTO_URL = 'http://localhost:8088/photo/update';
  public static TOKENIZE_URL = 'http://localhost:8088/rest/user/users';
  public static USER_BY_NAME_URL = 'http://localhost:8088/rest/photo/user';

}
