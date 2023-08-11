import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginat',
  templateUrl: './paginat.component.html',
  styleUrls: ['./paginat.component.css']
})
export class PaginatComponent implements OnInit {
  /**
   * nombre total d'albums
   */
  total: number = 0;
  //nombre d'album(s) par page (stacké dans les variables d'environment)
  perPage: number;

  //nbre de boutons à générer
  numberPages: number = 0;

  //tableau reunissant le label de chaque page
  pages: number[] = [];

  //Elettery d'evenements
  @Output() setPaginate: EventEmitter<{ start: number, end: number }> = new EventEmitter()

  //Variable stockant la page actuelle
  currentPage: number = 1; // par défaut = 1

  constructor(
    private albumService: AlbumService
  ) {
    this.perPage = this.albumService.paginateNumberPage();

  }

  ngOnInit(): void {
    this.albumService.count().subscribe(num => {
      this.total = num
      this.numberPages = Math.ceil(this.total / this.perPage);
      for (let i = 1; i <= this.numberPages; i++) {
        this.pages.push(i);
      }
    })

  }

  next() {
    //si nous avons déjà atteint la dernière pagde de pagination
    if (this.currentPage < this.numberPages) {
      this.currentPage++; // revenir à la 1ère page
      //return;
    } //else {//sinon
    //this.currentPage++;// incrémenter
    //demander auparent d'afficher les albums suivats dadns la liste
    this.setPaginate.emit(this.setAblums(this.currentPage));

  }


  previous() {
    //si nous avons déjà atteint la dernière pagde de pagination
    if (this.currentPage > 1) {
      // this.currentPage = 1; // revenir à la 1ère page
      // return;
      this.currentPage--;// incrémenter
    } //else {//sinon
    //demander auparent d'afficher les albums suivats dadns la liste
    this.setPaginate.emit(this.setAblums(this.currentPage));
  }


changePage(page: number) {
  this.currentPage = page;
  //demander auparent d'afficher les albums suivats dadns la liste
  this.setPaginate.emit(this.setAblums(this.currentPage));
}
/**
 *  Fonction qui retourne le sens ensemble d'albums à afficher
 * @oaram page page courrante
 * @returns un sous ensemble du tableau en foction de la la page courrante
 * 
 * 0-- Album 1
 * 1-- Album 2
 * 2-- Album 3
 * 3-- Album 4
 * 4-- Album 5
 * 5-- Album 6
 * 6-- Album 7
 * 7-- Album 8
 * 8-- Album 9
 * 9-- Album 10
 *  */
setAblums(page: number): { start: number, end: number } {
  let start = (page - 1) * this.perPage;
  let end = start + this.perPage;

  // return {start: start, end: end}
  return { start, end };
}
}





