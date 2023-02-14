pub fn main() {
    let vector=vec![10,20,30,40];
for num in &vector{
    match num {
        30=>println!("thirty"),
        _ =>println!("{}",num)
       }
    }
println!("the length of the vector is {}",&vector.len())
}
