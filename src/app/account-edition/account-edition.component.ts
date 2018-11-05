import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AccountDTO } from '../models/account-dto.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account-edition',
  templateUrl: './account-edition.component.html',
  styleUrls: ['./account-edition.component.scss']
})
export class AccountEditionComponent implements OnInit {

  public account : AccountDTO;
  editAccountForm: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, 
    private toastController: ToastController, private apiService: ApiService) {
    this.editAccountForm = this.formBuilder.group({
      accountName: [null, Validators.required],
      accountWebsite: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => 
      {
        this.account = new AccountDTO(params['Id'], params['Name'], params['Website'], params['Type'], params['Rating']);
        this.setFormValue(this.account);
      }
    );
  }

  clickBackHandler() {
    this.router.navigate(['/account-detail/' + this.account.Id]);
  }

  async clickSaveHandler() {
    if (this.editAccountForm.valid) {
      this.prepareDataModel();

      this.apiService.updateAccounts(this.account).subscribe(data => {
        this.router.navigate(['/account-detail/' + this.account.Id]);
      }, () => {});

    } else {
      const toast = await this.toastController.create({
        message: 'Account not valid!',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

  setFormValue(account: AccountDTO): void {
    this.editAccountForm.reset({
      accountName: account.Name,
      accountWebsite: account.Website
    });
  }

  prepareDataModel(): void {
    this.account.Name = this.editAccountForm.get('accountName').value;
    this.account.Website = this.editAccountForm.get('accountWebsite').value;
  }
}
