import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle: string = 'My App';

  constructor(
    public authService: AuthService,
    // public router: Router
  ) { }

  ngOnInit() {
  }

}
