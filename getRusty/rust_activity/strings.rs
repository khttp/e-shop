use std::cmp::Ordering;

struct Persorn{
    name:String,
    age:i32,
    fav_color:String

}

fn print_data(data: &str ){
    println!("{}",data)
}
pub fn main() {
    let ahmed=Persorn{
        name:String::from("ahmed"),age:9,fav_color:"red".to_owned()
    };
    
    let mohamed=Persorn{
        name:String::from("mohamed"),age:11,fav_color:"blue".to_owned()
    };
    let umar=Persorn{
        name:String::from("umar"),age:3,fav_color:"grey".to_owned()
    };
    let vector_person=vec![ahmed,mohamed,umar];
    for person in vector_person{
        match person.age.cmp(&10) {
            Ordering::Less=>{print_data(&person.name);
                            print_data(&person.fav_color)},
                                    
            _=>println!("older than 10")
        }
    }

}
