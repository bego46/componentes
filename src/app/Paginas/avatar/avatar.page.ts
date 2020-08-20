import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  public title = "avatar";
  public anime : any[] = [
    {
      src: '/assets/img/one-piece.jpg',
      name: 'One Piece',
      redirectTo: '/'
    },
    {
      src: '/assets/img/kny.jpg',
      name: 'Kimetsu No Yaiba',
      redirectTo: '/'
    },
    {
      src: '/assets/img/uzaki.jpg',
      name: 'Uzaki-chan',
      redirectTo: '/'
    },
    {
      src: '/assets/img/kanojo.jpg',
      name: 'Kanojo',
      redirectTo: '/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
