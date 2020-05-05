const user_email = document.getElementById("email")
const user_password = document.getElementById("password")
const submit = document.getElementById("submit")
const SUBMIT = document.querySelector("[data-submit]")

const users = [
    {
        name:"Yusuf Keraan",
        email:"yus@gmail.com",
        password:"fakepasswordone"
    },
    {
        name:"John Doe",
        email:"john@yahoo.com",
        password:"fakepasswordtwo"
    },
    {
        name:"Malik Rami",
        email:"malik@hotmail.com",
        password:"fakepasswordthree"
    }
]

SUBMIT.addEventListener('click',event=>{
    event.preventDefault()
    const found = false
    const user = {email:user_email.value,password:user_password.value}
    users.forEach(client => {
        if(client.email==user.email){
            if(client.password==user.password){
                alert(`Wellcome ${client.name}`)
                found=true
            }
            else{ 
                alert(`Password incorrrect`)
                found=true
            }
        }
    })
    if(!found) return alert("Email not found")
})