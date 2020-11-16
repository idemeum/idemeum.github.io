---
title: idemeum approach to security
date: 2020-11-12 00:00:00
description: Security is one of the core principles of idemeum. Security is applied from the ground up in everything we do. We are obsessed with securing your data to the highest standards.
featured_image: /assets/img/blogs/idemeum-security/security.jpg
author: Nikolay
---

Our mission is to make digital identity simple, secure, and private.

Security if one of the core principles that is applied to everything we do - mobile, backend, DevOps, it does not matter, security is fundamental and key.

What is more, authentication is mission critical to businesses and individuals. Therefore, we designed idemeum in accordance with the latest best practices as it relates to Confidentiality, Integrity, and Availability ([CIA triad](https://en.wikipedia.org/wiki/Information_security)).

We are also conducting continuous threat modeling and evaluation to make sure we harden idemeum even further.

<h3>How do we keep your data secure?</h3>

<h5>idemeum backend</h5>

For idemeum backend we have taken a radical new approach by storing your personal data on your mobile device <strong>ONLY</strong>. What that means is that we have no users' digital identity data in our backend. Not only is it important from the privacy standpoint, but it also reduces attack surface significantly. If our backend gets compromised, attackers will get nothing from it, as there is not valuable user data there.

<h5>idemeum mobile application</h5>

On a mobile side, we are follow general mobile security best practices, including [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-security/), in order to protect idemeum mobile application. We leverage security measures such as hardware based key encryption, jailbreak detection, data encryption, liveness detection and others.

<h5>idemeum authentication</h5>

idemeum leverages biometric based authentication that is using biometric sensors on Apple and Google mobile devices. We are using FIDO2 protocol (developed by [FIDO Alliance](https://fidoalliance.org)) that is becoming the de-facto standard in the identity industry. The FIDO Alliance developed FIDO Authentication standards based on public key cryptography for authentication that is more secure than passwords and SMS OTPs, simpler for consumers to use, and easier for service providers to deploy and manage. FIDO Authentication enables password-only logins to be replaced with secure and fast login experiences across websites and apps.

<iframe width="640" height="360" src="https://www.youtube.com/embed/11UfySDn7_I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
