enum Flavors {
    Apple,
    Grapes,
    Goyaves

    
}
struct Drink{
    fluid:f32,
    flavor:Flavors
}

fn description(drink:Drink){
    match drink.flavor{
       Flavors::Apple=>println!("it is apple juice"),
       Flavors::Grapes=>println!("it is grape juice"),
       Flavors::Goyaves=>println!("it is goyave juice")
    }
    println!("the juice is {}",drink.fluid);
}
pub fn main() {
    let apple_juice = Drink{
        fluid:3.4,
        flavor:Flavors::Apple,
    }; 
    let grape_juice=Drink{
        fluid:5.3,
        flavor:Flavors::Grapes
    };  
    let goyave_juice=Drink{
        fluid:4.8,
        flavor:Flavors::Goyaves
    };
     description(apple_juice);
} 

