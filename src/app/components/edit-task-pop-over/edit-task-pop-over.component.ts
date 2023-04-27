import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { NavParams, ModalController } from '@ionic/angular';

import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-edit-task-pop-over',
  templateUrl: './edit-task-pop-over.component.html',
  styleUrls: ['./edit-task-pop-over.component.scss'],
  standalone: true,
  imports: [IonicModule,FormsModule]
})
export class EditTaskPopOverComponent  implements OnInit {
  @Input() id: any;
  descricao:any;
  titulo:any;

  dados:any;

  constructor(
    public navParams: NavParams,
    public modalController:ModalController,
    private apiService:ApiServiceService,
  ) { }

  ngOnInit() {
    this.apiService.getTaskById(this.id).subscribe(data => {
      this.id = Object.values(data)[0]
      this.titulo = Object.values(data)[1]
      this.descricao = Object.values(data)[2]
    })

  }

  fecharModal(){
    this.modalController.dismiss();
  }

  salvarTarefa(){
   const item = {
      id : this.id,
      titulo: this.titulo,
      descricao: this.descricao
   };
   this.apiService.updateTask(this.id, item)

   this.fecharModal()
  }


}
