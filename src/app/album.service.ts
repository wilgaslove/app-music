import { Injectable } from '@angular/core';
import { List, Album } from './album';
import { ALBUMS, ALBUM_LISTS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albumList: List[] = ALBUM_LISTS
  private _albums: Album[] = ALBUMS


  constructor() { }

  getAlbums(): Album[] {
    return this._albums.sort((a: Album, b: Album) => b.duration - a.duration)
  }



  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id);
  }


  getAlbumList(id: string): List | undefined {
    return this._albumList.find(list => list.id === id) //?.list;
  }

  /**
   * Fonction qui retourne le nombre d'albums
   * @returns le nombre d'albums
   */
  count(){
    return this._albums.length;
  }

 // paginate(start: number, end: number):Album[]{}



}
