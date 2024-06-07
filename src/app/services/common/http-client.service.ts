import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  // baseUrl : string = environment.baseUrl;

  constructor(private httpClient:HttpClient, @Inject("baseUrl") private baseUrl:string) { }

  private url(requestParameter: Partial<RequestParameters>): string {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }
  get<T>(requsetParameters:Partial<RequestParameters>, id?: string) : Observable<T>{
    let url : string = "";
    if(requsetParameters.fullEndPoint)
      url = requsetParameters.fullEndPoint
    else
      url = `${this.url(requsetParameters)}${id ? `/${id}` : ""}`
    return this.httpClient.get<T>(url, {headers: requsetParameters.headers})
  }

  post<T>(requestParameter:Partial<RequestParameters>, body:Partial<T>) : Observable<T>{
    let url : string = "";
    if(requestParameter.fullEndPoint)
      url= requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}`

    return this.httpClient.post<T>(url,body,{headers:requestParameter.headers})
  }

  put<T>(requestParameter:Partial<RequestParameters>, body:Partial<T>) : Observable<T>{
    let url : string = "";
    if(requestParameter.fullEndPoint)
      url= requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}`

    return this.httpClient.put<T>(url,body,{headers:requestParameter.headers})
  }

  delete<T>(requsetParameters:Partial<RequestParameters>, id: string):Observable<T>{
    let url : string = "";
    if(requsetParameters.fullEndPoint)
      url= requsetParameters.fullEndPoint;
    else
      url = `${this.url(requsetParameters)}/${id}`

    return this.httpClient.delete<T>(url,{headers:requsetParameters.headers})
  }
}
export class RequestParameters{
controller?:string;
action?:string;

headers?:HttpHeaders
baseUrl?:string; //uygulamada olmayan farklı basseUrl ex: jsonplaceholder/posts
fullEndPoint?:string;
}
