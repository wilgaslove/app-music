import { Injectable } from '@angular/core';
import { List, Album, SortAlbumCallback } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albumList: List[] = ALBUM_LISTS
  private _albums: Album[] = ALBUMS


  constructor() { }

  getAlbums(): Album[] {
    return this._albums;
  }



  /*getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id);
  }*/


  getAlbumList(id: string): List | undefined {
    return this._albumList.find(list => list.id === id) //?.list;
  }

  /**
   * Fonction qui retourne le nombre d'albums
   * @returns le nombre d'albums
  */
  count() {
    return this._albums.length;
  }

  order(callback: SortAlbumCallback): AlbumService {
    this._albums.sort(callback)
    return this; // retourne le service pour permettre le chainage de methodes
  }

  limit(start: number, end: number): AlbumService {
    this._albums = this._albums.slice(start, end)
    return this;
  }

  paginate(start: number, end: number): Album[] {
    return this.getAlbums().slice(start, end);
  }

  //search(word: string): Album[] {

  //   return this._albums.filter(album => {
  //    return album.title.toLowerCase()
  //    .includes(word.trim().toLowerCase());
  //   }); 
  // }

  search(word: string): Album[]{
     let re = new RegExp(word.trim(), "g");
     return this._albums.filter(album => album.title.match(re))
   }
}
