import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.component.html',
  styleUrls: ['./newservice.component.css'],
})
export class NewserviceComponent implements OnInit {
  servcieListItems = [
    {
      title: 'Knative function',
      type: 'function',
      icon: 'build',
      logo: 'https://avatars.githubusercontent.com/u/35583233?s=200&v=4',
      route: '',
      disabled: false,
    },
    {
      title: 'OpenFaaS function',
      type: 'function',
      icon: 'build',
      logo: 'https://www.openfaas.com/images/openfaas/whale.png',
      route: '',
      disabled: false,
    },
    {
      title: 'Go worker pool microservice',
      type: 'microservice',
      icon: 'build',
      logo: 'https://dalmarcogd.github.io/gwp/golang-worker.png',
      route: '',
      disabled: false,
    },
    {
      title: 'Go data manager microservice',
      type: 'microservice',
      icon: 'build',
      logo: 'https://3.bp.blogspot.com/-UsQwhhKUlME/Wr8nD7zEnXI/AAAAAAAASLU/zSIRkmmIArQP4xl18anTg6FUP93FK23igCLcBGAs/s1600/Model%2BView%2BController%2B-%2BMVC.png',
      route: '',
      disabled: false,
    },
    {
      title: 'Go tri-lateral microservice',
      type: 'microservice',
      icon: 'build',
      logo: 'https://static.packt-cdn.com/products/9781838643317/graphics/7289ebef-6d03-47b0-a4a5-f7c497ef2720.png',
      route: '',
      disabled: false,
    },
    {
      title: 'Slack source',
      type: 'source',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      disabled: false,
    },
    {
      title: 'Github source',
      type: 'source',
      icon: 'build',
      logo: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png',
      route: '',
      disabled: false,
    },
    {
      title: 'Slack trigger',
      type: 'trigger',
      icon: 'build',
      logo: 'https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg',
      route: '',
      disabled: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
