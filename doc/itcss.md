# ITCSS

The [Inverted Triangle CSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)
approach suggests organizing styles in layers which build upon each other and reach from completely general to
very specific scope. As [intended by its author](https://csswizardry.com/2018/11/itcss-and-skillshare/)
*Harry Roberts* there is no official documentation. However, the general idea is pretty clear, as it’s more or
less just a very thorough naming scheme for the most natural and sound way to organize (styling or any other)
rules: [From general to specific](https://en.wikipedia.org/wiki/Hierarchy#Containment_hierarchy).

Here is, **in my own words**, what each of these layers is about:

1. Settings
   - A set of constants specifying the values of certain properties of the design, e. g., fonts, colors,
     sizing, spacing, decoration, …
   - Also [called design tokens](https://medium.com/salesforce-ux/living-design-system-3ab1f2280ef7#90cf).
   - Platform-agnostically defined in a Style Dictionary, they are imported as
     [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
     (a. k. a CSS variables) and, if needed, as preprocessor variables.
   - For a reasonable implementation example of this layer see [Pollen](https://www.pollen.style/).
2. Tools
   - Globally used mix-ins and functions for CSS preprocessors.
   - Using PostCSS, these will probably be implemented as @apply blocks.
3. Generic
   - Reset/normalize styles, e. g. box-sizing definition.
   - Consider not to “reset” styles that will be defined in `Elements`, anyways.
   - One reasonable and modern normalizer is [normalize.css](https://csstools.github.io/normalize.css/).
   - I also like my own topping to the former: [n’ize.css](https://github.com/smnscp/n-ize.css)
4. Elements
   - Styling for bare HTML elements.
   - Ideally, follow MDN’s [HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
     to organize this layer.
5. Objects
   - Common design patterns as described by [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
   - Normally represented by assigning a single classname.
   - More specific than plain HTML elements, less complex than components (no application logic).
   - E. g., layout objects, specific navigation menu patterns.
   - (For the very common question:
     [Objects vs. Components](https://www.reddit.com/r/Frontend/comments/4rdf8x/itcss_objects_vs_components/))
6. Components
   - Specific self-contained UI pieces.
   - Component styles build upon _1. Settings_ and _2. Tools_ to fit into the design system.
   - Since the styles are specific to each component they can be kept next to the respective component code file.
7. Utilities
   - Utilities and helper classes.
   - Overwrite anything else: use `!important`.
   - Reserved for rare cases of one-offs that cannot be easily classified.
   - Otherwise prone to support bad habits.
