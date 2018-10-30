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
  /*private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];*/
  //public items: Array<{ title: string; note: string; icon: string }> = [];
  public accounts :AccountDTO[] = [];

  constructor(private apiService: ApiService) {
    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  ngOnInit() {
    this.apiService.findAllAccounts().subscribe(data => {
      this.accounts = data;
    }, () => {});
  }
}
