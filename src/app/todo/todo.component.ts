import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  showEvents: string[] = [];

  constructor() { }


  ngOnInit(): void {
    console.log('todo init');
    window.removeEventListener('someEvent', this.onClickSbk, true);
    window.addEventListener('someEvent', this.onClickSbk, true);

  }

  ngOnDestroy(): void {
    //window.removeEventListener('someEvent', this.onClickSbk, true);
  }

  onClickSbk = (event: any): void => {
    console.log('on click event');
    setTimeout(() => {
      console.log("showevents array", this.showEvents);
    }, 100);
  }

  send() {
    var myCustomEvent = new Event('someEvent');
    window.dispatchEvent(myCustomEvent);
  }
}
