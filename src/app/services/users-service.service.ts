import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  public users = new BehaviorSubject([]);
  currentUsers = this.users.asObservable();

  constructor(public http: HttpClient) {
  }

  public set_users(user: never[]) {
    this.users.next(user);
  }

  public get_data(){
    const headers = {'content-type': 'application/json'}
    this.http.get("http://localhost:8080/user",
      {'headers': headers, observe: 'response'}).subscribe(
      res => {
        this.set_users(res.body as any)
      } ,
      error => {
        console.log("Error => " , error)
      }
    );
  }


}
