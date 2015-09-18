## subClass

### Description
A decorator to create CSS subclasses, like a simple BEM, for React.

### Demo
`npm start dev` then visit http://127.0.0.1:3000

### Usage
```js
import subClass from 'react-subclass';

@subClass
class App extends React.Component {
  render() {
    return (
      <div>
        <div subClass='main'>
          <div subClass='title'>
            Hello !
          </div>
        </div>
        <div subClass='aside'>
          Aside
        </div>
      </div>
    );
  }
}
```

### Yields
```html
<div class='Demo'>
  <div class='Demo__main'>
    <div class='Demo__title'>
      Hello !
    </div>
  </div>
  <div class='Demo__aside'>
    Aside
  </div>
</div>
```

### Customize
Use the factory to customize :
```js
import { factory } from 'react-subclass';
const myDecorator = factory({ separator: '--', propName: 'cx' });
```
