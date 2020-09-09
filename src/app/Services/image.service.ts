import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Producto } from '../Models/producto';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url = 'https://localhost:44324/api/Imagen';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
  };

  constructor(private http: HttpClient) { 

  }
  list(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url, this.httpOptions).pipe(retry(1));
  }
  getProfileImage(name: string): Observable<Blob> {
    return this.http
      .get<Blob>(this.url + '?name=' + name, this.httpOptions)
      .pipe(retry(1));
  }
  postFile(caption: string, fileToUpload: File): Observable<string> {
    const formData: FormData = new FormData();
    console.log(fileToUpload);
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post<string>(this.url, formData)
      .pipe(retry(1));
  }
  deleteFile(name: string): Observable<any> {
    return this.http.delete<any>(this.url + '?name=' + name, this.httpOptions).pipe(retry(1));
  }
}
