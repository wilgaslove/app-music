import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { fadeInAnimation } from '../animation.module';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
 animations: [fadeInAnimation]
})

export class OpenCloseComponent {

  ngOnInit():void {
    this.myObservable.subscribe();
  }
  //Observable: produit|objet|message qui sera diffusé
  //Observer: l'élément qui souscrit pour un produit|objet|messasge sonné
  //new Observable((observer)=> {})
 myObservable = new Observable((observer: Observer<string>)=>{
  //le code à exécuter quand on récupère la donnée
 setTimeout(() => {observer.next("ablum1")}, 1000 );
 setTimeout(() => {observer.next("ablum2")}, 1000 );
 setTimeout(() => {observer.next("ablum3")}, 1000 );
 setTimeout(() => {observer.next("ablum5")}, 1000 );
})

 isOpen: boolean = true;
 toggle(){
  this.isOpen = !this.isOpen
 }

}
