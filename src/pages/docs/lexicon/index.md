---
title: "Get Started"
description: "User experience design language."
layout: "guide"
icon: "lexicon-site-about"
weight: 1
---


### Design language

Lexicon is a design language created with the aim of providing a common framework for building interfaces within the Liferay product ecosystem. A guide to foundations, components, patterns and contexts of use that contributes to give consistency and coherence to these products and, ultimately, provide a satisfactory and unified experience to its users.

Lexicon is a constantly evolving project. An iterative work that seeks to improve and gradually adapt to the evolution of technology and people.

### Modular approach

The Lexicon approach to interface design is based essentially on modularity. It is configured as a system that from a controlled number of components is able to respond to the multiple and different needs of liferay products. An exercise in synthesis, abstraction and coordination that seeks to simplify processes, reduce production times and, above all, to guarantee the consistency we want for the use experience.

For this, the construction of Lexicon is based on the Atomic Design theoretical approach. A work methodology based on modularity that seeks to give a more hierarchical and organized logic to the creation of interfaces design systems. This methodology has been ideated and developed by the designer Brad Frost and is based on nonlinear process organized across five stages: Atoms, Molecules, Organisms, Templates and Pages.

### Lexicon site

Lexicon Site is then presented as the necessary platform for the diffusion and access to Lexicon system by designers, developers or any other person involved in the creation of digital products. Mainly focused on Liferay community, but open to anyone who wants to make use of its content and also want to contribute with their own proposals and suggestions.

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/foundation.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Foundations</h4>
        <p>Foundations are those principles a design system lies on. This principles can be modified not affecting the component's behavior. We are talking about things such as colors, grid or typography.</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/component.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Core Components</h4>
        <p>Core compontents contains all those components that are essential to build interfaces and used in such extent that worths it to have it in the core implementation of the design system. Each component define rules and behaviours. Each component look and feel is based on the combination of the foundations previously. Therefore, changes in foundations will be propagated to the entire system. In our case, these components are implemented by [Clay](https://clayui.com/).</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img  class="getstarted-img" src="../../../images/getstarted/satellite.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Satellite Components</h4>
        <p>These components are specific needs from certain products or applications. They are built using the foundations and core components offered by Lexicon. These components are not owned by the design system but by the product or application who created them..</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/template.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Templates</h4>
        <p>Templates offers as serie of solutions to tackle repetitive interfaces. These templates speed up the design process as you only need to make some specific modifications for your use case and place the content on them.</p>
    </span>
</span>

<span class="getstarted-card row">
    <span class="col-12 col-sm-2 col-md-3 text-center">
        <img class="getstarted-img" src="../../../images/getstarted/example.png" alt="">
    </span>
    <span class="getstarted-info col-md">
        <h4>Examples</h4>
        <p>UX Designers showcase in this section different interfaces created with Lexicon that break with the templates used before. These are very valid uses of Lexicon where you can see how core components and satellite components are applied to create interfaces that tackle specific scenarios.</p>
    </span>
</span>


The components you find along our site are labeled for you to have a link to its implementation or the product where you could find it. This can be important to see them working live or in a context of use.

| Label | Usage |
| ---- | ----- |
| <a class="label-link label label-warning" href="https://clayui.com/" target="_blank">VIEW IN CLAY</a> | Providing a link to the pattern implementation. |
| <span class="label label-info">PRODUCT NAME</span> | Informing that the pattern is use in a concrete product or application. |
| <span class="label label-secondary">PENDING</span> | The pattern has been designed and will be implemented either in Clay or a Product/Application. |

### Implement Lexicon

Lexicon is not an implementation, it is just a set of patterns, rules and behaviors. Many different libraries could implement Lexicon. Liferay's Lexicon Experience Language web implementation is [Clay](https://clayui.com/).