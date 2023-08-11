import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { RouterModule, Routes } from '@angular/router';

// Dans l'AdminModule définition des routes
const routes: Routes = [
  { path: 'admin/add', component: AddAlbumComponent },

  ]
  

@NgModule({
  imports: [
    CommonModule,
     ShareModule,
     RouterModule.forChild(routes), // définition des routes dans le sous-module
  ],
  declarations: [
    AlbumComponent,
    AddAlbumComponent,
  ],
 
  exports: [AlbumComponent]
})
export class AdminModule { }
