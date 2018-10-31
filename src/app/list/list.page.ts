import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AccountDTO } from '../models/account-dto.model';

@Component({
  selector: 'app-sf-accounts',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public accounts :AccountDTO[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.findAllAccounts().subscribe(data => {
      this.accounts = data;
    }, () => {});
  }

  itemSelected(accountId: number) {
    alert('selected = ' + accountId);
  }
}
