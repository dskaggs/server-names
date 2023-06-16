import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class  ServerNamesService {

  private namesUrl = 'assets/data/names.json'

  constructor( private http : HttpClient ) {
    this.http = http
   }

  public getList(){

    return this.http.get( this.namesUrl )

   }

  public filterByLetter( letter : String ){

    return this.http.get( this.namesUrl)
      //.pipe(filter(name => (  name.split('')[0].toLowerCase() === letter.toLowerCase() ));

    // TODO: Figure out how to take the above observable and filter to the requested starting letter

  }

  public search( term : String){

    //TODO: Implement searching word list for words starting with input string

  }
}
