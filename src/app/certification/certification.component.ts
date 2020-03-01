import { Component, OnInit, Input } from '@angular/core';
import { Certif } from './certif.model';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {


  @Input() public title: string;
  @Input() public rating: number;
  @Input() public description: string;


  constructor() {}


  Certifs : Certif[] = [
    //new Certif('CCNA',4.5,'test_string','../assets/CCNA-logo.jpg',['security','networking']) ,
    /**new Certif('lpi101',3,'test2string','../assets/LPI-101-logo.gif') ,
    new Certif ('CEH',5,'test3string','../assets/CEH-logo.png') ,
    new Certif('CCNA',4.5,'test_string','../assets/CCNA-logo.jpg') ,
    new Certif('lpi101',3,'test2string','../assets/LPI-101-logo.gif') ,
    new Certif ('CEH',5,'test3string','../assets/CEH-logo.png') ,
    new Certif('CCNA',4.5,'test_string','../assets/CCNA-logo.jpg') ,
    new Certif('lpi101',3,'test2string','../assets/LPI-101-logo.gif') ,
    new Certif ('CEH',5,'test3string','../assets/CEH-logo.png')**/
  ] ;
    


  ngOnInit() {
  }

}


/** {
      title: 'CCNA',
      rating: 4.5,
      description: 'This exam tests a candidate\'s knowledge and skills related to network fundamentals, LAN switching technologies, IPv4 and IPv6 routing technologies, WAN technologies, infrastructure services, infrastructure security, and infrastructure management.'
    },

    {
      title : 'lpi101',
      rating : 4,
      description : 'Candidates should be able to determine and configure fundamental system hardware'
    }
  ] */