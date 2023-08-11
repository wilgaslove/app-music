import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './admin/album/album.component';


/**
 * L'ensemble des routes de ntre application
 */
const albumsRoutes: Routes = [
  /**
   * path: route à correspont pour l'appel d'un composant
   * pathMatch: définir si la route sera exactement correspondant
   * pathMatch: 'full' définir que la route sera exactement correspondant
   * pathMatch: 'prefix' définir que la route sera pas  exactement correspondant
   * redirectTo: permet de rediger une route
   * path: '', dirige à la page d'accceuil
   * 
   */
  {
    path: 'albums',// pro
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'album/:albumId',
    component: AlbumDescriptionComponent
  },
  {path: 'oc', component: OpenCloseComponent },
  {path: 'admin', component: AlbumComponent },
  /*========ATTANTION DANGER=======*/
  {path: '**', component: PageNotFoundComponent }
];
export default albumsRoutes


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(albumsRoutes),//forRoot: méthode utilisée pour définir les routes à utilisés dans le module de routage.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
