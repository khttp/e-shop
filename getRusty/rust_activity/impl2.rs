//every thin in this shit 

struct BoxCharacters{
   color:BoxColor,
   weight:f32,
   dim:Dimensions
}impl BoxCharacters {
    
    fn print_char(&self){
        self.color.print_color();
        self.dim.print_dim();
    }
}


//dimensions only 

struct Dimensions {
    height:f32,
    width:f32,
    theckness:f32
}impl Dimensions {
    fn print_dim(&self){
       println!("width:{},height:{},theckness:{}",self.width,self.height,self.theckness) 
        
    }
    
}

//color only

enum BoxColor{
    Red,
    Green,
    Blue
}impl BoxColor {
    fn print_color(&self){
        match self {
            BoxColor::Red=>println!("the box color is red"),
            BoxColor::Green=>println!("the box color is green"),
            BoxColor::Blue=>println!("the box color is blue")
            
        }
    }
    
}


pub fn main() {

    let fish_box=BoxCharacters{
        color:BoxColor::Red,
        weight:32.4,
        dim:Dimensions { 
        
            height: 49.0,
            width:299.0,
            theckness:59.0 
        }
    };

    fish_box.print_char();

}
