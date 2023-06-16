import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ServerNamesService } from '../services/server-names.service'


@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent{

  public letters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  private serverNamesService
  public names$

  constructor( serverNamesService : ServerNamesService ) {
    this.serverNamesService = serverNamesService
    this.names$ = serverNamesService.getList().subscribe()
  }

  public selectLetter( letter : String ){
    this.names$ = this.serverNamesService.filterByLetter( letter )
  }


}
