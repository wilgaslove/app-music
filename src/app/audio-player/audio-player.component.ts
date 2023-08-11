import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  // Variable permettant d'afficher ou non, le composant audio-player
  shwoplayer: boolean = false;
  // Variable representant lf'lum joué

  playerAlbum!: Album

  total: number = 1;
  //Variable représentant le numéro du son joué actuellemnt (1/4)
  curretSongNumber: number = 1;
  //variable représentant le pourcentage de sons joué (15% pour 1/4, 5% pour 2/4)
  ratio: number = 0;
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    //soucrire au Sujet pour recevoir les notifications
    this.albumService.subjectAlbum.subscribe({
      next: (a: Album) => {
        this.playerAlbum = a;
        //afficher le composant
        this.shwoplayer = true;
        // le son joué en 1er est le n°1
        this.curretSongNumber = 1;
        let duration = this.playerAlbum.duration;
        this.total = Math.floor(duration / 120);
        //
        this.ratio = (100 / this.total);

        //Variable représentant le pourcentage à ajouter après chaque son dans la barre de progressioin
        let step = this.ratio; // il faut à chaque fois augmenter le ratio%
        // augmenter le nuveu de a barre de progression chaque 2mins (120 000 millisicond)
        const intervalId = setInterval(() => {
          this.curretSongNumber++;
          this.ratio += step;
          if (this.ratio > 100) {
            clearInterval(intervalId);
            this.shwoplayer = false;
            this.albumService.switchOff(this.playerAlbum);
          }
        },
          1000);
      }
    });
  }
}
