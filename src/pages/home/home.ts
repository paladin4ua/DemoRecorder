import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  file: MediaObject;

  bitRate: number;
  sampleRate: number;

  constructor(public navCtrl: NavController, private media: Media, private alertCtrl: AlertController) {

  }



  startRecord() {

    this.file = this.media.create('/storage/emulated/0/Audio/test' + this.sampleRate + 'x' + this.bitRate + 'kb.m4a');

    this.file.onError.subscribe((err) => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: JSON.stringify(err),
        buttons: ['Dismiss']
      });
      alert.present();
    });


    this.file.onSuccess.subscribe(() => {
      let alert = this.alertCtrl.create({
        title: 'Success',
        buttons: ['Dismiss']
      });
      alert.present();
    })

    this.file.startRecord(this.sampleRate, this.bitRate * 1024);
  }


  stopRecord() {
    this.file.stopRecord();
  }


}
