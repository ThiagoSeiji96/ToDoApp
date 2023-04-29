import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { ApiServiceService } from 'src/app/services/api-service.service';
import { NewTaskPopOverComponent } from 'src/app/components/new-task-pop-over/new-task-pop-over.component';
import { EditTaskPopOverComponent } from 'src/app/components/edit-task-pop-over/edit-task-pop-over.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ToDoListPage implements OnInit {
  dados:any;

  constructor(private apiService:ApiServiceService, public modalController:ModalController ) { }

  ngOnInit() {
    this.getTarefas();
  }

  getTarefas(){
    this.apiService.getAllTasks().subscribe(data => {
      this.dados = data
    })
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: NewTaskPopOverComponent,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
    window.location.reload();
  }


  async editTask(id:any) {
    const modal = await this.modalController.create({
      component: EditTaskPopOverComponent,
      componentProps: {id}

    })
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
    window.location.reload();
  }

  async deleteTask(id:any) {
    this.apiService.deleteTask(id).subscribe(() => console.log('item excluido!'),
    error => console.error(error))

    window.location.reload();
  }

}
