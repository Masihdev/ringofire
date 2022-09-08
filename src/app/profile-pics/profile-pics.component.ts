import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-pics',
  templateUrl: './profile-pics.component.html',
  styleUrls: ['./profile-pics.component.scss']
})
export class ProfilePicsComponent implements OnInit {

  allProfilePics = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.svg', '7.png', '8.svg', '9.svg'];
  
  constructor(public dialogRef: MatDialogRef<ProfilePicsComponent>) { }

  ngOnInit(): void {
  }


 
}
