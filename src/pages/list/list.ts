import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Filter } from '../filter/filter';
import { Details } from '../details/details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class List {

  list: Array<any>;
  details = Details;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.list=[
    {img: 'assets/img/p1.jpeg', title: '3 BHK, Residential Apartment in Balewadi', address: 'Office No. 501/502, Fortune House,5th fl,Prabhat R , oad, Near Income Tax lane, Erandwane , Pune', price: '71.0 - 74.3 Lac'},
    {img: 'assets/img/p2.jpeg', title: '3 BHK, Residential Apartment in Erandwane', address: ' Erandwane Near Hotel, Erandwane, Pune, Maharashtra', price: '1.95 Cr'},
    {img: 'assets/img/p3.jpeg', title: '2 BHK, Residential Apartment in Charholi', address: 'Bhosari , Pune', price: '26.8 Lac'},
    {img: 'assets/img/p4.jpeg', title: '1BHK Residential Apartment', address: 'S.no. 50, Platinum Classic, Above Vishweshwar Bank , Chandannagar, Nagar Road, Kharadi, Pune , Pune', price: 'Price on Request'},
    {img: 'assets/img/p5.jpeg', title: '4 BHK, Residential Apartment in Wanowrie', address: 'Floor Valley, Wanowrie, Pune, Maharashtra', price: '3 Crore'},
    {img: 'assets/img/p6.jpg', title: '1 BHK, Residential Apartment in Kiwale', address: 'Ravet , Pune', price: '22.3 - 27.8 Lac'},
    {img: 'assets/img/p7.jpg', title: '3 BHK, Residential Apartment in Wakad', address: 'Wakad , Pune', price: '96.0 Lac'},
    {img: 'assets/img/p8.jpeg', title: '4 Bedroom, Farm House in Harpud Village', address: 'At, Post Harpud, Tal Velhe, Dist Pune, Harpud Village, Pune, Maharashtra', price: '45 Lac'}
    ]
  }

  presentFilterModal() {
   let FilterModal = this.modalCtrl.create(Filter, { userId: 8675309 });
   FilterModal.present();
 }

}