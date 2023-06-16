import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class ServerNamesService {

  private namesUrl = 'assets/data/names.json'

  constructor( private http : HttpClient ) {
    this.http = http
   }

  public getList(){

    return this.http.get( this.namesUrl )

   }
}
