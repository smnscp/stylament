# Stylament

> A fundament for your document styling.

This is gonna be solid. And flexible. At the same time. 😲 Awesome!

## What?

_Stylament_ is
- a design _system_,
- a blueprint for building well-structured and prettily-styled web pages,
- a collection of HTML & CSS patterns.

_Stylament_ is **not**
- a “CSS framework” to keep you from learning CSS,
- a simple theme to apply to your pages and be done,
- a component library adding tons of JavaScript dependencies.

## Why?

After decades of using big HTML & CSS frameworks like _Foundation_ and _Bootstrap_, seeing hundreds of micro-frameworks popping up, being confronted with the popular misconception called _“utility first”_, I finally followed the urge to build my own design system. Mainly because I wanted to give proof of the viability of _really systematic_ design approaches.

## How?

🚧 N. B.: The _how_ is still subject to change. There may be breaking changes with every release.

### Standing on the Shoulders of Giants

_Stylament_ is inspired by a lot of good work others did before me:

- organized in layers like [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)
- using the best of different methodologies (the right tool for the job) like [CUBE CSS](https://cube.fyi/)
- founded on axioms like [Every Layout](https://every-layout.dev/)
- driven by a comprehensive set of CSS custom properties like [Open Props](https://open-props.style/) or [Pollen](https://www.pollen.style/)

### Layers of Stylament

- [Axioms](https://stylament.sim.ilitu.de/sassdoc/ax-intro.html)
- [Elements](https://stylament.sim.ilitu.de/sassdoc/el-intro.html)
- [Idioms](https://stylament.sim.ilitu.de/sassdoc/id-intro.html)
- [Objects](https://stylament.sim.ilitu.de/sassdoc/ob-intro.html)
- [Utilities](https://stylament.sim.ilitu.de/sassdoc/ut-intro.html)

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
  ),
  coloring: (
    palettes: (
      // …
    ),
    color: (
      // …
    ),
  ),
);
```

See [the documentation](https://stylament.sim.ilitu.de/sassdoc/ax-config.html) for details.

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
