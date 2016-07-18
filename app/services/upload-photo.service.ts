import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ApplicationProperties } from '../config/config';

/**
 * @author: Morebodi Modise
 * @purpose: upload photo service to define all upload-photo related functionalities
 * @contacts: http://github.com/mrmodise, http://mrmodise.com
 */

@Injectable()
export class UploadPhotoService {
    
    filesToUpload: Array<File>;
    properties: ApplicationProperties = new ApplicationProperties();
    

    constructor() { 
        this.filesToUpload = [];
    }
    
    upload(){
        this.makeFileRequest(this.properties.fileRequestUrl, [], this.filesToUpload).then((result => {
            console.log(result);
        }), (error) => {
            alert("File exceeds its maximum permitted size of 1048576 bytes");
        }
        );
    }
    
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }
    
    makeFileRequest(url: string, params: Array<string>, files: Array<File>){
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            
            for(var i = 0; i < files.length; i++){
                formData.append("upload[]", files[i], files[i].name);
            }
            
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4){
                    if (xhr.status == 200){
                        alert("Upload successful");
                    }else{
                        reject(xhr.response);
                    }
                }
            }
            
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
            xhr.send(formData);
        });
    } 

}