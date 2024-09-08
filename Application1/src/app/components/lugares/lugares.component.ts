import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss'],
})
export class LugaresComponent  implements OnInit {

  @Input() lugares: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {}

  irALugar(unIdLugar:number){
    console.log('IdLugar: ', unIdLugar);
    this.router.navigate(['/pagina3', unIdLugar]);
  }

}
