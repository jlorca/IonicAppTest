import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDTO } from '../models/account-dto.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  public account : AccountDTO = null;
  public imageUrl : string = null;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => 
      {
        this.apiService.getAccount([params['id']]).subscribe(data => {
          this.account = data[0];
          this.imageUrl = data[0].Image_URL__c;
        }, () => {})
      }
    );
  }

  clickBackHandler() {
    this.router.navigate(['/sf-accounts/']);
  }

  clickEditHandler() {
    this.router.navigate(['/account-edition/' + this.account.Id, this.account]);
  }
}
