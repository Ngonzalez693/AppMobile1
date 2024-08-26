import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Lugar ${count + i}`);
    }
  }
  
  onIonInfinite(ev: Event) {
    this.generateItems();
    setTimeout(() => {
      const infiniteScroll = ev.target as HTMLIonInfiniteScrollElement;
      infiniteScroll.complete();
    }, 500);
  }
}