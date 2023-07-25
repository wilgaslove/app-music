import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums', // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  titlePage: string = "Page princiaple Albums Music";

  selectedAlbum!: Album;// ! = veut dire qu'une valeur sera passé au moment opportun.
  albums: Album[] = ALBUMS;
  status: string | null = null;

  constructor(private albumService: AlbumService) {
    //
   }
  ngOnInit() {
    
  };

  onSelect(album: Album) {
    this.selectedAlbum = album;
    console.log(this.selectedAlbum);

  }

  playParent($event: Album) {
    this.status = $event.id;
  }
}


