import { Injectable } from "@angular/core";
import { AppConstant } from "../app.constant";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AccountDTO } from "../models/account-dto.model";

@Injectable()
export class ApiService {
    baseUrl: string;
    httpOptions: any;

    constructor(private http: HttpClient) {
        this.baseUrl = AppConstant.BACKEND.BASE_URL;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'sf_user': 'jlorca.community01@gmail.com',
                'sf_password': 'lorkytest00oNIOW0hZrMAppnk8IBasYuI7s'
            })
        };
    }

    findAllAccounts(): Observable<AccountDTO[]> {
        return this.http.put<AccountDTO[]>(this.baseUrl + '/accounts', this.httpOptions);
    }
}