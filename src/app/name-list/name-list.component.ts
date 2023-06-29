import { Component, inject } from '@angular/core';
import { ServerNamesService } from '../services/server-names.service'

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent{

  public letters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  private serverNamesService = inject(ServerNamesService)
  public names$ = this.serverNamesService.filteredList$

  public selectLetter( letter : string ){
    this.serverNamesService.filterByLetter( letter )
  }


}
