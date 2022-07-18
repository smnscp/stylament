

# Basic Design Tokens

This is an inventory of basic context-agnostic tokens, mostly adopted from Pollen CSS.
So far, it serves as nothing but a source of inspiration and overview of which categories of tokens are needed.

## Token Categories

### Typography

**See:** https://www.pollen.style/modules/typography

#### Modular Scale

**See:** https://www.pollen.style/modules/typography#modular-scale

**Suggestion:** Major third, equal-tempered: [∛2 ≅ 1.26](https://www.modularscale.com/?1&em&2@3),
makes for doubled size every three steps on the scale.

**Example:**

```css
  --scale-1
```

#### Line Height

**See:** https://www.pollen.style/modules/typography#line-height

**Suggestion:** In contrast to relative line height like `line-md`,
use line height tokens that correspond to the respective font size
if you want to establish a baseline grid.

**Example:**

```css
  --line-1
```

#### Font Families

**See:** https://www.pollen.style/modules/typography#font-families

**Example:**

```css
  --font-sans
```

#### Font Weights

**See:** https://www.pollen.style/modules/typography#font-weights

**Example:**

```css
  --weight-light
```

#### Letter Spacing

**See:** https://www.pollen.style/modules/typography#letter-spacing

**Example:**

```css
  --letter-xs
```

#### Prose Width

**See:** https://www.pollen.style/modules/typography#prose-width

**Example:**

```css
  --prose-xs
```

### Layout

**See:** https://www.pollen.style/modules/layout

#### Sizes Scale

**See:** https://www.pollen.style/modules/layout#size-scale

**Example:**

```css
  --size-1
```

#### Container Widths

**See:** https://www.pollen.style/modules/layout#container-widths

**Example:**

```css
  --width-xs
```

### UI

**See:** https://www.pollen.style/modules/ui

#### Strokes Scale

_Not included in Pollen. But potentially useful (to distinguish stroke widths from general size)._

**Example:**

```css
  --stroke-1
```

#### Radius

**See:** https://www.pollen.style/modules/ui#radius

**Example:**

```css
  --radius-100
```

#### Blur (Backdrop Filters)

**See:** https://www.pollen.style/modules/ui#blur

**Example:**

```css
  --blur-xs
```

#### Layers

**See:** https://www.pollen.style/modules/ui#layers

**Example:**

```css
  --layer-1
```

#### Elevation (Drop Shadows)

**See:** https://www.pollen.style/modules/ui#elevation

**Example:**

```css
  --elevation-1
```

#### Easing (Transition Curves)

**See:** https://www.pollen.style/modules/ui#easing

**Example:**

```css
  --easing-standard
```

### Color Palette

**See:** https://www.pollen.style/modules/colors

**Example:**

```css
  --color-grey
```

### Grid

**See:** https://www.pollen.style/modules/grid

#### Grid Template

**See:** https://www.pollen.style/modules/grid#grid-template

**Example:**

```css
  --grid-2
```

##### Page Grid

**See:** https://www.pollen.style/modules/grid#page-grid

**Example:**

```css
  --grid-page
```
