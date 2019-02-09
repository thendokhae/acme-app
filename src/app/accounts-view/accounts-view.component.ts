import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../models/account';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accounts-view',
  templateUrl: './accounts-view.component.html',
  styleUrls: ['./accounts-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountsViewComponent implements OnInit {
  withdrawalAmount = 0;
  accounts$: Account[] = [];
  errorOccured = false;
  selectedAccount: Account = new Account();
  constructor(private accountService: AccountService, private modalService: NgbModal, private config: NgbModalConfig) {
    this.accountService.getAllAcccount().subscribe(data => {
      if (data) {
        data.forEach(element => {
          const account: Account =  new Account();
          account.accountNumber = element['account_number'];
          account.accountType = element['account_type'];
          account.balance = parseFloat(element['balance']);
          this.accounts$.push(account);
        });
      }
    }, error => {
      this.errorOccured = true;
    });

    this.config.backdrop = 'static';
  }

  ngOnInit() {
  }

  canWithdraw(account: Account) {
    if ((account.accountType  === 'cheque' && account.balance > -500) || (account.accountType === 'savings' && account.balance > 0)) {
      return true;
    } else {
      return false;
    }
  }

  validWithdrawal(account: Account) {
    // tslint:disable-next-line:max-line-length
    if ((account.accountType === 'cheque' && account.balance - this.withdrawalAmount >= -500) || (account.accountType === 'savings' && account.balance - this.withdrawalAmount >= 0)) {
      return true;
    } else {
      return false;
    }
  }

  doWithdrawal(account: Account, content) {
    this.selectedAccount = account;
    this.withdrawalAmount = this.getMaximumWithdrawalAmount();
    this.confirmWithdrawal();
    // realised that this was not part of the specifications
    // this.modalService.open(content, { centered: true });
  }

  getAccountsTotal() {
    let balance = 0;
    this.accounts$.forEach(acc => {
      balance += acc.balance;
    });
    return balance;
  }

  getMaximumWithdrawalAmount() {
    if (this.selectedAccount.accountType === 'cheque') {
       return this.selectedAccount.balance + 500;
    } else {
      return this.selectedAccount.balance;
    }
  }

  confirmWithdrawal() {
    this.selectedAccount.balance -= this.withdrawalAmount;
    alert('Success');
    // this.modalService.dismissAll();
  }

}
