use std::cmp::Ordering;
pub fn main() {
    let (mut x,mut y,mut z)=(29,3,44);
    
        match 20.cmp(&mut y) {
        Ordering::Less=>print!("hell yeah"),
        Ordering::Greater=>print!("hell no"),
        Ordering::Equal=>print!("noooooooooooooo!")
        
    };
    

}
