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
- **simply put**, a parametrized Sass stylesheet along with some suggestions on HTML patterns to use.

## Why?

### TL;DR

It’s all because of [the CSS saga](https://www.w3.org/Style/LieBos2e/history/). And it’s _my personal version_ of its continuation since 2022.

### The Long and Winding Road (to Enlightenment)

I encountered CSS for the first time in the late ’90s, not much later than HTML. But it was only around 2001 when I began actively using it and started understanding that it is so much more than just another syntax to write HTML spilled with presentational features. Sites like [Listamatic](https://css.maxdesign.com.au/listamatic/) were eye-openers at that time. And of course, [the CSS Zen Garden](https://www.csszengarden.com/) was the lighthouse to guide the way.

But despite the separation of presentational and structural aspects, as with any code you write, stylesheets quickly grow confusing, unless you _organize them well_. No matter how much I knew about certain CSS specifics and the newest features, how much CSS and rendering engines evolved – the remaining and recurring problems always revolved around organization. I could write very smart CSS rules. But I needed rules how to arrange those rules. What belongs where? Where to look if something is already defined?

### Motivation

When it comes to processing amounts of information bigger than what we can crasp at a glance the following holds for most of us:
- We want order.
- We want structure.
- We want separation of concerns.
- We want confidence where to put things and where to find them.

Therefore, we design classification systems, rules and standards. And despite common goals sometimes we just need to develop [the 15th standard](https://xkcd.com/927/). So did I.

### Competition

Yes, I’m aware: Frameworks do exist.

Sure, I’ve seen dozens of projects relying on _Bootstrap_ (at least half of which with a long-term TODO: “Get rid of Bootstrap”). I used to be on the _Foundation_ side for quite some years (mainly because: a little less utility class polution). However, I was never quite contented with that kind of frameworks as they required substantial adjustments to the markup in order to work.

I was still searching for a framework that I could employ with any thoroughly marked-up document to just work out of the box. In recent years, the term _classless CSS framework_ was coined for exactly that. And there are plenty. I really like some of them. They are a great and effortless way to give your plain HTML document a modern look. On the other hand they usually fall short when it comes to customizability.

The sheer opposite are _“utility first”_ frameworks. I’ll spare the words and let [Heydon speak](https://heydonworks.com/article/what-is-utility-first-css/). Nevertheless, what I’d like to mention in that context: Defining _atoms_ of the design language (a.k.a. _design tokens_) is an essential step in setting up a design system. But they belong in the right layer. Frameworks like [_Open Props_](https://open-props.style/) do that.

Apart from frameworks, there are also a lot of _methodologies_ that come without any predefined styles but rather with naming conventions and suggestions on how to organize your CSS. Which is good. To name a few:

- I like _ITCSS_ (at least the organization aspect), because when I stumbled upon it, it perfectly reflected the way I had learned to think about the organization of CSS (or things, actually) – _from general to specific_. (The layer names in Stylament are obviously inspired by ITCSS.)
- I like the general idea of _BEM_ but not its redundant class names.
- I like [_CUBE CSS_](https://cube.fyi/). It’s a great approach to use the right tool for each job.
- Did I mention, I do not like _utility first_?
- I like [_Every Layout_](https://every-layout.dev/)!

### The Missing Piece

After looking into all those frameworks and methodologies I still hadn’t found an HTML & CSS system that really met my expectations, which were:

- strong support for well-structured markup – without class garbage
- clear rules defining what belongs where
- mathematical tools to generate series of design tokens from a small set of configurable values

Especially the last point I couldn’t find satisfied anywhere. So, I started my own system.

## How?

- **Rules-driven:** Good style _needs_ rules. _Stylament_ relies on a set of rules (yes, that’s CSS DNA, you name it) that build on one another.
- **Consistency-first:** Obey the rules! The less exceptions, the better. But if they exist, they do so to prove the rules.
- **Classless-first:** Good mark-up can do without extra class-level specificity more often than you’d think. Although not a typical classless CSS framework per se, _Stylament_ does a lot of heavy lifting on the [element](https://stylament.sim.ilitu.de/sassdoc/el-intro.html) and [idiom](https://stylament.sim.ilitu.de/sassdoc/id-intro.html) layers.
- **Utility-last:** With the above being said, _Stylament_ acknowledges the usefulness of [utility](https://stylament.sim.ilitu.de/sassdoc/ut-intro.html) CSS – for said legitimate but rare exceptions.

### Embracing Inspiration

_Stylament_ appreciates and is inspired by [what’s in the wild](#competition):

- organized in layers like _ITCSS_
- using the best of different methodologies (the right tool for the job) like _CUBE CSS_
- founded on axioms like _Every Layout_
- driven by series of CSS custom properties like _Open Props_

### Layers of Stylament

- [Axioms](https://stylament.sim.ilitu.de/sassdoc/ax-intro.html)
- [Elements](https://stylament.sim.ilitu.de/sassdoc/el-intro.html)
- [Idioms](https://stylament.sim.ilitu.de/sassdoc/id-intro.html)
- [Objects](https://stylament.sim.ilitu.de/sassdoc/ob-intro.html)
- [Utilities](https://stylament.sim.ilitu.de/sassdoc/ut-intro.html)

### Implementation

_Stylament_ is written in [Sass](https://sass-lang.com/). Actually, it’s just a Sass stylesheet. With a somewhat complex configurability.

### Install

Essentially, clone the [repository](https://github.com/smnscp/stylament) and [include](#use) the Sass sources in your Sass stylesheet.

Or, if you like package managers:

```sh
npm install github:smnscp/stylament
```

### Configure

In order to adjust the design token series that _Stylament_ generates, define a configuration map, e. g. in `custom/config.scss`:

```scss
$config: (
  layout: (
    // …
  ),
  typography: (
    // …
  ),
  ui: (
    // …
  ),
  coloring: (
    // …
  ),
);
```

See [the documentation](https://stylament.sim.ilitu.de/sassdoc/ax-config.html) for details.

### Use

In your stylesheet entry point (e. g. index.scss) load your custom configuration and the Stylament (sub-)layers you want to include, injecting your config into the _axioms_ layer.

```scss
@use "custom/config" as custom;

@use "stylament/css/axioms" with ($config-custom: custom.$config);
@use "stylament/css/elements";
@use "stylament/css/idioms";
@use "stylament/css/objects";
@use "stylament/css/utilities";
```
