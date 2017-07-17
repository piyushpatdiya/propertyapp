import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { List } from '../list/list';
import { MapModal } from '../modal-page/modal-page';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  expanded: Boolean;
  grid: Array<any>;
  list = List;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.expanded = true;

    this.grid = [
     {img: 'assets/img/apartment.jpg', title: 'flat', icon: 'ios-home-outline'},
     {img: 'assets/img/rowhouse.jpg', title: 'row house', icon: 'ios-bowtie-outline'},
     {img: 'assets/img/bunglow.jpg', title: 'bungalow', icon: 'ios-shirt-outline'},
     {img: 'assets/img/farmhouse.jpg', title: 'farm house', icon: 'ios-headset-outline'},
     {img: 'assets/img/office.jpg', title: 'office', icon: 'ios-headset-outline'},
     {img: 'assets/img/showroom.jpg', title: 'showroom', icon: 'ios-headset-outline'},
     {img: 'assets/img/warehouse.jpg', title: 'warehouse', icon: 'ios-headset-outline'}
     ]
  }

  presentModal() {
    
    
    let modal = this.modalCtrl.create(MapModal);
    modal.present();
  }

}
