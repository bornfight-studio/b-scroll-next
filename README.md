<a href="https://www.bornfight.studio/">
<img width="84px" src="https://www.bornfight.com/wp-content/themes/bf/static/ui/BF-sign-dark.svg?" title="Bornfight" alt="Bornfight">
</a>

# b-scroll-next [[all b- libs](https://github.com/bornfight-studio/b-lib-archive/)]
> Bornfight frontend micro lib for scrolling to next section

![GitHub package.json version](https://img.shields.io/github/package-json/v/bornfight-studio/b-scroll-next?style=flat-square)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/bornfight-studio/b-scroll-next?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/bornfight-studio/b-scroll-next?style=flat-square)
![GitHub](https://img.shields.io/github/license/bornfight-studio/b-scroll-next?style=flat-square)

## 📦 Getting Started

Dependency: `gsap`

- install `b-scroll-next` trough __npm__ or pull ti from git

```
npm i @bornfight/b-scroll-next
```

- include b-scroll-next to your __JS__ after running __npm install__

## 🔨️ Usage 
###### JS
``` JS
import ScrollNext from "@bornfight/b-scroll-next";

new ScrollNext();
```

##### HTML markup

```HTML
<p class="js-scroll-next">
    Go next
</p>
```

##### Basic usage tips
- all elements with `.js-scroll-next` class will trigger scroll
     
## 💎 Customization

``` JS
import ScrollNext from "@bornfight/b-scroll-next";

new ScrollNext({
    element: ".js-links",
    ease: "expo.inOut",
    duration: 5,
    offset: 200
});
```

## ✅ Properties

Option | Type | Default | Example | Description
------ | ---- | ------- | ------- | -----------
element | string | ".js-scroll-next" | ".js-my-scroll-element" | Elements that will be used as "scroll next" triggers   
offset | number | 0 | 200 | number type value - scroll will be offset by that amount in pixels  
ease | string | "power3.inOut" | "expo.out" | Scroll ease can be modified (gsap eases) 
duration | number | 0.5 | 10 | Duration of the scroll in seconds  

## 🚀 Useful to know

1. offset will reflect to every element inside that instance
2. without any option it will scroll just below clicked element
   
### 📦 Contribute

#### Gulp based system 
 - [Gulp](https://gulpjs.com/) 4 used
 - [browsersync](https://browsersync.io/) for live reload
 
```bash
npm run dev - dev environent with browsersync
```

## License

MIT © [Bornfight](https://www.bornfight.com)
