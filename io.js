function generateOTP() {
    // Generate a random 6-digit OTP
    var otp = Math.floor(100000 + Math.random() * 900000);
    // Display the OTP in the span element
    document.getElementById("otp").value = otp;
    document.getElementById("otpDisplay").textContent = otp;
}
