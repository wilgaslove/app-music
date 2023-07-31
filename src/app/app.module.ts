import { NgModule, PACKAGE_ROOT_URL } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PaginatComponent } from './paginat/paginat.component';


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
  /*========ATTANTION DANGER=======*/
  {path: '**', component: PageNotFoundComponent }
];
export default albumsRoutes


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    LoginComponent,
    AlbumDescriptionComponent,
    PageNotFoundComponent,
    OpenCloseComponent,
    PaginatComponent,
    
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(albumsRoutes),//forRoot: méthode utilisée pour définir les routes à utilisés dans le module de routage.
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
