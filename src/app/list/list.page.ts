import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AccountDTO } from '../models/account-dto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sf-accounts',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public accounts : AccountDTO[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getAccounts().subscribe(data => {
      this.accounts = data;
    }, () => {});
  }

  itemSelected(accountId: number) {
    this.router.navigate(['/account-detail/' + accountId]);
  }
}
