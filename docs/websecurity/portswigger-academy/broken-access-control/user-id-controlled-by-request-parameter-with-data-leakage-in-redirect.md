
# User ID Controlled by Request Parameter with Data Leakage in Redirect

Link: [https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-data-leakage-in-redirect)

![description](https://www.dropbox.com/scl/fi/wvrk1bpunjupmn4g2yr0e/pb-AZ5yQQyIsZ.png?rlkey=9br6a8v7dppwy65caq4n8j3ew&raw=1)


Our task is to obtain the API key of the user carlos. After clicking "Access the lab", we proceed to "My account", log in with the provided username and password, which are ***wiener:peter***:

![login wiener peter](https://www.dropbox.com/scl/fi/zmrdpi1azrs3cpltm6fnl/pb-u9RB9PYHxR.png?rlkey=ec9idc1b0j4q2fpu27gv0c4xw&raw=1)


After logging in, we can observe a few interesting things.

1. The API key is visible to the logged-in user.
2. The ID parameter equals the username and is visible in the URL bar.

![after logging](https://www.dropbox.com/scl/fi/syg8lcwrtcmz6d1dthti8/pb-klMD0Z5yNs.png?rlkey=h9j9m5hivikyvw6htnfrbvoam&raw=1)



Let's see what happens if we replace the user wiener with carlos and press "Enter":

![change of the username](https://www.dropbox.com/scl/fi/xy6w7rfk2h92wsby69el0/pb-nCe8zPa8F6.png?rlkey=vuad58c1lu5b9b1g28mos6n67&raw=1)


We are logged out of the application, but Burp Suite is running "underneath".

With Burp Suite running in the background, we can check the communication:

![wrong user redirection](https://www.dropbox.com/scl/fi/982djtnsabc0c93ql5kuy/pb-QRaKEtgAFA.png?rlkey=4jk764lkjre7qdsmy0jvsnclp&raw=1)




In the request with the "carlos" parameter, we see a "302" status, meaning a redirect. Indeed, we saw the login screen in the application, but before that happened - a page with the user's data was displayed. The correct behavior would be to remove the HTML code from the response and leave only the headers. In this case, we can browse the page content to see if we can find the API key we are interested in:


![carlos api key](https://www.dropbox.com/scl/fi/d4m8b2wgx1e59s0kcsjxp/pb-OtQgVybd8h.png?rlkey=sumpb4p3gzpe3ibp83oan6t8f&raw=1)



We copy the API key, go to the page, click "Submit solution". Done:


![submit solution](https://www.dropbox.com/scl/fi/ny7e1ozqzq2eb520afn4i/pb-zdYLFRWzAz.png?rlkey=yot21gydj57mquptd1i8igdzn&raw=1)



![lab solved](https://www.dropbox.com/scl/fi/m9kcvdhlkgjp966a7sost/pb-tWHBKur2Yp.png?rlkey=5qissdepkptuokas4a76ckilo&raw=1)