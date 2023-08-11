import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
//import { ALBUMS } from '../mock-albums1';

@Component({
  selector: 'app-albums', // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]

})
export class AlbumsComponent implements OnInit {
  titlePage: string = "Page princiaple Albums Music";
  selectedAlbum!: Album;// ! = veut dire qu'une valeur sera passé au moment opportun.
 // albums: Album[] = ALBUMS;
  albums!: Album[];
  status: string | null = null;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService
      .paginate(0, this.albumService.paginateNumberPage())
      .subscribe({
        next: (alb: Album[]) => {
          this.albums = alb
        }
      });

  }

  onSelect(album: Album) {
    this.selectedAlbum = album;
  }

  playParent($event: Album) {
    this.status = $event.id;

  }

  search($event: Album[]) {
    if ($event) {
      this.albums = $event;
    }
  }


  // resetSelectedAlbum() {
  //   this.selectedAlbum = undefined;
  // }
  onSetPaginate($event: { start: number, end: number }) {
    //réculpérer les ablbums comris entre [start et end]
    this.albumService.paginate($event.start, $event.end)
    .subscribe({
      next: (alb: Album[]) => this.albums = alb
    })
  }
}




