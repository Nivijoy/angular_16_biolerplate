import { Component, OnInit } from '@angular/core';
import { CurrentUser } from "src/app/_service/store";
import { Router } from '@angular/router';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private currentUser: CurrentUser,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.currentUser.getData().token) {
      this.router.navigate(['/page'])
    }
  }

}
