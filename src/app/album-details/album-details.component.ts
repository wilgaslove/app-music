import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';
//import { ALBUM_LISTS } from "../mock-albums1";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
  animations: [fadeInAnimation]

})

//à chaque "hook" son interface
export class AlbumDetailsComponent implements OnInit, OnChanges {
  @Input() album!: Album; //Une propriété liée qui sera passée par le parent
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Output() onHide: EventEmitter<Album> = new EventEmitter();


  selectedAlbum!: Album;
  tab !: string[] | undefined;
  albumLists: List[] = [];
  songs: string[] | undefined = [];

  constructor(private albumService: AlbumService) { }
  ngOnInit(): void {
    //console.log(this.album);
  };

  ngOnChanges(): void {
    if (this.album) {
      this.albumService.getAlbumList(this.album.id).subscribe(
        (albumList) => { this.songs = albumList.list }
      )
    }
  };


  play(songs: Album) {
    //emettre un album vers le parent
    this.onPlay.emit(songs);
    this.albumService.switchOn(songs)
  }

  // TK
  shuffleAlbum(songs: string[]) {
   // this.songs = this.albumService.shuffle(songs);
  }

  hide(album: Album) {
    this.onHide.emit(album);
  }


}






