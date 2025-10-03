# Stylament

> A fundament for your document styling.

Designed to advocate consistency while providing a fair amount of flexibility.

## What?

_Stylament_ is
- **not** a design system itself
- **but** a system of tools for scaffolding design systems, think _meta design system_,
- **neither** a “CSS framework” **nor** a “CSS methodology” intended to relieve you of the need to learn CSS
- **but** a rather sophisticated approach to take advantage of the strengths of CSS (reusability, organizability, … _The Cascade™_)
- **not** a simple theme to apply to your pages and be done, **but** it comes with [blueprints](/example/) for building well-structured and prettily-styled web pages,
- **simply put**, a collection of HTML & CSS patterns (but free of JavaScript overkill).

## Why?

After decades of using big HTML & CSS frameworks like _Foundation_ and _Bootstrap_, seeing hundreds of CSS micro-frameworks popping up, being confronted with the popular misconception called _“utility first”_, I still hadn’t found an  HTML & CSS system that really met my expectations. So, I could no longer resist to build my own.

## How?

- **Rules-driven:** Good style _needs_ rules. _Stylament_ relies on a set of rules (yes, that’s CSS DNA, you name it) that build on one another.
- **Consistency-first:** Obey the rules! The less exceptions, the better. But if they exist, they do so to prove the rules.
- **Classless-first:** Good mark-up can do without extra class-level specificity more often than you’d think. Although not a typical classless CSS framework per se, _Stylament_ does a lot of heavy lifting on the [element](https://stylament.sim.ilitu.de/sassdoc/el-intro.html) and [idiom](https://stylament.sim.ilitu.de/sassdoc/id-intro.html) layers.
- **Utility-last:** With the above being said, _Stylament_ acknowledges the usefulness of [utility](https://stylament.sim.ilitu.de/sassdoc/ut-intro.html) CSS – for said legitimate but rare exceptions.

🚧 N. B.: The _how_ is still subject to change. There may be breaking changes with every release.

### Standing on the Shoulders of Giants

_Stylament_ is inspired by a lot of good work others did before me:

- organized in layers like [ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)
- using the best of different methodologies (the right tool for the job) like [CUBE CSS](https://cube.fyi/)
- founded on axioms like [Every Layout](https://every-layout.dev/)
- driven by a comprehensive set of CSS custom properties like [Open Props](https://open-props.style/)

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
