import { Component, OnInit } from '@angular/core';
import { AccueilService } from 'src/app/Services/accueil.service';
import { AnneesService } from 'src/app/Services/annees.service';
import { NomregionService } from 'src/app/Services/nomregion.service';
import { PaysService } from 'src/app/Services/pays.service'
import { RegionService } from 'src/app/Services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  styleUrls: ['./regions.page.scss'],
})
export class RegionsPage implements OnInit {
  //pays ajout
  nompays: any;
  supperficie: any;

  //uuuuuuuuuuuuuuuuuuuuuuuuuuuuu Ajouter NomRegion
 nom: any;
 superfie: any ;
 coderegion: any ;
 activite: any ;
 pays: any;
 imageregion:any

  //Ajouter Annee
  date: any;

    //AfficherPays
    paysliste: any;

    //yyyyyyyyy Afficher Region
    afficherRegion: any;

    //================= Ajouter une region=========
    habitants: any;
    nomrg: any;






  //pays ajout
  AjoutduPays(){
    this.paysService.AjouterPays(this.nompays, this.supperficie).subscribe(data => {

      console.log(this.nompays);
      console.log(data);
    })
  }



    //AfficherPays
  AjoutDuAnne(){
    this.anneesService.AjouterAnnee(this.date).subscribe(data => {
      console.log(data)
    })
  }

//uuuuuuuuuuuuuuuuuuuuuuuuuuuuu Ajouter NomRegion

//recuperer l'image

Recupererlimage(event: any){
  this.imageregion=event.target["files"][0];
}

 AjouterLeNomRegion(){
  this.nomRegionSercice.AjouterNomRegion(this.nom, this.superfie, this.coderegion, this.activite, this.pays, this.imageregion).subscribe(data =>{
//ajout pas necessaire
  })
 }


 //////////ttttttttttttttt Ajouter region
AjouterDeRegion(){
  //alert(this.nomrg);
  this.regionn.AjouterRegion(this.habitants, this.nomrg).subscribe(data =>{

  })
}










  constructor(private paysService: PaysService, private anneesService: AnneesService, private nomRegionSercice: NomregionService, private accueilService: AccueilService, private regionn: RegionService ) { }

  ngOnInit() {
    //Afficher Payyyyyyyyyyyssssssssssssss
    console.log()
    this.paysService.AfficherPays().subscribe(data =>{
      this.paysliste= data;
    })

    //yyyyyyyyy Afficher Region
    this.accueilService.getRegion().subscribe(data=>{
      this.afficherRegion= data;

    })

  }


}




