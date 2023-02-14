
enum Ticket{
    Vip(String,f32),
    Standard(f32),
    Backstage(String,f32)
}

pub fn main() {
    let vector:Vec<Ticket>=vec![
        Ticket::Vip("sniper".to_owned(), 32.0),
        Ticket::Standard(19.0),
        Ticket::Backstage("spider".to_owned(), 23.0)
    ];
    for vec in vector{
        match vec {
            Ticket::Standard(price)=>println!("the price of the ticket is {}",price),
            Ticket::Backstage(name,price )=>{
                println!("the name of the holder is {},the price is {}",name,price)
            }
            Ticket::Vip(name,price )=>{
                println!("the name of the holder is {},the priceis {}",name,price)
        }
    }

}
}
