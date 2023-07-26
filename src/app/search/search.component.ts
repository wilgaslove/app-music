import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
constructor(
  private albumService : AlbumService,
){}

 onSubmit(form: NgForm ){
  console.log(this.albumService.search(form.value.word));
  
 }
}
