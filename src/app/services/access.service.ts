import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../_enums/apiPaths';
import { HttpClient } from '@angular/common/http';
import { user } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  onRegister(user: user) {
    let url = `${this.baseUrl}/${ApiPaths.Register}`;
    console.log(url);
    console.log(user);

    if(!user) { return }

    this.http.post(url, user).subscribe(data => { console.log(data) });
  }



}
