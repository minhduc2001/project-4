const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    singer: {
        type: String,
        default:'Unknown'
    },
    image:{
        type: String,
        default: 'https://lh3.googleusercontent.com/N065semw08v7Nb6P2qiTmK3QYUklGEAOeoJ7ELHV9jcfygJVVpt80S6vJ_ivXKPzDViLc6KLLgTL7eTzsOY4AHXLuYhhX95cN5m9PMzbqGfn6RjoWjLMQ7wdcp-RO3nqPU6CxODXbdxK-Q8lLcrX2igh2_FCSlTWM_rk23aLegvO4mjo_tuJKNLi7hS4fr_BIWNnKL2ew2Qt9lqgzpHLs2HVGBf29d0eCuPPiaOmt94PJ4xBda7TpYtPeLDokTzpRy8kpIG7OwDTn8Rgx5SJof-oSrnrqgwNvJWxJqWYN7mTS351enrqukxpUR8cBFjTT7nVzxWK3bSiYyXBg55g3dIlKlJZ0SF_HLP5-TtuFHCT0rvxsHoX5undkTStGqcDOpmEt3u7vJQX3FREbChzgzxRyFgvVDuHfvGLgUkt1cwxfXwHLkg3239lw7jglDFdFgy2sxju7MzRhu4XFQgSKPomco7Q72qM6Bpgare_0UOsYFR2bxNxobgLqqfzdjrJEvoK1l9uo1OoLDUWoCEm3ljXGu5EsvWpbbx7e0ROn5IXDtPyO5vl3vD1lbqw8Nlm7gGb7K42letgNScb_U20C3yOTNwrCrMiCsd3tKA3Sdqy3rtEje8QvF7rlVZCnRZgufzhO1FlS2CN7M6o0tkywSA7dqpKwI-2mYv4621ZEBeSY1YwpM_kbPyePA155URVtXRSujNPbKhvkurTBwW4DpZMs77bhYGFsRSKTQeYlLWWBf7ql289LKwckNv3v3FqpwpXK9UhvdGYlf4F5BHI0AiAXV-Xb7Ut=s929-no?authuser=1'
    },
    src:{
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('musics', musicSchema);