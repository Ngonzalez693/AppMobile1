import { Component, OnInit } from '@angular/core'
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Personaje ${count + i}`);
    }
  }
  
  onIonInfinite(ev: Event) {
    this.generateItems();
    setTimeout(() => {
      const infiniteScroll = ev.target as HTMLIonInfiniteScrollElement;
      infiniteScroll.complete();
    }, 500);
  }

  addToFavorites(item: string) {
    console.log('Agregar a favoritos:', item);
    // Not Implemented
  }
  
}
