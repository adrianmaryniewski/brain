# User ID Controlled by Request Parameter

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter

![user id controlled by request parameter description](https://www.dropbox.com/scl/fi/0hdgp80nbey7k832dfh2d/pb-FYrk03hdlL.png?rlkey=wf4qdeda7xcnfdj0jmb85oj68&raw=1)

As described, we will have an example of horizontal privilege escalation here, which is the transition between users at the same level - in this case, between wiener and carlos.

After going to the "My Account" tab, we log in (we have Burp Suite running in the background). Once logged in, we see that the API key is available:

![my account wiener](https://www.dropbox.com/scl/fi/vukarfosegu58v52wp2fl/pb-FqFEB8R7KK.png?rlkey=vbzju8pyfqheutt86cu6betxr&raw=1)

It's worth not only tracking what is displayed in Burp, but also what is displayed in the address bar. In our case, this is visible:

```
https://0a6f00a304aa21f280ec94b70053003d.web-security-academy.net/my-account?id=wiener
```

We see that an ID is passed, which is the "username" we used.


Of course, this is also visible in Burp Suite itself:

![burp get id wiener](https://www.dropbox.com/scl/fi/pea1h9jsy7y6nukropops/pb-QOxb2bRA83.png?rlkey=owcnsabfefkq8o4t8rqzmncyr&raw=1)


We want to switch to carlos's account, so it's worth checking what will happen if instead of "wiener", we enter "carlos". Right-click and send the request to the Repeater:

![send wiener to repeater](https://www.dropbox.com/scl/fi/ha2z829la1b6wyw8vnmw5/pb-JTXsKVQSlj.png?rlkey=391d10arpdn14x98gx6om0ao4&raw=1)



In the Repeater, we change "wiener" to "carlos":

```
GET /my-account?id=carlos HTTP/2
```


We receive a 200 status in response, which means the response is correct. We check what else we can find and it turns out there's quite a lot:

```
Your username is: carlos</p>
<div>Your API Key is: CCzo99zTYW2p6JepKYSFEX0IMOfDegrx</div>
```

We copy the API Key, on the PortSwigger page we click "Submit solution", paste it, send, and done:

![user id controlled by request parameter solved lab](https://www.dropbox.com/scl/fi/r65ykkvmjtozv67otg02t/pb-rm61A8pZsv.png?rlkey=l35tu8u7ylpgy1y7q89s8343d&raw=1)