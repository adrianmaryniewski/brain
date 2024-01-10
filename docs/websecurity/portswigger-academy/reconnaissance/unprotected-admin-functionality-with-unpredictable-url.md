# Unprotected admin functionality with unpredictable URL

Link: https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url

The second thing we can do right after checking the robots.txt file is to check the source of the page. After clicking "Access the lab", we might, for example, go to "My Account", right-click on an empty field and choose "View Page Source":

![view page source](https://www.dropbox.com/scl/fi/17u2zwvei1puzydi5979a/pb-q71Rq2HElQ.png?rlkey=zuiwd91gv6ama1mocrqpqv8za&raw=1)

What appears before us is the static code of the page (if we chose "Inspect", we could modify the page - a dynamic option).

We see that there is a JavaScript code that contains a path with an unusual name:

```
/admin-cty0yq
```

![js code with weird path name](https://www.dropbox.com/scl/fi/r9jpggsiz4uej8xcan12l/pb-beJ8fVmna2.png?rlkey=s317kdz6wd7t2bcndjy0aygxo&raw=1)

So, we navigate to that page:

```
https://0ad700bd0406d4bc82256f5a00c3008c.web-security-academy.net/admin-cty0yq
```

Of course, the beginning of the address may vary.

We have entered the admin panel:

![admin panel](https://www.dropbox.com/scl/fi/a6trt3xclrve00t4gf8tr/pb-UHUeB3xTg6.png?rlkey=2htu6xq2zdyyl4xpa7vxmy9rv&raw=1)

We delete the user carlos:

![carlos deleted](https://www.dropbox.com/scl/fi/24bdj7j7ttj0cdjzdq5ae/pb-6LrjdxU3F7.png?rlkey=enteyqegutf280ohn6agizmf4&raw=1)