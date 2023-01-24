import { Component, AfterViewInit } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-test';
  //variable for ngif, starts with false
  responseReceived: boolean = false;
  //variable that will hold data from response
  data:any;

  constructor(){
    //make request and store it on var
    let data = this.getData();
    //if data if no null, show elements and assign it to class var
    if(data != null){
      this.responseReceived = true;
      this.data = data;
    }
  }
  //after element appear
  ngAfterViewInit(): void {
      //get all elements
      let elements = document.querySelectorAll(".content");
      //assign data from class var to local
      let data = this.data;
      //run throw every element
      for(let element of elements){
        //get random number with max of all objects of request
        let randNumber = Math.floor(Math.random() * Object.keys(data).length);
        //get a specific object from random numbem
        let selectedKey = Object.keys(data)[randNumber];
        //get image and text and change textcontent and souce
        let imageElement:HTMLImageElement = element.getElementsByTagName("img")[0];
        imageElement.src = data[selectedKey]["image_uri"];
        let titleElement:HTMLElement = element.getElementsByTagName("h1")[0];
        titleElement.textContent = Object.values(data[selectedKey]["name"])[0] as string;
      }
  }

  getData() {
    //make a simple synchronous request to api
    const request = (url: string) => {
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );
      return xmlHttp.response;
    }
    
    let requestReponse = JSON.parse(request('http://acnhapi.com/v1/fish/'));
    return requestReponse;
  }
}


