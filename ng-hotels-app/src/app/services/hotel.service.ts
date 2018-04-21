import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Hotel } from '../models/hotel.model'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HotelService {

  APIHotels = "http://localhost:1412/api/v1/hotels/"

  constructor(private http:HttpClient) { }

  getHotels(){
    return this.http.get(this.APIHotels)
  }

  getHotelsFilter(name:string){
    let params = new HttpParams().set('name', name);
    //return this.http.get(this.APIHotels, { params: params })
    return this.http.get(this.APIHotels + name)
  }
}
