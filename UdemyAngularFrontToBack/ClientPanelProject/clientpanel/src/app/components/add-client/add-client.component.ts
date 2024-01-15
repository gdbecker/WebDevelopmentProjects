import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
  
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnAdd: boolean;
  @ViewChild('clientForm') form: any;
  
  constructor(
    private clientService: ClientService, 
    private settingsService: SettingsService, 
    private router: Router
  ) { }

  ngOnInit() {
   this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    console.log('submitted')
    
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      // show error
      alert("Please fill out all fields correctly");
    } else {
      console.log(value)
      // add new client
      this.clientService.addClient(value);
        
      // show message
      confirm("New client added successfully");
      
      // redirect to dashboard
      this.router.navigate(['/']);
    }
  }
}
