import {Injectable} from '@angular/core';
import {Config} from '../config/config';

@Injectable()
export class UploadPhotoService {

  filesToUpload: Array<File>;
  config = new Config();

  constructor() {
    this.filesToUpload = [];
  }

  public upload() {
    this.makeFileRequest(this.config.FILE_REQUEST_URL, [], this.filesToUpload).then((result => {
        console.log(result);
      }), (error) => {
        console.error(error);
      }
    );
  }

  public fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  private makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append('upload[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert('Upload successful');
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      xhr.send(formData);
    });
  }

}
