import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatComponent } from '../paginat/paginat.component';



@NgModule({
  declarations: [PaginatComponent],
  imports: [
    CommonModule
  ], 
  exports:[PaginatComponent]
})
export class ShareModule { }
