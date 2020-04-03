import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
  user: any = {
    name: '',
    address: ''
  };
  sampleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.validateForm();

  }

  nexts() {
    this.router.navigate(['/user/c']);
  }

  validateForm() {
    this.sampleForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
}