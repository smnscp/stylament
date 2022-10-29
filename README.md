# Stylament

> A fundament for your document styling.

This is gonna be solid. And flexible. At the same time. 😲 Awesome!

## What?

**⚠️ Spoiler ⚠️:** Yes, this is **yet another HTML & CSS framework**.

*Stylament* is a framework or a blueprint for building well-structured and
prettily-styled web pages.

## Why?

After decades of using HTML & CSS frameworks like _Foundation_ and _Bootstrap_,
giving fresh candidates like _Bulma_ a try, even fighting popular misconceptions
like *“utility first”* 🙄, I finally wanted to build my own thing. 💪

I am well-aware of the existence of a bazillion of CSS frameworks out there.
And I know about the notion that CSS frameworks in general suck.
So, who needs another one? – Well, I do. Why? Because it’s probably true:
CSS frameworks suck. At least, they tend to be less helpful the more confident
you are writing CSS from scratch. In other words: Having your website depend on
a CSS framework can quickly become a pain in the ass. Bloated stylesheets,
littered mark-up, opinionated solutions you don’t agree with.

How does that make sense? Building a CSS framework because CSS frameworks are
bad? It’s not that they are intrinsically bad. It’s just that expecting such a
framework to fit every use-case is futile. If you want an API (as in, a set of
building blocks and means to customize them) that fits (almost) any kind of web
document just rely on vanilla HTML and vanilla CSS. It’s as easy as that. But
it’s also easy to mess up. Of course, you need to establish reasonable structures
for your HTML and CSS. Potentially reusable structures. That’s where your own
personal HTML & CSS framework comes into play. Now it makes sense. 😌

That being said, I can’t tell if this project will ever be useful for anyone but
me. Maybe people can learn from it, just as I have learned from others.

## How?

🚧 N. B.: The _how_ is subject to change. **A lot.**

### Configure

```scss
@use "stylament/css/a.settings" with (
  $config-custom: (
    sizes: (xs, sm, md, lg, xl),
    font-weights: (
      light: 300,
      regular: null,
      medium: null,
      semibold: null,
      bold: null,
      extrabold: 800,
    ),
    modular-scale: (
      min: -3,
      max: 9,
      factor: 1.5,
    ),
    line-heights: (
      root: 1.2,
    ),
  ),
);
@use "stylament/css/b.tools";
@use "stylament/css/c.generic";
@use "stylament/css/d.elements";
@use "stylament/css/e.objects";
@use "stylament/css/f.components";
@use "stylament/css/g.utilities";
```
