import "./App.css";
import { LoremIpsum } from "lorem-ipsum";

function App() {
  // js code here

  // using loremipsum
  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  let posts = [];
  for (let i = 0; i < 5; i++) {
    posts.push(lorem.generateSentences(1));
  }
  console.clear();
  console.log("sentences", posts);

  // hard code text array example
  // const posts = [
  //   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  //   { id: 2, title: "Installation", content: "You can install React via npm." },
  //   {
  //     id: 3,
  //     title: "reusable component",
  //     content: "render easy with reusable component.",
  //   },
  //   {
  //     id: 4,
  //     title: "React",
  //     content:
  //       "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality. React Router is an example of such a library. Redux, MobX, and Relay are examples of other libraries that are frequently used in React applications for state management. With React Native, React's capabilities are also available to native iOS and Android applications.",
  //   },
  //   {
  //     id: 5,
  //     title: "React",
  //     content:
  //       "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality. React Router is an example of such a library. Redux, MobX, and Relay are examples of other libraries that are frequently used in React applications for state management. With React Native, React's capabilities are also available to native iOS and Android applications.",
  //   },

  //   { id: 100, title: "I just got hired!", content: "OMG!" },
  // ];

  // return jsx here
  return (
    <>
      <div>
        <ul className="ListContainer">
          <li className="List">1. {posts[0]}</li>
          <li className="List">2. {posts[1]}</li>
          <li className="List">3. {posts[2]}</li>
          <li className="List">4. {posts[3]}</li>
          <li className="List">5. {posts[4]}</li>
        </ul>
      </div>
      {/* <div>
        <ul className="ListContainer">
          {posts.map((post, idx) => {
            return (
              <div className="List" key={idx}>
                {idx + 1}. {post}
              </div>
            );
          })}
        </ul>
      </div> */}
    </>
  );
}

export default App;
