const g = document.getElementById('otp')
const title = document.getElementById('title')
const v = document.getElementById('otpSize')

const handleClick = () => {
    g.innerHTML = generateOtp(v.value)
}


function generateOtp(size) {
    let digits = '0123456789'
    let otp = ''
    for(let i=0;i<size;i++){
        otp += digits[Math.floor(Math.random() * 10)]
    }
    return otp
}