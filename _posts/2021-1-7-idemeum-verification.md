---
title: Why did we make idemeum verified?
date: 2021-1-7 00:00:00
description: Enterprises are still leveraging insecure methods for digital identity onboarding and proofing. Credentials and one time tokens are distributed over email, and no identity verification is done for corporate access. How do we differentiate a real employee vs. some determined hacker?
featured_image: /assets/img/blogs/idemeum-verified/idemeum-verified.jpg
author: Nikolay
type: blog-post
---
## Why do we need to verify digital identity?

Identity plays a major role in everyday life. It’s the key that determines the particular transactions in which we can rightfully participate as well as the information we’re entitled to access.

However, in a world that’s increasingly governed by digital transactions and data, our existing methods for verifying someone's identity are far from adequate.

<blockquote class="blockquote">
  In 2019 alone financial losses due to identity fraud totaled $1.9B
</blockquote>

Remember the meme "On the Internet, nobody knows you're a dog"? It was drawn by [**Peter Steiner**](https://en.wikipedia.org/wiki/On_the_Internet,_nobody_knows_you're_a_dog) and published by The New Yorker on July 5, 1993. It is still as true today as ever.

<div style="text-align: center">
  <img src="/assets/img/blogs/idemeum-verified/idog.png" style="width: 100%">
</div>

The cartoon implies the ability to send and receive messages — or to create and maintain a website — behind a mask of anonymity. "Nobody knows" is there because Internet protocols require no user to confirm or prove one's own identity.

While there are situations where identity proofing is not required or is even undesirable (use cases where anonymity or pseudonymity is required), there are others where it is important to reliably establish an association with a real-life subject. Examples include obtaining health care or executing financial transactions. There are also situations where the association is required for regulatory reasons (the financial industry’s ‘Know Your Customer’ requirements, established in the implementation of the USA PATRIOT Act of 2001) or to establish accountability for high-risk actions (changing the release rate of water from a dam).

<blockquote class="blockquote">When accessing some low-risk digital services, “being a dog” is just fine; while other, high-risk services need a level of confidence that the digital identity accessing the service is the legitimate proxy to the real-life subject.
</blockquote>

## When do we verify digital identity?
To answer this question let's take a look at the simplistic diagram of identity lifecycle and get some terminology in place.

![](/assets/img/blogs/idemeum-verified/identity-lifecycle.png)

Before I can access any service, I need to prove my identity so that a credential can be created, and I can be enrolled as valid subject within the identity system. Therefore, **identity proofing** is all about establishing that an applicant is who they claim to be. At this point I will also create an authenticator (password, PIN, certificate, etc.) that will be linked to my digital identity.

When I return to the service, I need to provide reasonable risk-based assurance that I am the same person who previously accessed the service. Hence, **authentication** establishes that a subject attempting to access a digital service is in control of one or more valid authenticators associated with the subject's digital identity.

And finally, once I am authenticated, the service needs to know what privileges I can be granted. **Authorization** helps with that, as it is the process of giving the user permission to access a specific resource or function.

<blockquote class="blockquote">So, identity proofing typically happens at "before" phase. However, it would be also useful to extend the trust all the way to "during" phase, so that when the user returns to the service, we not only assure that he has a valid authenticator in possession and control, but also assure his identity.</blockquote>

## How does identity verification work?
When identity proofing is done, it needs to be done at a certain "Identity Assurance Level (IAL)". [**National Institute of Standards and Technology (NIST)**](https://www.nist.gov) sets requirements for each of the [**3 levels**](https://pages.nist.gov/800-63-3/sp800-63a.html), based on the required security level and assumed risk.

**Identity Assurance Level 1 (IAL1)**: There is no requirement to link the applicant to a specific real-life identity. Any attributes provided in conjunction with the authentication process are self-asserted or should be treated as such.

**Identity Assurance Level 2 (IAL2)**: Evidence supports the real-world existence of the claimed identity and verifies that the applicant is appropriately associated with this real-world identity. IAL2 introduces the need for either remote or physically-present identity proofing.

**Identity Assurance Level 3 (IAL3)**: Physical presence is required for identity proofing. Identifying attributes must be verified by an authorized and trained representative.

The process of identity verification is progressing across 3 phase. First, the document and additional context need to be **collected**. Second, the supplied information is **validated** to make sure the documents are valid, not expired, or forged, etc.. And finally, the identity is **verified** by matching the document with the photo supplied by the subject. At this phase, [**liveness detection**](https://www.liveness.com) is typically performed to make sure the system is interfacing with a physically present human being and not an inanimate spoof artifact.

## Where do we do identity verification?
Remote identity proofing services are becoming more and more prevalent across online services. Service owners, especially in the financial industry, are integrating identity verification product in order to minimize the impact of ID fraud, which has been steadily increasing recently.

Interestingly enough, things are quite different on the enterprise identity side.

<blockquote class="blockquote">
  71% of surveyed enterprises reported password lockout issues and sign-in challenges
  <footer class="blockquote-footer mt-3"><a href="https://hitachi-id.com/cgi-bin/emaildoc?document=identity-and-access-management-trends-during-covid-19.pdf" target="_blank">Hitachi ID survey</a></footer>
</blockquote>

Enterprises are still leveraging insecure methods as it relates to digital identity onboarding and proofing. Credentials are distributed over email or SMS, or often times managers print them and distribute physically. Even when magic links or one times tokens are used instead of passwords, those are still relying on email for distribution. Think about it - when someone clicks on that magic link or uses one-time password, how do we know that is a real employee and not some hacker?

<blockquote class="blockquote">
  Enterprises have no way of knowing the identity of employee they are providing access to systems and critical resources.
</blockquote>

## idemeum can help
idemeum solves the problem of insecure employee enrollment by providing built-in identity verification.

<div style="text-align: center;">
<img src="/assets/img/blogs/idemeum-verified/verification.png" style="width: 40%;">
</div>

With idemeum app users can upload the ID document and their photo and quickly verify digital identity. idemeum follows IAL level 2 NIST recommendations. As a result of the verification, all verified identity claims are stored on a mobile device only. No PII is maintained or stored in the idemeum backend.

<blockquote class="blockquote">
  idemeum does not store any user identifiable information in the backend.
</blockquote>

It is important to note that idemeum extends the identity trust beyond just initial identity verification and enrollment. Every time the user authenticates or accesses corporate resources, the identity is assured using idemeum app. Therefore, enterprises can have an assurance that only verified and legitimate user are accessing the resources, and not some hackers who gained access to issues authenticators.

If you want to learn more, [**contact idemeum**](https://idemeum.com/contact) so that we can show you a quick demo.
