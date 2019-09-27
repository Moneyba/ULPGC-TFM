import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ActionSheetController, AlertController, Platform} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
      private http: HttpClient,
      private camera: Camera,
      private actionSheetController: ActionSheetController,
      private platform: Platform,
      private alertCtrl: AlertController
  ) { }

  public actionSheetCameraOptions(): Promise<CameraOptions> {
    return new Promise((resolve, reject) => {
      const actionSheet = this.actionSheetController.create({
        header: 'Selecciona una de las siguientes opciones',
        buttons: [
          {
            text: "Cámara",
            handler: () => {
              const options: CameraOptions = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.CAMERA,
              };
              resolve(options);
            }
          },
          {
            text: "Galería de fotos",
            handler: () => {
              let options: CameraOptions = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                correctOrientation: true,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              };
              resolve(options);
            }
          },
          {
            text: "Cancelar",
            role: "cancel",
            handler: () => {
              reject(null);
            }
          }
        ]
      }).then(actionSheet => {
        actionSheet.present();
      });
    })

  }

  public async uploadBase64ImageToCloudinary(base64image: string, preset: string): Promise<string> {

      return this.http.post(environment.cloudinaryUploadAddress, {
        file: base64image,
        upload_preset: preset
      }).toPromise().then((res: any) => {
        return res.secure_url;
      })
    }

}
