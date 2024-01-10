# User ID controlled by request parameter, with unpredictable user IDs

Link: [https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-unpredictable-user-ids)

![user id controlled by request parameter with unpredictable user ids description](https://www.dropbox.com/scl/fi/vfc35k8zfxftwvvdgywci/pb-CFOJElshCD.png?rlkey=r0f84ipnxs21nw5maoriiqvhw&raw=1)

This is another example of "***horizontal privilege escalation***", this time using a GUID, which stands for Globally Unique Identifier.

After clicking "**Access the lab**", we see a blog. It's noticeable that various identifiers appear in the URL bar when viewing profiles of different users. I'm about to provide screenshots to clarify what I mean.

I click on the "**View post**" button under the first post:

![view post first post](https://www.dropbox.com/scl/fi/iu46dfk55muvwyd14y7yc/pb-SVvCOLE0iB.png?rlkey=do1o444ica7dynhe4uhdpllw7&raw=1)

Then on the username:

![admin screenshot](https://www.dropbox.com/scl/fi/ojhvk1ox2wp5iwceeyqlq/pb-RhcWVo84UT.png?rlkey=p55gmtsapkhn6p1l03o7hfvia&raw=1)

Now you can see the user's identifier in the URL bar:

Link: [https://0ab8000f0424435382b0ba4600890061.web-security-academy.net/blogs?userId=90b0df73-318f-4308-9810-753cb157aec1](https://0ab8000f0424435382b0ba4600890061.web-security-academy.net/blogs?userId=90b0df73-318f-4308-9810-753cb157aec1)

```
userId=the_rest_is_guid
```

Since we can obtain the administrator's GUID, we should also be able to get the user identifier for carlos. After a few seconds of searching, I found post ID 6, which belongs to carlos:

![carlos post](https://www.dropbox.com/scl/fi/2i5zzsj0cl44bgebiqtov/pb-TIgSNupn4h.png?rlkey=ks7mayagfjypsr7nmrngmh92p&raw=1)

Clicking on his name, we obtain the GUID in the address bar:
```
userId=640f2c14-8f0e-44f3-aa69-df3376e7c5eb
```

Our task is to obtain the API Key of the user carlos. However, we only have access to the user wiener.

We log in with the credentials provided in the task:
```
wiener:peter
```

![wiener account](https://www.dropbox.com/scl/fi/2z3jx3wyd0iu634wnfzex/pb-guTJ9Ex4io.png?rlkey=syfyrl22obffetgbtw3s3jdg7&raw=1)

We check the requests in Burp.

Let's see if changing the ID in the request will give us access to carlos's account:

![get request wiener](https://www.dropbox.com/scl/fi/ddfw2xag0mfw4xw2aminc/pb-dNeQXu7IfA.png?rlkey=6ovb92fzrn60b7quq02dmnpmy&raw=1)

Right-click on the highlighted request and select "***Send to Repeater***".

We replace userId with carlos's ID. We send the request. In response, we get status 200:

![carlos api key](https://www.dropbox.com/scl/fi/gh4gb6mjdwwrrefgylium/pb-Iio5TQ6li9.png?rlkey=5kapj8fl0gvduujyz0h4m36es&raw=1)

We copy the API Key, click "Submit solution" and send the response. Done:

![user id controlled by request parameter with unpredictable user ids lab solved](https://www.dropbox.com/scl/fi/qfy51txr3cx8qogqn4gv1/pb-5jnlH1q3hb.png?rlkey=adprw73574yfezbujlo6zrqmm&raw=1)


