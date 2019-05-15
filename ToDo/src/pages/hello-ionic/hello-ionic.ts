import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush, Button } from 'ionic-angular';

/**
 * Generated class for the HelloIonicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloIonicPage');
  }

  /*ionViewDidEnter() void {
    const { description, index } = this.navCtrl.getByIndex(0).data;
    if (description && index === undefined){
      const newTask = {
        description: description, 
        done: false 
      };
        
      this.tasks.push(newTask);
    } else if (index !== undefined){
      this.tasks[index].description = description;
    }
  }*/

}


