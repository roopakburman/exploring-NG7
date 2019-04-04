import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    // public canActivate: CanActivate,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
