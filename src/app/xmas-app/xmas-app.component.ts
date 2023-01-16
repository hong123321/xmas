import { Component, OnInit } from '@angular/core';
import Konva from 'konva';
import { Layer } from 'konva/lib/Layer';
import { Stage } from 'konva/lib/Stage';

@Component({
  selector: 'app-xmas-app',
  templateUrl: './xmas-app.component.html',
  styleUrls: ['./xmas-app.component.scss']
})
export class XmasAppComponent implements OnInit {
  stage!: Stage;
  layer!: Layer;
  constructor() { }

  ngOnInit(): void {
    this.stage = new Stage({
      container:'xmas-app',
      height:window.innerHeight,
      width:window.innerWidth,
    })
    this.layer = new Layer();
    this.stage.add(this.layer)
    this.layer.draw()
    this.createStar()
  }

  createStar(){
    const star= new Konva.Star({
      x:100,
      y: 200,
      numPoints: 6,
      innerRadius: 40,
      outerRadius: 70,
      fill: 'yellow',
      stroke: 'black',
      strokeWidth: 4,
      draggable:true
    })

    this.layer.add(star)
    this.layer.draw()
  }


}
