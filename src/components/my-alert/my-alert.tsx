import { Component, Prop, h,Event,EventEmitter,Listen } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-alert',
  styleUrl: 'my-alert.css',
  shadow: true,
})
export class MyAlert {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Listen('clickeventfromChild')
  handleClickeventfromChild(e){
    this.last = e.detail;
    console.log(e)
  } 


  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return  <my-component first={this.first} last={this.last} ></my-component>;
  }
}
