import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private user:User;
  private baseURI : string = 'http://localhost:8000/';
  private headers = new HttpHeaders().set('Content-Type','application/json')
 
  constructor(private http:HttpClient) { }

  createUser(user:User){

    return this.http.post(this.baseURI , user,{ headers:this.headers});
  }
  readUsers(){

    return this.http.get(this.baseURI ,{ headers:this.headers});
  }

  updateUser(user:User) {

    return this.http.put(this.baseURI , user, { headers:this.headers});
  }
  deleteUser(id:string){

    return this.http.delete(this.baseURI + id,{ headers:this.headers});
  }

  setter(user: User) {
   this.user = user;
  }

  getter(): User {
    return this.user;
  }
}
