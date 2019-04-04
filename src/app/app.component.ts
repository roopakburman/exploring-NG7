import { Component } from '@angular/core';
import { AuthService } from "../app/shared/services/auth.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = '';
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
}
/**/