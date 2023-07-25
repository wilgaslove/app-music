import { Component, OnInit} from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums', // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  titlePage: string = "Page princiaple Albums Music";
  
  selectedAlbum! : Album;

  albums: Album[] = ALBUMS;

  constructor() { }
  ngOnInit() {
  };
  onSelect(album:Album){
    this.selectedAlbum = album;
    console.log( this.selectedAlbum);
    
  }
}


