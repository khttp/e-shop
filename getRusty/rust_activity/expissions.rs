
struct GroceryItem{
    id:i32,
    quantity:i32
}
fn display_id(item:&GroceryItem){
println!("the id is : {}",item.id);
}
fn display_quantity(item:&GroceryItem) {
   println!("the quantity is : {}",item.quantity); 
}
pub fn main() {
    let item = GroceryItem{
        id: 20,
        quantity:49
    };
    display_id(&item);
    display_quantity(&item);
}
