import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Album } from '../album';
import { ALBUM_LISTS } from "../mock-albums";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})

//à chaque "hook" son interface
export class AlbumDetailsComponent  implements OnInit, OnChanges{
  @Input() album!: Album;//Une propriété liée qui sera passée par le parent
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  selectedAlbum! : Album;
  tab !: string[] | undefined;

  constructor() { }
  ngOnInit(): void {
  console.log(this.album); 
  };
  ngOnChanges(): void{
    //récupérer la liste des chansons
    if (this.album !== undefined) {
      ALBUM_LISTS.forEach(element => {
        if(this.album.id === element.id){
          this.tab = element.list;
        }
      });
    }
  };

  play(album: Album){
  //emettre un album vers le parent
  this.onPlay.emit(album);    
  }

  
}




