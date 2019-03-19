import { Component, OnInit } from '@angular/core';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faAngular, faNode, faDocker, faReact, faCss3Alt, faHtml5, faGithub, faJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  icons = {
    faFileAlt,
    faLinkedin,
    faAngular,
    faNode,
    faDocker,
    faReact,
    faCss3Alt,
    faHtml5,
    faGithub,
    faJs
  };

  constructor() { }

  ngOnInit() {
  }

}
