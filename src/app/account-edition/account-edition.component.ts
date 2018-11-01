import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDTO } from '../models/account-dto.model';

@Component({
  selector: 'app-account-edition',
  templateUrl: './account-edition.component.html',
  styleUrls: ['./account-edition.component.scss']
})
export class AccountEditionComponent implements OnInit {

  public account : AccountDTO = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => 
      {
        this.account = new AccountDTO(params['Id'], params['Name'], params['Website'], params['Type'], params['Rating']);
      }
    );
  }

  clickBackHandler() {
    this.router.navigate(['/account-detail/' + this.account.Id]);
  }

  saveAccount() {
    alert("Save!");
  }
}
