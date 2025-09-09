const hostname = window.location.hostname.trim();
let baseUrl = "http://localhost:80";
let razorpayMerchantId = "rzp_test_F0TUZmabOwKkhe";

if (
    hostname === "purego.gomzilifesciences.in" ||
    hostname === "www.purego.gomzilifesciences.in"
) {
    baseUrl = "https://api.fggroup.in";
    razorpayMerchantId = "rzp_live_tdfTCMm8C9gJNN";
} else if (hostname === "test.purego.gomzilifesciences.in") {
    baseUrl = "https://dev-api.fggroup.in";
} else {
    baseUrl = "https://dev-api.fggroup.in";
    // baseUrl = "http://localhost:80";
}

export const RAZORPAY_MERCHANT_ID = razorpayMerchantId;

const apiConfig = {
    BASE_URL: baseUrl,
    RAZORPAY_MERCHANT_ID: razorpayMerchantId,
};

export default apiConfig;
