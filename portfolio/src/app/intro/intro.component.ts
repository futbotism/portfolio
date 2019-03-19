import { Component, OnInit } from '@angular/core';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  icons = {
    faFileAlt,
    faLinkedin
  };

  constructor() { }

  ngOnInit() {
  }

}
