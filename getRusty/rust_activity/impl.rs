
struct Hospital{
    no_doctors:i32,
    no_patients:i32
}
impl Hospital {
    
    fn gen_data()->Self{
        Self{
            no_doctors:300,
            no_patients:1500
        }
    }

    fn show_no_of_doctors(&self){
        println!("number of doctors in the hospital is {}",&self.no_doctors);
    }
    fn show_no_of_patients(&self){
        print!("number of patients in the hospital is {}",&self.no_patients);


    }

}

pub fn main() {

    let canser= Hospital::gen_data();

    canser.show_no_of_doctors();
    canser.show_no_of_patients();
}
