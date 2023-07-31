import { Component } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums', // sélecteur à mettre dans le parent
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations: [fadeInAnimation]

})
export class AlbumsComponent {
  titlePage: string = "Page princiaple Albums Music";

  selectedAlbum!: Album;// ! = veut dire qu'une valeur sera passé au moment opportun.
  albums: Album[] = ALBUMS;
  status: string | null = null;

  constructor(private albumService: AlbumService) {
    console.log(`${this.albumService.count()} albums trouvés`);

  }

  ngOnInit(): void {
    this.albums = this.albumService
    .paginate(0, this.albumService.paginateNumberPage())
    // .order ((a: Album, b: Album) => a.duration - b.duration)
    // .limit (0, this.albumService.paginateNumberPage())
    // .getAlbums
  }
 
  onSelect(album: Album) {
    this.selectedAlbum = album;
    // console.log();

  }

  playParent($event: Album) {
    this.status = $event.id;
    
  }

  search($event: Album[]){
    if ($event) {
      this.albums = $event
    }

    console.log(`parent sera mis à jour et affichera seulement les albums ${$event}`);
  }

  onSetPaginate($event: {start: number, end: number}){
    //réculpérer les ablbums comris entre [start et end]
    this.albums = this.albumService.paginate($event.start, $event.end);
  }
}


