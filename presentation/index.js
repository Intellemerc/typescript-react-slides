// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Image,
  Link
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";

import { theme } from "spectacle-theme-solarized-dark";
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  npmDownloads: require("../assets/TypescriptNPM-Downloads.png")
};

preloader(images);

/*const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Typescript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Javascript that scales
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Why Typescript</Heading>
          <List textColor="primary">
            <Appear><ListItem>Superset of Javascript</ListItem></Appear>
            <Appear><ListItem>Can Mix JS and TS</ListItem></Appear>
            <Appear><ListItem>Zero runtime cost <span style={{ fontSize: 14 }}>(ts disappears at runtime)</span></ListItem></Appear>
            <Appear><ListItem>Great intellisense/autocomplete support</ListItem></Appear>
            <Appear><ListItem>Type inference</ListItem></Appear>
            <Appear><ListItem>Mature ecosystem</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Typescript - Usage(NPM downloads)</Heading>
          <Image src={images.npmDownloads} />
          <Link href="https://npm-stat.com/charts.html?package=babel&package=typescript&package=flow-bin&from=2016-10-01&to=2017-03-31" target="blank" >Source</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>How does this help me?</Heading>
            <Text textAlign="Center" lineHeight={5} textSize={52} bold caps>Demo</Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="bash"
          code={require("raw-loader!../code/createTypescript.example")}
          ranges={[
              { loc: [0, 8], title: "Easy Way - Greenfield" },
              { loc: [2, 3], title: "Install CRA" },
              { loc: [5, 7], title: "Start the project" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Existing project: Init</Heading>
          <List textColor="primary">
            <Appear><ListItem>Use CRA/Typescript as template</ListItem></Appear>
            <Appear><ListItem>Yarn add --dev typescript ts-loader tslint tslint-loader tslint-react @types/jest @types/node @types/react @types/react-dom</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Existing Project: Webpack</Heading>
          <List>
            <Appear><ListItem>Add entry for ts and tsx files passing to ts-loader</ListItem></Appear>
            <Appear><ListItem>Add entry for ts-lint</ListItem></Appear>
            <Appear><ListItem>If using jest add .ts entry re-use transformer from CRA</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary" caps>Existing Project: Webpack</Heading>
            <Text textAlign="Center" lineHeight={5} textSize={52} bold caps>Demo</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>Existing Project: Hardest part</Heading>
          <List>
            <Appear><ListItem textColor="tertiary" lineHeight={5} >Rename js files to ts/tsx</ListItem></Appear>
            <Appear><ListItem textColor="tertiary" lineHeight={5} >Rename js files to ts/tsx</ListItem></Appear>
            <Appear><ListItem textColor="tertiary" lineHeight={5} >Fix components to use generics</ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
