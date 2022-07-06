<h1 align="center">Rent-a-house</h1>

<p align="center">A Single Page App to display list of properties and to filter those properties on the basis of 4 selections and rendering the filtered result to showcase properties satisfying the criteria.</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/33d545a7-b5b1-4141-b9a7-0a51dc5b913f/deploy-status)](https://app.netlify.com/sites/rent-a-casa/deploys)
</br>

## [Live Website](https://rent-a-casa.netlify.app/)

</br>

## Tech Stack and Process

The first step was to set up a development environment for which I used Vite as it provides better performance and a less cluttered environment. Also Hot Module Replacement is great while testing locally.</br>
The second step was to fetch the data from the database.json file and render the data on UI.</br>
The third step was to add dropdown menus for selecting filters such as city, category, price, and date picker for the move-in date for which I used Material UI components.</br>
The fourth step was to add functionality to the filtering mechanism to filter the data from the database to show only the result that satisfy conditions selected by a user through the dropdown menu.</br>
To improve UX, I've disabled the search option until all the filters are selected because the result must satisfy all filters. Also, I've added a reset search button that loads the whole list of houses and reset selected filters for ease.</br>

### Libraries

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/) is used for various UI components
- [Emotion CSS](https://emotion.sh/docs/introduction) is used to style the UI, It is used by MUI as a styling engine(for css in js)

### Build Tool

[Vite JS](https://vitejs.dev/) is used for tooling as CRA replacement

</br>

## Run Locally

```sh
git clone git@github.com:DevanshBajaj/Rent-A-Property.git

yarn

yarn dev
```

</br>
</br>

# License

```
MIT License

Copyright (c) 2022 Devansh Bajaj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
