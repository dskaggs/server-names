import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, switchMap, from } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ServerNamesService {

  private namesUrl = 'assets/data/names.json'
  private namesList = new BehaviorSubject<string[]>([])
  private selectedLetter = new BehaviorSubject<string|undefined>(undefined)
  readonly filteredList$ = this.selectedLetter.pipe(
    switchMap( ( selectedLetter ) => this.namesList.pipe(
      map( ( names ) => {
        if (!selectedLetter){
          return names
        }
        return names.filter( (name) => name.split('')[0].toLowerCase() === selectedLetter.toLowerCase() )

      } )
    ))
  )
  readonly namesList$ = this.namesList.asObservable()

  constructor( private http : HttpClient ) {
    this.http.get<string[]>( this.namesUrl ).subscribe( (names) => {
      this.namesList.next(
        names.sort(( a, b ) => {
          return a.toLowerCase() < b.toLowerCase()
          ? -1
          : 1
        })
      )
    })
   }

  public filterByLetter( letter : string ){
    this.selectedLetter.next( letter )
  }

  public search( term : String){

    //TODO: Implement searching word list for words starting with input string

  }
}
