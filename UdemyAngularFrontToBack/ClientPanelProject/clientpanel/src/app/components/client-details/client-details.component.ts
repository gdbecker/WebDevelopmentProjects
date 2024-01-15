import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})
  
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];

    // get client from service
    this.clientService.getClient(this.id).subscribe(client => {
      if (client !== null) {
        if (client.balance > 0) {
          this.hasBalance = true;
        }
      }
      
      this.client = client;
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    confirm("Balance updated!");
    this.showBalanceUpdateInput = false;
  }

  onDeleteClick() {
    if (confirm("Are you sure you want to delete this client?")) {
      this.clientService.deleteClient(this.client);
      this.router.navigate(['/']);
    }
  }
}
