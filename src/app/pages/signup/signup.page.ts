import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

        form: any = {
          username: null,
          email: null,
          password: null
        };
        isSuccessful = false;
        isSignUpFailed = false;
        errorMessage = '';

//  username: any;
//  email: any;
//  password: any;


  constructor( private authService: AuthService,
              //pour rediriger vers accueuil

    private route: Router

    ) { }

  // async ouvrirPopup(data) {
  //   const modal = await this.modalController.create({
  //     component: PopupdtiragePage,
  //     componentProps: {

  //     },
  //     backdropDismiss: false
  //   });
  //   // modal.onDidDismiss().then((modelData)=>{
  //   //   if (modelData !== null) {
  //   //     this.modelData = this.modelData.data;
  //   //     // console.log('Les données du Pop Up sont : ' + modelData.data);
  //   //   }
  //   // });
  //   return await modal.present();
  // }
  // async popupExist() {
  //   Swal.fire({
  //     title:'Desolé',
  //     text:'Ce tirage existe déjà',
  //     icon:'error',
  //     heightAuto: false,
  //     confirmButtonColor:'#FF7900'
  // });

  // }



  ngOnInit() {
     }

     onSubmit(): void {
      const { username, email, password } = this.form;

      this.authService.register(username, email, password).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          //pour rediriger vers accueuil
          if(this.isSuccessful == true){
            this.route.navigateByUrl("sidemenu/accueil")
          }
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }



}
