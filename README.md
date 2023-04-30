# Stylament

> A fundament for your document styling.

This is gonna be solid. And flexible. At the same time. 😲 Awesome!

## What?

**⚠️ Spoiler ⚠️:** Yes, this is **yet another HTML & CSS framework**.

_Stylament_ is a framework or a blueprint for building well-structured and prettily-styled web pages.

## Why?

After decades of using HTML & CSS frameworks like _Foundation_ and _Bootstrap_, giving fresh candidates like _Bulma_ a try, even fighting popular misconceptions like _“utility first”_ 🙄, I finally wanted to build my own thing. 💪

I am well-aware of the existence of a bazillion of CSS frameworks out there. And I know about the notion that CSS frameworks in general suck. So, who needs another one? – Well, I do. Why? Because it’s probably true: CSS frameworks suck. At least, they tend to be less helpful the more confident you are writing CSS from scratch. In other words: Having your website depend on a CSS framework can quickly become a pain in the ass. Bloated stylesheets, littered mark-up, opinionated solutions you don’t agree with.

How does that make sense? Building a CSS framework because CSS frameworks are bad? It’s not that they are intrinsically bad. It’s just that expecting such a framework to fit every use-case is futile. If you want an API (as in, a set of building blocks and means to customize them) that fits (almost) any kind of web document just rely on vanilla HTML and vanilla CSS. It’s as easy as that. But it’s also easy to mess up. Of course, you need to establish reasonable structures for your HTML and CSS. Potentially reusable structures. That’s where your own personal HTML & CSS framework comes into play. Now it makes sense. 😌

That being said, I can’t tell if this project will ever be useful for anyone but me. Maybe people can learn from it, just as I have learned from others.

## How?

🚧 N. B.: The _how_ is still subject to change quite a bit.

_Stylament_ is a system of layers, similar to [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528), but also incorporating ideas from [Every Layout](https://every-layout.dev/), [CUBE CSS](https://cube.fyi/), and a lot of my own 🧪📐🧮🔍✏️

### Layers of Stylament

- [Axioms](ax-intro.html)
  - Config
  - Preprocessing Tools
  - CSS Custom Properties
  - Generic CSS
- [Elements](el-intro.html)
- [Idioms](id-intro.html)
- [Objects](ob-intro.html)
- [Utilities](ut-intro.html)

### Install

```sh
npm install stylament
```

### Configure

Create a configuration file, e. g. `custom/config.scss`:

```scss
$config: (
  layout: (
    length: (
      // …
    ),
    container: (
      // …
    ),
    spacing: (
      // …
    ),
  ),
  typography: (
    font-family: (
      // …
    ),
    font-weight: (
      // …
    ),
    letter-spacing: (
      // …
    ),
    line: (
      // …
    ),
    measure: (
      // …
    ),
    scale: (
      // …
    ),
  ),
  ui: (
    radius: (
      // …
    ),
    shadow: (
      // …
    ),
    stroke: (
      // …
    ),
  ),
  color: (
    palettes: (
      // …
    ),
  ),
);
```

See [the documentation](ax-config.html) for details.

### Use

In your stylesheet entry point (e. g. index.scss) load your custom configuration and all the Stylament layers, injecting your config into the _axioms_ layer.

```scss
@use "custom/config" as custom;

@use "stylament/css/axioms" with ($config-custom: custom.$config);
@use "stylament/css/elements";
@use "stylament/css/idioms";
@use "stylament/css/objects";
@use "stylament/css/utilities";
```
