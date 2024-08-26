import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  ngOnInit() {
  }
  
  toggleDarkTheme(event: any) {
    document.body.classList.toggle('dark', event.detail.checked);
    // Not Implemented
  }

  notificationsEnabled: boolean = true;

  constructor() {}
  // Not Implemented

  selectedLanguage: string = 'es';

  changeLanguage(event: any) {
    console.log('Idioma seleccionado:', event.detail.value);
    // Not Implemented
  }

  logout() {
    console.log('Cerrando sesión');
    // Not Implemented
  }
}
