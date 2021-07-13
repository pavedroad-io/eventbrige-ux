import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Provider } from '../../schemas/provider';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  submitted = false;
  provider = new Provider();

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

  newProvider() {
    console.log(this)
  }
}
