# User role can be modified in user profile

Link: https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile

![user role can be modified in user profile](https://www.dropbox.com/scl/fi/daytbsg9cj4rtua5nz0ix/pb-hV5DUVrRAH.png?rlkey=nfwjlq6ni4fdi5ur78xihx70i&raw=1)

We click "Access the lab", and an online store appears with the option to log in under the "My account" tab. We use the login data from the task description.

![user role can be modified in user profile login panel](https://www.dropbox.com/scl/fi/2dx2r7ocsrwjonwro5qf6/pb-Nu79NGvif0.png?rlkey=fmm7x5uaq7edd58kq6jy6bzcg&raw=1)

To keep things organized, I add the page by selecting "Add to scope":

![my-account add to scope](https://www.dropbox.com/scl/fi/puyberebd82dss1fobci2/pb-GK2DPOAAmq.png?rlkey=72qlkvoe1ttpqnvbxz4y3gkrr&raw=1)

Next, I go to the "Target" > "Scope settings" tab:

![target > scope settings](https://www.dropbox.com/scl/fi/cclnyzgsmgjfhndjkhok7/pb-xcOUzqAAOk.png?rlkey=l2a46ejq1xdupv93t2udd79qm&raw=1)

I select and edit the page in the "Prefix" column. Before editing:

![edit prefix for in-scope URLs](https://www.dropbox.com/scl/fi/mcc51el0x2tndv2rsdv1x/pb-qhDzBTDIjj.png?rlkey=8blc1gwc9tarej9hu0lvihu8i&raw=1)

After editing:

![edit prefix for in-scope URLs after editing](https://www.dropbox.com/scl/fi/5hv6hs16uglu8pcmaakbw/pb-OWoxU6EuBU.png?rlkey=4k2rpvik1vlcn5q150ooumfi6&raw=1)

I click "**OK**" to confirm.

I return to the "Proxy" tab, click on "Filter settings: Hiding CSS, image and general binary content":

![filter settings](https://www.dropbox.com/scl/fi/xoo41gldjmjijv7helg4k/pb-4AiE98ZTZ7.png?rlkey=zmxh657fgo1hijtqki31l2a8u&raw=1)

I select the option: "**Show only in-scope items**":

![show only in-scope items](https://www.dropbox.com/scl/fi/brufjl8brj5ipgq8mc8mk/pb-LflBSIboE0.png?rlkey=j5y67k24pw2ssqo2r7hzxplo2&raw=1)

We move to the application, if we are logged in and have Burp connected in the background, we change the email for our user:

![change the mail of a user](https://www.dropbox.com/scl/fi/q8qs6jluqjk1hqyrqqbbr/pb-AI6zuZlef4.png?rlkey=9kkwcum0thsez5sj9q6fn3q0o&raw=1)

After pressing "Update mail", we see a POST request to the /my-account/change-email endpoint:

![post request change email](https://www.dropbox.com/scl/fi/4713p7mtvffiy1b4hg605/pb-yjMecVPLKV.png?rlkey=tu4yaipgp1fbxwd2ow3k68t9k&raw=1)

In the "Proxy" > "HTTP history" tab, we can see the response, which includes: superfluous information. For example, our roleid:

![roleid response](https://www.dropbox.com/scl/fi/l96rrw2y5mzrd5u83t34f/pb-z5BTITn6sc.png?rlkey=7bk1p82bpf47x4h1rfmr36ztv&raw=1)

How can we use this information, knowing that roleid = 2 is the administrator account?

Right-click on the request in the history and send to "Repeater" - there can also be the keyboard shortcut control + command + r:

![send request to repeater](https://www.dropbox.com/scl/fi/by0aim9x43366uxy19p2q/pb-LtbclrC2Am.png?rlkey=h72zod4l4yvcnmyx9m6psw5b7&raw=1)

When we go to the "Repeater" tab, we send the modified request - we add a roleid that is equal to 2:

```
POST /my-account/change-email HTTP/2
Host: 0a0900500486a9868b57a9cc0000007f.web-security-academy.net
Cookie: session=Ko7Z7Au4McuM6VcbkHrcGPwB8bVUcLHC
Content-Length: 31
Sec-Ch-Ua: "Not_A Brand";v="8", "Chromium";v="120"
Sec-Ch-Ua-Platform: "macOS"
Sec-Ch-Ua-Mobile: ?0
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.71 Safari/537.36
Content-Type: text/plain;charset=UTF-8
Accept: */*
Origin: https://0a0900500486a9868b57a9cc0000007f.web-security-academy.net
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: https://0a0900500486a9868b57a9cc0000007f.web-security-academy.net/my-account?id=wiener
Accept-Encoding: gzip, deflate, br
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8
Priority: u=1, i

{
	"email":"wiener@new-user.net",
	"roleid":2
}
```

What do we see in the response? Roleid equal to 2:

![roleid = 2](https://www.dropbox.com/scl/fi/6yqfpnxcjwpfjc0gnp9u2/pb-cGSgw6iECa.png?rlkey=0o6hnkmug5dozfgdor4o353tm&raw=1)

So we check what is in the application (refresh the page):
![admin panel](https://www.dropbox.com/scl/fi/atp7qby1wma14qmeveg6v/pb-wwbva9t9wW.png?rlkey=ma8fbo0uvjdhpgq5tl8k508zj&raw=1)

We go to the admin panel, delete the user carlos:
![no more carlos](https://www.dropbox.com/scl/fi/ccq6ahwjt8sc53zqgiev9/pb-QQu4d5LO3n.png?rlkey=xa0hrlj2q6laep53vbkkx69ws&raw=1)

Lab completed:

![user role can be modified in user profile solved lab](https://www.dropbox.com/scl/fi/fg458rg2kxt6k4k1yxwr2/pb-IHkCHVeEP8.png?rlkey=6u26554zjx1ccori9wcitytwu&raw=1)
