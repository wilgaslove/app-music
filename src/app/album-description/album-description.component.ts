import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css'],
  animations: [fadeInAnimation]
})

export class AlbumDescriptionComponent {
  title: string = "app-music"

  constructor(
    private route: ActivatedRoute, // récupérez le service route
    private aS: AlbumService // récupérez le service
  ) { }

  album: Album |undefined;


  ngOnInit():void {
    console.log(this.route.snapshot.params["albumId"]);
    
 //permet de récupérer l'idendifiant    
    const id: string = this.route.snapshot.params["albumId"];
   //const id: string = this.route.snapshot.paramMap.get('albumId'); 
    // TODO récupérer le détail d'un album

    this.album = this.aS.getAlbum(id)

  }

}
