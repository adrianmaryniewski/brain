# Unprotected Admin Functionality

Link: https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality

![Lab: Unprotected admin functionality](https://www.dropbox.com/scl/fi/0i3b1xd251ian2e0nstha/pb-263ehJclRA.png?rlkey=chovszu6dopl0uahl34b2bhcu&raw=1)

After clicking "Access the lab," we are presented with an online store. Our task is to gain access to the admin panel and delete the user ***carlos***. We do not know the login or password.

During reconnaissance, it's worth checking the ***robots.txt*** file.

In the address bar, we type /robots.txt. In my case, the address to look at is:

https://0ab900f404772d3a8570680d00b100e8.web-security-academy.net/robots.txt


We are greeted with this view:
![Disallow: /administrator-panel](https://www.dropbox.com/scl/fi/ke72mkcup9ygv0utfwo4k/pb-wIVPg9YzXO.png?rlkey=6nb6vt4ewnhpi46pi25y902sw&raw=1)


So, we proceed to the following address:
https://0ab900f404772d3a8570680d00b100e8.web-security-academy.net/administrator-panel


Bingo. We have accessed the panel:
![administrator-panel](https://www.dropbox.com/scl/fi/i7f2nhrix3jz9b1kbjfhp/pb-Iv67JLD815.png?rlkey=1ydd0nkm4l0cj25iqvovu4o9z&raw=1)

We click "Delete" next to the user carlos.


Task completed:
![unprotected admin functionality solved](https://www.dropbox.com/scl/fi/rnvo5fxho0fhms6683jq5/pb-l3yXFJGn05.png?rlkey=vqo8jacyw5t4e2kjkhnlyqftq&raw=1)
