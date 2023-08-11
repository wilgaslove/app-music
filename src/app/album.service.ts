import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List, Album } from './album';
import * as _ from 'lodash';
import { values } from 'lodash';


//import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  //subjectAlbum = new Subject<Album>();
  private _albumListUrl: string = environment.albumListUrl;
  private _albumsUrl: string = environment.albumUrl;

  //observable qui notifie la page actulle
  sendCurrentNumberPage = new Subject<number>();
// il va émettre des albums
  subjectAlbum = new Subject<Album>();

  constructor(private http: HttpClient) { }
/**
 * 
 * Fonction de rechercher de tous les albums
 * @returns Retourne la liste de tous les albums
 */
  getAlbums(): Observable<Album[]> {
    //return this._albums.sort((a: Album, b: Album) => b.duration - a.duration);
    /**
     * return objectVal<Album[]>()
     */
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      //ordonner les albums par ordur de durée décroissante
      map((albums: Album[]) => {
        return albums.sort(
          (a: Album, b: Album) => b.duration - a.duration
        );
      })
    );
  }



  getAlbum(id: string): Observable<Album> | undefined {
    //return this._albums.find(this._albums + "/" + id);
    //équivalent => http.get <Album>(this._albbumsUrl + '/album/id')
    return this.http.get<Album>(this._albumsUrl + '/' + id)
      .pipe(
        map((album: Album) => album)
      );
  }

  /**
   * Fonction de recherche des sons d'un albums
   * @param id identifiant de l'album à rechercher
   * @returns la référence sera retournée si elle existe; undefined 
   */
  getAlbumList(id: string): Observable<List> {
    return this.http.get<List>(this._albumListUrl + '/' + id)
  }

  /**
   * Fonction qui retourne le nombre d'albums
   * @returns le nombre d'albums
  */
 
  count(): Observable<number> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => albums.length)
    );
  }

  /* order(callback: SortAlbumCallback): AlbumService {
     this._albums.sort(callback)
     return this; // retourne le service pour permettre le chainage de methodes
   }
 
   limit(start: number, end: number): AlbumService {
     this._albums = this._albums.slice(start, end)
     return this;
   }*/

  paginate(start: number, end: number): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        const res = _.values(albums)
        console.log('sans lodash', albums);
        console.log('avec lodash', res);
        

        return res;
      }),//nv

      map((albums) => albums.sort(
        (a, b) => b.duration - a.duration
      ).slice(start, end)
      )
    );
  }

  /**
   * Type de requête
   * get => récupérer une resource
   * post => envoyer une resource
   * put => m-à-j une resource
   */

  search(word: string): Observable<Album[]> {
    return this.http.get<Album[]>(this._albumsUrl).pipe(
      map((albums: Album[]) => {
        //parcourir le tableau d'albums
        return albums.filter(album => {
          //retourner ceux contenant le string de le variable "word"
          return album.title
            .toLowerCase()
            .includes(word.trim().toLowerCase());
        });
      })
    )
  }

  // search(word: string): Album[]{
  //    let re = new RegExp(word.trim(), "g");
  //    return this._albums.filter(album => album.title.match(re))
  //  }


  /**
   * Méthode qui renvoi le nombre d'album qu'on a par page
   */
  paginateNumberPage(): number {
    return environment.numberPage;
  }

  /**
   * 
   * @param numberPage Méthode qui signale à tous les compossants la page actulle
   * @returns 
   */
  currentPage(numberPage: number) {
    return this.sendCurrentNumberPage.next(numberPage);
  }

  /**
   * Méthode qui parmet de changer le status d'un album à "on"
   * @param album: l'album dont le status doit passer à "on"
   */
  switchOn(album: Album): void {
    album.status = "on";
    //le code ci-dessous s'exécute car on y souscrit
    this.http.put<void>(this._albumsUrl + "/" + album.id, album)
    .subscribe({
      next: (e) => console.log(e),
      
      error: (err) => console.warn(err),
       
      complete: () => this.subjectAlbum.next(album)
    })
    
  }

  /**
   * Méthode qui permet de changer le status d'un album à "off"
   * @param album : l'album dont le status doit passer à "off"
   */
  switchOff(album: Album): void {
   album.status = "off"
   /**
    * renvoi un observable, et e s'exécute donc qu'à la souscription. Du 
    * coup, il faut qu'il souscrire, pour l'exécuter
    */
   this.http.put<void>(this._albumListUrl + '/' + album.id, album)
   .subscribe(() => {});
  }


}
