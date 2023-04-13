class myclass1 {
    id:any={id:"hello",name:"ms"};
    constructor(ID:String) {
        this.id=ID;        
    }
    setId(val:any){
      this.id["name"]=val;
      console.log(this.id);
    }
}