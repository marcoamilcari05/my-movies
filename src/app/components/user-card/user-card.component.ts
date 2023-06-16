import { Component, ComponentFactory, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user: User | undefined = undefined;
  @Input() index: number = 0;

  @Output() userEmit = new EventEmitter<User>();
  @Output() userIdEmit = new EventEmitter<number>();

  onDetailsClick = () => {
    console.log('details click');
    this.userEmit.emit(this.user);
  }

  onRemoveClick = () => {
    console.log('click remove');
    this.userIdEmit.emit(this.user?.id);
  }

}
