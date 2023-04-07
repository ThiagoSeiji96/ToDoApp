import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { NavParams, ModalController } from '@ionic/angular';

import { ApiServiceService } from 'src/app/services/api-service.service';



@Component({
  selector: 'app-new-task-pop-over',
  templateUrl: './new-task-pop-over.component.html',
  styleUrls: ['./new-task-pop-over.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule]
})


export class NewTaskPopOverComponent {

  id: any;
  titulo: any;
  descricao: any;

  constructor(
    public navParams: NavParams,
    public modalController:ModalController,
    private apiService:ApiServiceService,
  ) { }

  fecharModal(){
    this.modalController.dismiss();
  }

  salvarTarefa(){
   const item = {
      id : this.id,
      titulo: this.titulo,
      descricao: this.descricao
   };

   this.apiService.createTask(item);

   this.fecharModal()
  }

}
