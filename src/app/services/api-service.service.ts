import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl= 'https://localhost:7110/api'
  handleError: any;

  constructor(private http: HttpClient) { }

  getAllTasks(){
    let data = this.http.get(`${this.apiUrl}/tarefa`);
    return data
  }

  createTask(item: any) {
    return this.http.post(`${this.apiUrl}/tarefa`, item).subscribe((res) => {
    });
  }

  deleteTask(id:any){
    return this.http.delete(`${this.apiUrl}/tarefa/${id}`).subscribe((res) => {
      console.log(res)
    })
  }
}
