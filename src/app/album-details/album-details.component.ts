import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})


export class AlbumDetailsComponent  implements OnInit{
  @Input() album!: Album;
  selectedAlbum! : Album;

  constructor() { }
  ngOnInit() {
  console.log(this.album); 

  }

}



