# User Role Controlled by Request Parameter

Link: https://portswigger.net/web-security/access-control/lab-user-role-controlled-by-request-parameter

![User role controlled by request parameter](https://www.dropbox.com/scl/fi/n7b4ai32pexkdx036xkho/pb-FMltvhLooJ.png?rlkey=mh8s4ok2vy3by3kxcuh4g7arh&raw=1)

Upon accessing the "lab," we see an online store. From the description above, it's clear that there is a path "***/admin***". Let's append it to the URL:

https://0ac20088032ca4178199d989007300f7.web-security-academy.net/admin

We receive information that the admin panel is only available if we log in as such a user. Sounds logical:

![admin interface only available if logged in as an administrator](https://www.dropbox.com/scl/fi/350ult2holkj2egjh2ozi/pb-i4X39EnFCN.png?rlkey=ghnyx5gdqq6i6z446pxzl6esk&raw=1)


What's worth doing before this test is to go to the Proxy > Proxy settings tab:

![proxy settings](https://www.dropbox.com/scl/fi/7a3mgnigpp24quumwalss/pb-likLLahcKQ.png?rlkey=d4l2v2y0e7p0nwrhrgmkle7dp&raw=1)

Then select the "Intercept requests based on the following rules" option and uncheck whatever is selected in the "Enabled" column:

![request interception rules](https://www.dropbox.com/scl/fi/1q0fviwx7xkssfvd8e50u/pb-TZOgiVjZI5.png?rlkey=n26ck16mwevwr9m2trxzeijj9&raw=1)

"To configure network traffic interception in Burp Suite, go to the "Proxy" tab, then "Proxy settings". In the "Request Interception Rules" section, uncheck all options in the 'Enabled' column. Then select the "Intercept requests based on the following rules" option. This will pause the interception process in the "Intercept" tab when you capture requests and responses, allowing for manual analysis and management of each received response."

In the "Proxy" > "Intercept" tab, click "Open browser". Navigate to the lab. Click on "My Account".

![login panel](https://www.dropbox.com/scl/fi/4k86sitsx0y5pz65m7pbk/pb-xQqRkzk7z2.png?rlkey=t68eiqo7hlt2wkm59drzuuzv5&raw=1)


Make sure that the "Intercept is on" option is enabled.
![intercept is on](https://www.dropbox.com/scl/fi/pyd1r99surbm05etz9p7a/pb-cFMtqBCLcD.png?rlkey=57ipdmfmyt0uabpxkwyonwq27&raw=1)




Log in with the given credentials (wiener:peter) to trace the traffic:

```
POST /login HTTP/2
Host: 0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net
Cookie: session=tWXWUqhxxGqK63djWvGAikc3c8cvOnm5
Content-Length: 68
Cache-Control: max-age=0
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Upgrade-Insecure-Requests: 1
Origin: https://0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net
Content-Type: application/x-www-form-urlencoded
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net/login
Accept-Encoding: gzip, deflate, br
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Priority: u=0, i

csrf=kv22Q9hDGCvkx1Uhfd2X2T5xf4mF5tTL&username=wiener&password=peter
```




Click "Forward" to check the next response:
![forward button](https://www.dropbox.com/scl/fi/1wq704xtz39emcvz6lhvt/pb-3yFiKOhGGk.png?rlkey=xqxkr3yftdehlweu1ljfsu0pt&raw=1)




It looks like this:
```
GET /my-account?id=wiener HTTP/2
Host: 0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net
Cookie: Admin=false; session=MWj6LXlEd6CBFs2e2B4sQy1t9v9K008o
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120"
Sec-Ch-Ua-Mobile: ?0
Sec-Ch-Ua-Platform: "macOS"
Referer: https://0a0a00e3041ea9d386f88a1b002c00c6.web-security-academy.net/login
Accept-Encoding: gzip, deflate, br
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Priority: u=0, i


```

We see that in the header (3rd line) we have the value "**Admin**" set to "**false**". From the perspective of someone testing the application for security, a "red light" goes on.

After changing the "false" parameter to "true", click "Forward" until we are logged in. In every response where we have the Admin=false parameter, we change it to **true**. This will allow us to access the admin panel. We go to the browser and see that we have access to it:

![user role controlled by request parameter admin panel access](https://www.dropbox.com/scl/fi/r9fy2dn54g3tanx4qu8j8/pb-sEWiT2Nsgi.png?rlkey=bprwihp1z4mx241wai75qkmgh&raw=1)

We go to the admin panel:
![carlos admin panel](https://www.dropbox.com/scl/fi/qqmrkge4lus7ftu0di05t/pb-LXhlL8iwfZ.png?rlkey=j7qvc1cblmvttge0j34wjw78c&raw=1)

We delete the user carlos:

![user role controlled by request parameter carlos deleted](https://www.dropbox.com/scl/fi/8wkjok0zd5865w5zpr522/pb-sF8Om3hHmH.png?rlkey=dakv6pgoepx3c220ls8efc1zu&raw=1)
