import { Component, Prop, h,Event,EventEmitter, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  @State() inputValue: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() clickeventfromChild: EventEmitter;
  
 onClickMethod(){

  this.clickeventfromChild.emit(this.inputValue);
}
changeInputValue(e){
  this.inputValue=e.target.value;
}
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}
    <br></br>
    <input type='text' onInput={this.changeInputValue.bind(this)} id='abc' value={this.inputValue}/>
    <button onClick ={this.onClickMethod.bind(this)} >test</button>
    </div>;
  }
}
