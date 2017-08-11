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
    {img: 'assets/img/p1.jpeg', title: '3 BHK, Residential Apartment in Balewadi', address: 'Office No. 501/502, Fortune House,5th fl,Prabhat R , oad, Near Income Tax lane, Erandwane , Pune', pricemarket: '1 crore', price: '71.0 Lac', discount: '29', rent: '1 Lac', rentroi: '1.40' },
    {img: 'assets/img/p2.jpeg', title: '3 BHK, Residential Apartment in Erandwane', address: ' Erandwane Near Hotel, Erandwane, Pune, Maharashtra', pricemarket: '2 crore', price: '1.80 Cr', discount: '1.11', rent: '2 Lac', rentroi: '2.40'},
    {img: 'assets/img/p3.jpeg', title: '2 BHK, Residential Apartment in Charholi', address: 'Bhosari , Pune', pricemarket: '30 Lac', price: '25 Lac', discount: '16', rent: '0', rentroi: '0'},
    {img: 'assets/img/p4.jpeg', title: '1BHK Residential Apartment', address: 'S.no. 50, Platinum Classic, Above Vishweshwar Bank , Chandannagar, Nagar Road, Kharadi, Pune , Pune', pricemarket: '1 crore', price: 'Price on Request', discount: '0', rent: '0', rentroi: '0'},
    {img: 'assets/img/p5.jpeg', title: '4 BHK, Residential Apartment in Wanowrie', address: 'Floor Valley, Wanowrie, Pune, Maharashtra', pricemarket: '3.5 crore', price: '3 Crore', discount: '11', rent: '6 Lac', rentroi: '2'},
    {img: 'assets/img/p6.jpg', title: '1 BHK, Residential Apartment in Kiwale', address: 'Ravet , Pune', pricemarket: '30 Lac', price: '23 Lac', discount: '23', rent: '0', rentroi: '0'},
    {img: 'assets/img/p7.jpg', title: '3 BHK, Residential Apartment in Wakad', address: 'Wakad , Pune', pricemarket: '1 crore', price: '96 Lac', discount: '4', rent: '1 Lac', rentroi: '1'},
    {img: 'assets/img/p8.jpeg', title: '4 Bedroom, Farm House in Harpud Village', address: 'At, Post Harpud, Tal Velhe, Dist Pune, Harpud Village, Pune, Maharashtra', pricemarket: '50 Lac', price: '45 Lac', discount: '10', rent: '0', rentroi: '0'}
    ]
  }

  presentFilterModal() {
   let FilterModal = this.modalCtrl.create(Filter, { userId: 8675309 });
   FilterModal.present();
 }

}