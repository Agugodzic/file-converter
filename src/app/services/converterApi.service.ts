import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileRequest } from '../models/FileRequest';
//import { FileResponse } from '../models/FileResponse';

@Injectable({
  providedIn: 'root'
})
export class ConverterApiService {
  private apiServerUrl = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  public converterFile(fileRequest:FileRequest):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/converter`,fileRequest)
  }

}
