import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {


  public appPages = [
    { title: 'Accueil', url: '/sidemenu/accueil', icon: 'mail' },
    { title: 'Pays', url: '/sidemenu/pays', icon: 'paper-plane' },
    { title: 'Regions', url: '/sidemenu/regions', icon: 'heart' },
    { title: 'Commentaires', url: '/sidemenu/commentaire', icon: 'archive' },

  ];

  constructor() { }

  ngOnInit() {
  }

}
