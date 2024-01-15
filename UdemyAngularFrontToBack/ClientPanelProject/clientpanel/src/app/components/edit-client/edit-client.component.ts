import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
  
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  };

  disableBalanceOnEdit: boolean;
  
  constructor(
    private clientService: ClientService,
    private settingsService: SettingsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
    
    // get id from url
    this.id = this.route.snapshot.params['id'];

    // get client from service
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });
  }

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    console.log(value);
    if (!valid) {
      alert("Please fill out all fields");
    } else {
      // add id to client
      value.id = this.id;
      
      // update client in service
      this.clientService.updateClient(value);
      confirm("Client updated");
      
      this.router.navigate(['/client/' + this.id]);
    }
  }
}
