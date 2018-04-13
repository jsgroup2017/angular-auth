import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {

  }
  register() {
    this.loading = true;
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error.error.error);
          this.loading = false;
        });
  }
}
