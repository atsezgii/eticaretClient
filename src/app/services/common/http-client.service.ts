import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  // baseUrl : string = environment.baseUrl;

  constructor(private httpClient:HttpClient, @Inject("baseUrl") private baseUrl:string) { }

  get<T>(){
    let url : string = "";
    url =
  }

  post(){

  }

  put(){

  }

  delete(){

  }
}
