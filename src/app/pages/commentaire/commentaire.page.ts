import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccueilService } from 'src/app/Services/accueil.service';
import { CommentaireService } from 'src/app/Services/commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.page.html',
  styleUrls: ['./commentaire.page.scss'],
})
export class CommentairePage implements OnInit {

  //detail regionnnnnnnnn
  detailregion: any;
  idnomregion:any;
  id_regions:any;
  image=''
  nom=''
  superfie=''

  //ajouter commentaire
  message:any;
  idnomrg: any;
  constructor(private accueilService: AccueilService,private routes: ActivatedRoute, private commentaireService: CommentaireService) { }

  ngOnInit() {

      //detail regionnnnnnnnn
     this.id_regions = +this.routes.snapshot.params["idnomregion"];

    console.log("idhh  "+this.id_regions)
    this.accueilService.getUnRegion(this.id_regions).subscribe(data=>{
      this.detailregion=data;
      this.image=this.detailregion.imgregion
      this.nom=this.detailregion.nom
      this.superfie=this.detailregion.superfie
      console.log(this.detailregion.imgregion)
    })
  }

  AjouterLeComment(){
    console.log(this.id_regions)
    this.commentaireService.AjouterCommentaire(this.message, this.id_regions).subscribe(data=>{

    })
  }
}
