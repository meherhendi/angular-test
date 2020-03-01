export class Certif {
    public name: string;
    public rating : number;
    public description: string;
    public Purpose : string;
    public passing_info : string;
    public imagePath: string;
    public sections : string[];
    public Chapters : string[];
    public Related_Certif : string[];  

    constructor(name: string,
       rating : number,
       description: string,
       Purpose : string,
      passing_info : string,
       imagePath: string,
       sections : string[],
       Chapters : string[],
       Related_Certif : string[]) {
      this.name = name;
      this.rating = rating;
      this.description = description;
      this.Purpose = Purpose ;
      this.passing_info = passing_info;
      this.imagePath = imagePath;
      this.sections = sections ;
      this.Chapters = Chapters ;
      this.Related_Certif = Related_Certif
    
    }
  }