import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddressGroupComponent } from './address-group/address-group.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddressGroupComponent],
  templateUrl: './main.html',
})
export class App {
  form: FormGroup = this.fb.group({
    displayName: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {}

  submit() {
    console.log(this.form.value);
  }
}

bootstrapApplication(App);
