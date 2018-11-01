import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstant } from "../app.constant";
import { AccountDTO } from "../models/account-dto.model";

@Injectable()
export class ApiService {
    baseUrl: string;
    httpOptions: any;

    constructor(private http: HttpClient) {
        this.baseUrl = AppConstant.BACKEND.BASE_URL;
    }

    getAccounts(): Observable<AccountDTO[]> {
        const httpHeaders = new HttpHeaders()
        .set("Content-Type","application/json")
        .set("sf_user","jlorca.community01@gmail.com")
        .set("sf_password","lorkytest00oNIOW0hZrMAppnk8IBasYuI7s");
        const httpOptions = {
            headers: httpHeaders
        };

        return this.http.get<AccountDTO[]>(this.baseUrl + '/accounts', httpOptions);
    }

    getAccount(accountId): Observable<AccountDTO> {
        const httpHeaders = new HttpHeaders()
            .set("Content-Type","application/json")
            .set("sf_user","jlorca.community01@gmail.com")
            .set("sf_password","lorkytest00oNIOW0hZrMAppnk8IBasYuI7s");

        const httpOptions = {
            headers: httpHeaders
        };

        return this.http.get<AccountDTO>(this.baseUrl + '/account/' + accountId, httpOptions);
    }
}