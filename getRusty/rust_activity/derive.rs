#[derive(Debug)]
enum Color{
    Red,
    Green,
    Yellow
}
struct Person {
    name :String,
    fav_color:Color
}
pub fn main() {

    let ahmed = Person{
        name: String::from("ahmed yehia"),
        fav_color:Color::Red
    };
    println!("{:?}",ahmed.fav_color);
    
}
