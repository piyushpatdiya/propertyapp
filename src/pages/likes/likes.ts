import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Details } from '../details/details';


@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html'
})
export class Likes {

  list: Array<any>;
  details = Details;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list=[
    {img: 'assets/img/p1.jpeg', title: '3 BHK, Residential Apartment in Balewadi', address: 'Office No. 501/502, Fortune House,5th fl,Prabhat R , oad, Near Income Tax lane, Erandwane , Pune', pricemarket: '1 crore', price: '71.0 Lac', discount: '29%', },
    {img: 'assets/img/p2.jpeg', title: '3 BHK, Residential Apartment in Erandwane', address: ' Erandwane Near Hotel, Erandwane, Pune, Maharashtra', pricemarket: '2 crore', price: '1.95 Cr'},
    {img: 'assets/img/p3.jpeg', title: '2 BHK, Residential Apartment in Charholi', address: 'Bhosari , Pune', pricemarket: '30 Lac', price: '26.8 Lac'},
    {img: 'assets/img/p4.jpeg', title: '1BHK Residential Apartment', address: 'S.no. 50, Platinum Classic, Above Vishweshwar Bank , Chandannagar, Nagar Road, Kharadi, Pune , Pune', pricemarket: '1 crore', price: 'Price on Request'},
    {img: 'assets/img/p5.jpeg', title: '4 BHK, Residential Apartment in Wanowrie', address: 'Floor Valley, Wanowrie, Pune, Maharashtra', pricemarket: '3.5 crore', price: '3 Crore'},
    {img: 'assets/img/p6.jpg', title: '1 BHK, Residential Apartment in Kiwale', address: 'Ravet , Pune', pricemarket: '30 Lac', price: '22.3 - 27.8 Lac'},
    {img: 'assets/img/p7.jpg', title: '3 BHK, Residential Apartment in Wakad', address: 'Wakad , Pune', pricemarket: '1 crore', price: '96.0 Lac'},
    {img: 'assets/img/p8.jpeg', title: '4 Bedroom, Farm House in Harpud Village', address: 'At, Post Harpud, Tal Velhe, Dist Pune, Harpud Village, Pune, Maharashtra', pricemarket: '50 Lac', price: '45 Lac'}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikesPage');
  }

}
