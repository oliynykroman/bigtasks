import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  styleUrls: ['./text-page.component.scss']
})
export class TextPageComponent implements OnInit {

  public dublicateText: boolean = false;
  public textObject = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas posuere volutpat. Donec auctor id sem ac pellentesque. Praesent vehicula nunc ut nisi laoreet pharetra. Etiam vulputate lacus tempor justo tincidunt, vitae commodo ligula imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus sapien massa. Vivamus euismod cursus augue, ac dapibus ligula cursus vulputate. Praesent consequat arcu vitae neque laoreet pharetra. Nam sollicitudin ex et justo molestie maximus. Mauris eu est placerat sapien scelerisque ultrices sed vitae orci. Vivamus et nisi libero. Duis vestibulum tortor nec malesuada varius. Aliquam tempus lobortis scelerisque. Pellentesque augue lacus, laoreet in est ac, venenatis facilisis purus. In tincidunt porta gravida. Nulla pulvinar feugiat mauris id sollicitudin. In venenatis rhoncus leo, eu dictum ligula molestie sed. Nullam scelerisque pellentesque nunc, vitae laoreet mauris pulvinar id. Cras viverra dui erat, at tristique mi porta a. Morbi quis erat auctor, euismod ante placerat, porta mauris. Praesent scelerisque, tortor eu porta vulputate, tortor ligula consectetur lorem, sit amet ornare eros velit ut nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque porttitor pretium nisi in finibus. Donec eget lorem non diam consectetur fermentum. Aenean volutpat convallis sodales. Duis congue tincidunt.'
  }
  constructor() { }

  ngOnInit() {
  }
  dublicate() {
    this.dublicateText = !this.dublicateText;
  }
}
