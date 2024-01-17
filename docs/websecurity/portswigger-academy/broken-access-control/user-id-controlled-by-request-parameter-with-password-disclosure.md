# User ID controlled by request parameter with password disclosure (🇬🇧ENG | 🇵🇱PL)

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-password-disclosure

![description](https://www.dropbox.com/scl/fi/r7ddofcvvu1fqi8bvgcyp/pb-cpRDkI2MXC.png?rlkey=c3irnm30l5slnfhr36jdrc1qz&raw=1)

After clicking "Access the lab", we see a store:

![shop main page](https://www.dropbox.com/scl/fi/kmaig63jfpkuunsisjusp/pb-HDHvH0db3i.png?rlkey=t1k53sk9ygzf5b56wh5fp1ej2&raw=1)


We click "My Account" and log in with the username and password that we saw in the task description, namely:

```
wiener:peter
```

![logging](https://www.dropbox.com/scl/fi/oo6ckhixccvq5fn8mfopm/pb-KQW1C39Qxn.png?rlkey=wqwhlwl93mhyu244d44dk9wsp&raw=1)

Here we can notice two interesting things. First: there is a place with a saved password, and second: the username is visible in the URL.


![after logging](https://www.dropbox.com/scl/fi/x7rre23w717h16o0qetd5/pb-jABNCQWSxr.png?rlkey=67l1oglhk1z8fwn4h0ddwq5pa&raw=1)

Let's see what happens if we change "wiener" to "administrator".

![changing wiener to admin](https://www.dropbox.com/scl/fi/btb2u6ha4tpubs2htr86v/pb-DVjYEv5C5A.png?rlkey=ma59dwkc65bdom3tlco4i4ad1&raw=1)

After the change and hitting "Enter", we see that the password length has changed.

We can right-click on this field, select "Inspect" and check what interesting things we find in the code:

![inspect element](https://www.dropbox.com/scl/fi/533yv7d608a51z6vi41ft/pb-om3XGNVxrZ.png?rlkey=jq981qykxfst5a3zq1m5ogabj&raw=1)

The password appears in the code, which we can copy:

![password in HTML code](https://www.dropbox.com/scl/fi/k4echrqv48enjv9kzztug/pb-UboXw3MWXG.png?rlkey=2mrqn437hzefnrnmexvb0zjlc&raw=1)

The goal of the task is to log in as an administrator and **delete** the user ***carlos***, so we log out, enter our username, which is "**administrator**", and the password, which in this case is: "**2mjl02cmn2pvzs2gkvf1**". Passwords will differ in each task, so it's not worth copying. :)

![after admin logging](https://www.dropbox.com/scl/fi/9cxarvsortqbj2h8w8im8/pb-wNlgW5CAbK.png?rlkey=77p9swcnl7o0dieqp6rf9h5fe&raw=1)

We see the "**Admin panel**", so we go there and delete the user:

![poor carlos](https://www.dropbox.com/scl/fi/t4ud7dk5s81drj6xm3du8/pb-nJ83PO1fwZ.png?rlkey=7y4ku3u88cqlkueg48dp0jcjy&raw=1)

![carlos deleted](https://www.dropbox.com/scl/fi/zn3iy7263r0x63adqpdmg/pb-d5Isof4YpE.png?rlkey=w5461e0aedvggx6db33qh2rzg&raw=1)

This is another example of an incorrect way of creating applications. Passwords used in applications **should not** be stored "on the front", or stored in plain text.


---

🇵🇱PL:

Link: https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-password-disclosure

![description](https://www.dropbox.com/scl/fi/r7ddofcvvu1fqi8bvgcyp/pb-cpRDkI2MXC.png?rlkey=c3irnm30l5slnfhr36jdrc1qz&raw=1)

Po kliknięciu "Access the lab", widzimy sklep:

![shop main page](https://www.dropbox.com/scl/fi/kmaig63jfpkuunsisjusp/pb-HDHvH0db3i.png?rlkey=t1k53sk9ygzf5b56wh5fp1ej2&raw=1)




Klikamy "My Account" i logujemy się loginem i hasłem, które widzieliśmy w opisie zadania, czyli

```
wiener:peter
```


![logging](https://www.dropbox.com/scl/fi/oo6ckhixccvq5fn8mfopm/pb-KQW1C39Qxn.png?rlkey=wqwhlwl93mhyu244d44dk9wsp&raw=1)


Można zauważyć tutaj dwie ciekawe rzeczy. Pierwsza: jest miejsce z zapisanym hasłem, oraz druga: w adresie URL widoczna jest nazwa użytkownika.

![after logging](https://www.dropbox.com/scl/fi/x7rre23w717h16o0qetd5/pb-jABNCQWSxr.png?rlkey=67l1oglhk1z8fwn4h0ddwq5pa&raw=1)


Sprawdźmy co się stanie, jeśli zmienimy "wiener" na "administrator".

![changing wiener to admin](https://www.dropbox.com/scl/fi/btb2u6ha4tpubs2htr86v/pb-DVjYEv5C5A.png?rlkey=ma59dwkc65bdom3tlco4i4ad1&raw=1)


Po zmianie i kliknięciu "Enter", widzimy, że długość hasła zmieniła się.

Możemy kliknąć na tym polu prawym przyciskiem myszy, wybrać "Inspect" i sprawdzić co też ciekawego znajdziemy w kodzie:

![inspect element](https://www.dropbox.com/scl/fi/533yv7d608a51z6vi41ft/pb-om3XGNVxrZ.png?rlkey=jq981qykxfst5a3zq1m5ogabj&raw=1)


W kodzie widnieje hasło, które możemy skopiować:

![password in HTML code](https://www.dropbox.com/scl/fi/k4echrqv48enjv9kzztug/pb-UboXw3MWXG.png?rlkey=2mrqn437hzefnrnmexvb0zjlc&raw=1)



Celem zadania jest zalogowanie się jako administrator i usunięcie użytkownika ***carlos***, zatem wylogowujemy się, wpisujemy nasz login, czyli "**administrator**", oraz hasło, czyli w tym przypadku: "**2mjl02cmn2pvzs2gkvf1**". Hasła będą się różnić w każdym jednym zadaniu, także tego nie warto kopiować. :)

![after admin logging](https://www.dropbox.com/scl/fi/9cxarvsortqbj2h8w8im8/pb-wNlgW5CAbK.png?rlkey=77p9swcnl7o0dieqp6rf9h5fe&raw=1)


Widzimy "**Admin panel**", zatem przechodzimy tam i usuwamy użytkownika:

![poor carlos](https://www.dropbox.com/scl/fi/t4ud7dk5s81drj6xm3du8/pb-nJ83PO1fwZ.png?rlkey=7y4ku3u88cqlkueg48dp0jcjy&raw=1)

![carlos deleted](https://www.dropbox.com/scl/fi/zn3iy7263r0x63adqpdmg/pb-d5Isof4YpE.png?rlkey=w5461e0aedvggx6db33qh2rzg&raw=1)


To kolejny przykład niepoprawnego sposobu tworzenia aplikacji. Hasła, które są używane w aplikacji **nie powinny być** przechowywane "na froncie", czy też przechowywane jawnym tekstem.