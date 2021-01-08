---
title: Why did we make idemeum decentralized?
date: 2021-1-6 00:00:00
description: idemeum is a decentralized identity platform that gives people the power to control their digital identity, improves end user experience, and helps enterprises strengthen data privacy.
featured_image: /assets/img/blogs/about-privacy/image-about-privacy.jpg
author: Nikolay
type: blog-post
---

## How is digital identity evolving?

Today digital identity is typically managed at enterprise or application level. What that means is that when you sign up for a service or get hired by a company, your digital identity is created for you, and it is stored at a centralized database owned by a service provider. To access service or corporate resources, we have to prove our digital identity by presenting username / password combination.

![](/assets/img/blogs/about-privacy/centralized-identity-model.png)


This **centralized model** is not convenient for us users - we have to constantly create accounts and memorize numerous password combinations. Moreover, these central databases become honeypots for attackers, who target these databases with persistence and advanced tools in order to steal our personal information and monetize it by committing identity fraud or selling it on a dark web.

<blockquote class="blockquote">“Today’s digital identity frameworks are centralized, suffer from a lack of trust, aren’t portable, and don’t give consumers control.”
<footer class="blockquote-footer"><a href="https://www.forrester.com/report/New+Tech+Decentralized+Digital+Identity+DDID+Q1+2020/-/E-RES147115" target="_blank">Forrester research</a></footer>
</blockquote>

At the same time centralized model is not desirable for service providers - credentials get compromised and lead to costly cyber breaches, or they simply get forgotten which leads to password resets and costly support calls.

As a result, industry moved to a **federated** identity model where a single party becomes in charge of creating and managing digital identities for a group of different enterprises and services. The most used federation providers are Google and Facebook, where you can use your social network account to log in and sign up for other services.

Federated model provides better user experience, however it has similar drawbacks. Federated model creates massive pools of data that can be monetized and also serve as a central point of failure. With federated model users have no control over their digital identity since they do not know what data is exactly collected and what it is used for. A recent example is the [**Cambridge Analytica scandal**](https://en.wikipedia.org/wiki/Facebook–Cambridge_Analytica_data_scandal) where Facebook gave unfettered and unauthorized access to personally identifiable information (PII) of more than 87 million Facebook users without their consent to the data firm Cambridge Analytica.

## We made idemeum decentralized

We built idemeum to be **decentralized** so that we can enable 100% user privacy. idemeum removes the need for a central trusted authority. Users store their digital identity on mobile devices and decide what and with who they want to share their personal information.

Let's look at how idemeum if different from centralized and federated models.

* **Control**: with idemeum you have full control of your digital identity.
* **User experience**: idemeum simplifies sign-in and sign-up experience. No more passwords to type, and no more lengthy forms to fill out - access the service with a click of a button.
* **Security**: security is way better with idemeum as users are no longer using passwords, and enterprises are no longer maintaining centralized honeypots of PII information.
* **Fraud**: idemeum reduces identity fraud as there are no more credentials and passwords to re-use.
* **Portability**: with idemeum your digital identity is portable. You can bring our identity to a new place of work, or use it when signing up for a new service. No need to constantly recreate your digital self.

## How does idemeum enable 100% privacy?

The first principle of idemeum is "privacy by design". We do not store any PII information in our backend. Let's take a look at some high level technical information to understand how idemeum works.

When you create your idemeum on a digital device, you are assigned a [**Decentralized Identifier (DID)**](https://www.w3.org/TR/did-core/) that uniquely represents your digital identity among others. You DID is a globally unique persistent identifier that does not require a centralized registration authority because it is generated and registered cryptographically.

![](/assets/img/blogs/about-privacy/decentralized-idemeum.png)

idemeum also generates an asymmetric cryptographic key pair that will be unique for your digital identity. Also known as [**public-key cryptography**](https://en.wikipedia.org/wiki/Public-key_cryptography ) this style of cryptography uses a public key to encrypt data that can only be decrypted with a paired private key. Public key, which can be known to public, is stored in idemeum backend and is associated with your DID. Private key, which must be kept secret, is safely stored on your mobile device and is protected by hardware based security.

idemeum uses asymmetric cryptography to authenticate your identity. When you log in to an online resource, idemeum backend sends your app a challenge with the request to sign it with your private key. By scanning your biometric with idemeum app you automatically unlock your private key, sign the requested challenge, and send it back to our backend. This way we can always know that you are who you claim to be.

No passwords needed - instead we leverage the power of asymmetric cryptography and biometric based authentication.

![](/assets/img/blogs/about-privacy/authn.png)

When you create your idemeum profile and add identity claims such as phone number, email address, or ID document, all information is safely stored on your mobile device only. We not no store any of your personal information in our backend.

<div class="alert alert-primary" role="alert">
  idemeum is a decentralized identity platform - we do not store any of your personal information in our cloud. We fundamentally believe in digital identity privacy, and we made idemeum to be private-by-design.
</div>
