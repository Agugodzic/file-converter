import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileRequest } from '../models/FileRequest';
import { ConverterApiService } from '../services/converterApi.service';
import { FileResponse } from '../models/FileResponse';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  private fileBase64 :string = '';
  private filename:string = '';
  public loaderConverter:boolean = false;
  public converterButton:boolean = true;
  public downloadButton:boolean = false;
  public downloadUrl:string = '';

  constructor(private formBuilder: FormBuilder, private converterService:ConverterApiService){
  }


  public fileForm = this.formBuilder.group({
    file:''
  });

  public selectFile(event:any):void{
    if(event.target.files[0]){
      let image = event.target.files[0];
      this.filename = image.name;

      this.extraerBase64(image).then((Image:any) => {
        this.fileBase64 = Image.base;
      });
    }
  }

  public submitFile(){
    this.loaderConverter = true;

    let request:FileRequest = {
      input:'base64',
      filename:this.filename,
      file:this.fileBase64.split(';base64,')[1],
      outputformat:'pdf'
    };

    this.converterService.converterFile(request).subscribe(
      (response:FileResponse)=>{
        console.log(response);
        this.loaderConverter = false;
        this.converterButton= false;
        this.downloadButton= true;
        if(response.convertionStatus == 'ok'){
          this.downloadUrl = response.url;
        }else{
          alert('Ha ocurrido un error');
        }
      }
    );

  }

  public downloadFile(){
    this.converterButton= true;
    this.downloadButton= false;
    window.open(this.downloadUrl, '_blank');
  };


  extraerBase64 = async ($event: any) => new Promise(
    (resolve, reject):any => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      alert(e);
      return null;
    }
  })
}
